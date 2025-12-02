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
  Badge,
  MobileStack,
  ButtonGroup,
  TableWrapper,
} from '@/components/UI';
import styled from 'styled-components';

const ColorInput = styled.input`
  width: 50px;
  height: 40px;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
`;

export const TeamsPage: React.FC = () => {
  const { teams, addTeam, updateTeam, deleteTeam } = useApp();
  const [showAdd, setShowAdd] = useState(false);
  const [newTeamName, setNewTeamName] = useState('');
  const [newTeamColor, setNewTeamColor] = useState('#2196F3');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [editingColor, setEditingColor] = useState('');

  const handleAdd = async () => {
    if (!newTeamName.trim()) {
      alert('Введіть назву команди');
      return;
    }

    await addTeam({ name: newTeamName.trim(), color: newTeamColor });
    setNewTeamName('');
    setNewTeamColor('#2196F3');
    setShowAdd(false);
  };

  const handleEdit = (id: string, name: string, color: string) => {
    setEditingId(id);
    setEditingName(name);
    setEditingColor(color);
  };

  const handleSaveEdit = async (id: string) => {
    if (!editingName.trim()) {
      alert('Введіть назву команди');
      return;
    }

    await updateTeam(id, { name: editingName.trim(), color: editingColor });
    setEditingId(null);
    setEditingName('');
    setEditingColor('');
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Видалити цю команду?')) {
      await deleteTeam(id);
    }
  };

  return (
    <Container>
      <MobileStack style={{ marginBottom: '24px' }}>
        <Title style={{ margin: 0, flex: 1 }}>Команди</Title>
        <Button onClick={() => setShowAdd(!showAdd)}>
          {showAdd ? 'Скасувати' : '+ Додати'}
        </Button>
      </MobileStack>

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
            <ColorInput
              type="color"
              value={newTeamColor}
              onChange={e => setNewTeamColor(e.target.value)}
            />
          </FormGroup>
          <Button onClick={handleAdd}>Додати</Button>
        </Card>
      )}

      <Card>
        <Subtitle>Список команд ({teams.length})</Subtitle>
        {teams.length === 0 ? (
          <EmptyState>Ще немає команд</EmptyState>
        ) : (
          <TableWrapper>
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
                        <ColorInput
                          type="color"
                          value={editingColor}
                          onChange={e => setEditingColor(e.target.value)}
                        />
                      ) : (
                        <Badge $color={team.color}>{team.name}</Badge>
                      )}
                    </Td>
                    <Td>
                      <ButtonGroup>
                        {editingId === team.id ? (
                          <>
                            <Button onClick={() => handleSaveEdit(team.id)}>
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
                            <Button
                              onClick={() => handleEdit(team.id, team.name, team.color)}
                            >
                              ✎
                            </Button>
                            <Button
                              $variant="danger"
                              onClick={() => handleDelete(team.id)}
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
