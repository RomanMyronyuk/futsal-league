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
  Badge,
} from '@/components/UI';

export const TeamsPage: React.FC = () => {
  const { teams, addTeam, updateTeam, deleteTeam } = useApp();
  const [showAdd, setShowAdd] = useState(false);
  const [newTeamName, setNewTeamName] = useState('');
  const [newTeamColor, setNewTeamColor] = useState('#2196F3');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [editingColor, setEditingColor] = useState('');

  const handleAdd = () => {
    if (!newTeamName.trim()) {
      alert('Введіть назву команди');
      return;
    }

    addTeam({ name: newTeamName.trim(), color: newTeamColor });
    setNewTeamName('');
    setNewTeamColor('#2196F3');
    setShowAdd(false);
  };

  const handleEdit = (id: string, name: string, color: string) => {
    setEditingId(id);
    setEditingName(name);
    setEditingColor(color);
  };

  const handleSaveEdit = (id: string) => {
    if (!editingName.trim()) {
      alert('Введіть назву команди');
      return;
    }

    updateTeam(id, { name: editingName.trim(), color: editingColor });
    setEditingId(null);
    setEditingName('');
    setEditingColor('');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Видалити цю команду?')) {
      deleteTeam(id);
    }
  };

  return (
    <Container>
      <Flex $justify="space-between" $align="center">
        <Title>Команди</Title>
        <Button onClick={() => setShowAdd(!showAdd)}>
          {showAdd ? 'Скасувати' : '+ Додати команду'}
        </Button>
      </Flex>

      {showAdd && (
        <Card>
          <Subtitle>Нова команда</Subtitle>
          <FormGroup>
            <Label>Назва</Label>
            <Input
              type="text"
              value={newTeamName}
              onChange={e => setNewTeamName(e.target.value)}
              placeholder="Введіть назву команди"
            />
          </FormGroup>
          <FormGroup>
            <Label>Колір</Label>
            <Input
              type="color"
              value={newTeamColor}
              onChange={e => setNewTeamColor(e.target.value)}
            />
          </FormGroup>
          <Button onClick={handleAdd}>Додати</Button>
        </Card>
      )}

      <Card>
        <Subtitle>Список команд</Subtitle>
        {teams.length === 0 ? (
          <EmptyState>Ще немає команд</EmptyState>
        ) : (
          <Table>
            <thead>
              <tr>
                <Th>#</Th>
                <Th>Назва</Th>
                <Th>Колір</Th>
                <Th>Дії</Th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <Tr key={team.id}>
                  <Td>{index + 1}</Td>
                  <Td>
                    {editingId === team.id ? (
                      <Input
                        type="text"
                        value={editingName}
                        onChange={e => setEditingName(e.target.value)}
                      />
                    ) : (
                      team.name
                    )}
                  </Td>
                  <Td>
                    {editingId === team.id ? (
                      <Input
                        type="color"
                        value={editingColor}
                        onChange={e => setEditingColor(e.target.value)}
                      />
                    ) : (
                      <Badge $color={team.color}>{team.color}</Badge>
                    )}
                  </Td>
                  <Td>
                    <Flex $gap="8px">
                      {editingId === team.id ? (
                        <>
                          <Button onClick={() => handleSaveEdit(team.id)}>
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
                          <Button
                            onClick={() => handleEdit(team.id, team.name, team.color)}
                          >
                            Редагувати
                          </Button>
                          <Button
                            $variant="danger"
                            onClick={() => handleDelete(team.id)}
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

