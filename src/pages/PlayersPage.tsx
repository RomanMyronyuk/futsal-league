import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import {
  Container,
  Title,
  Subtitle,
  Card,
  Button,
  Input,
  Label,
  FormGroup,
  Flex,
  Table,
  Th,
  Td,
  Tr,
  EmptyState,
} from '@/components/UI';

export const PlayersPage: React.FC = () => {
  const { players, addPlayer, updatePlayer, deletePlayer } = useApp();
  const [showAdd, setShowAdd] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');

  const handleAdd = () => {
    if (!newPlayerName.trim()) {
      alert('Введіть імʼя гравця');
      return;
    }

    addPlayer({ name: newPlayerName.trim() });
    setNewPlayerName('');
    setShowAdd(false);
  };

  const handleEdit = (id: string, name: string) => {
    setEditingId(id);
    setEditingName(name);
  };

  const handleSaveEdit = (id: string) => {
    if (!editingName.trim()) {
      alert('Введіть імʼя гравця');
      return;
    }

    updatePlayer(id, { name: editingName.trim() });
    setEditingId(null);
    setEditingName('');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Видалити цього гравця?')) {
      deletePlayer(id);
    }
  };

  return (
    <Container>
      <Flex $justify="space-between" $align="center">
        <Title>Гравці</Title>
        <Button onClick={() => setShowAdd(!showAdd)}>
          {showAdd ? 'Скасувати' : '+ Додати гравця'}
        </Button>
      </Flex>

      {showAdd && (
        <Card>
          <Subtitle>Новий гравець</Subtitle>
          <FormGroup>
            <Label>Імʼя</Label>
            <Input
              type="text"
              value={newPlayerName}
              onChange={e => setNewPlayerName(e.target.value)}
              placeholder="Введіть імʼя гравця"
            />
          </FormGroup>
          <Button onClick={handleAdd}>Додати</Button>
        </Card>
      )}

      <Card>
        <Subtitle>Список гравців</Subtitle>
        {players.length === 0 ? (
          <EmptyState>Ще немає гравців</EmptyState>
        ) : (
          <Table>
            <thead>
              <tr>
                <Th>#</Th>
                <Th>Імʼя</Th>
                <Th>Дії</Th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <Tr key={player.id}>
                  <Td>{index + 1}</Td>
                  <Td>
                    {editingId === player.id ? (
                      <Input
                        type="text"
                        value={editingName}
                        onChange={e => setEditingName(e.target.value)}
                      />
                    ) : (
                      player.name
                    )}
                  </Td>
                  <Td>
                    <Flex $gap="8px">
                      {editingId === player.id ? (
                        <>
                          <Button onClick={() => handleSaveEdit(player.id)}>
                            Зберегти
                          </Button>
                          <Button
                            $variant="secondary"
                            onClick={() => setEditingId(null)}
                          >
                            Скасувати
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button onClick={() => handleEdit(player.id, player.name)}>
                            Редагувати
                          </Button>
                          <Button
                            $variant="danger"
                            onClick={() => handleDelete(player.id)}
                          >
                            Видалити
                          </Button>
                        </>
                      )}
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card>
    </Container>
  );
};

