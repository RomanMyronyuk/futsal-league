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
  Table,
  Th,
  Td,
  Tr,
  EmptyState,
  MobileStack,
  ButtonGroup,
  TableWrapper,
} from '@/components/UI';

export const PlayersPage: React.FC = () => {
  const { players, addPlayer, updatePlayer, deletePlayer } = useApp();
  const [showAdd, setShowAdd] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');

  const handleAdd = async () => {
    if (!newPlayerName.trim()) {
      alert('Введіть імʼя гравця');
      return;
    }

    await addPlayer({ name: newPlayerName.trim() });
    setNewPlayerName('');
    setShowAdd(false);
  };

  const handleEdit = (id: string, name: string) => {
    setEditingId(id);
    setEditingName(name);
  };

  const handleSaveEdit = async (id: string) => {
    if (!editingName.trim()) {
      alert('Введіть імʼя гравця');
      return;
    }

    await updatePlayer(id, { name: editingName.trim() });
    setEditingId(null);
    setEditingName('');
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Видалити цього гравця?')) {
      await deletePlayer(id);
    }
  };

  return (
    <Container>
      <MobileStack style={{ marginBottom: '24px' }}>
        <Title style={{ margin: 0, flex: 1 }}>Гравці</Title>
        <Button onClick={() => setShowAdd(!showAdd)}>
          {showAdd ? 'Скасувати' : '+ Додати'}
        </Button>
      </MobileStack>

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
              onKeyPress={e => e.key === 'Enter' && handleAdd()}
            />
          </FormGroup>
          <Button onClick={handleAdd}>Додати</Button>
        </Card>
      )}

      <Card>
        <Subtitle>Список гравців ({players.length})</Subtitle>
        {players.length === 0 ? (
          <EmptyState>Ще немає гравців</EmptyState>
        ) : (
          <TableWrapper>
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
                          onKeyPress={e => e.key === 'Enter' && handleSaveEdit(player.id)}
                          autoFocus
                        />
                      ) : (
                        player.name
                      )}
                    </Td>
                    <Td>
                      <ButtonGroup>
                        {editingId === player.id ? (
                          <>
                            <Button onClick={() => handleSaveEdit(player.id)}>
                              Зберегти
                            </Button>
                            <Button
                              $variant="secondary"
                              onClick={() => setEditingId(null)}
                            >
                              ✕
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button onClick={() => handleEdit(player.id, player.name)}>
                              ✎
                            </Button>
                            <Button
                              $variant="danger"
                              onClick={() => handleDelete(player.id)}
                            >
                              ✕
                            </Button>
                          </>
                        )}
                      </ButtonGroup>
                    </Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        )}
      </Card>
    </Container>
  );
};
