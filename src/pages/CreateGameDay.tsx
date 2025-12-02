import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import {
  Container,
  Title,
  Card,
  Button,
  Input,
  Label,
  FormGroup,
  Select,
  MobileStack,
  ButtonGroup,
} from '@/components/UI';
import styled from 'styled-components';

const PlayerAssignment = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-bottom: 8px;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const TeamSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const TeamHeader = styled.div<{ $color: string }>`
  padding: 8px 16px;
  background: ${({ $color }) => $color};
  color: white;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-bottom: 8px;
  font-size: 14px;
`;

const NoPlayers = styled.p`
  color: #999;
  font-size: 14px;
  margin-left: 8px;
  margin-bottom: 8px;
`;

export const CreateGameDay: React.FC = () => {
  const { players, teams, addGameDay } = useApp();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [playerAssignments, setPlayerAssignments] = useState<
    { playerId: string; teamId: string }[]
  >([]);

  const handleAddPlayer = () => {
    if (players.length > 0 && teams.length > 0) {
      setPlayerAssignments([
        ...playerAssignments,
        { playerId: players[0].id, teamId: teams[0].id },
      ]);
    }
  };

  const handleRemovePlayer = (index: number) => {
    setPlayerAssignments(playerAssignments.filter((_, i) => i !== index));
  };

  const handlePlayerChange = (index: number, playerId: string) => {
    const updated = [...playerAssignments];
    updated[index].playerId = playerId;
    setPlayerAssignments(updated);
  };

  const handleTeamChange = (index: number, teamId: string) => {
    const updated = [...playerAssignments];
    updated[index].teamId = teamId;
    setPlayerAssignments(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('Будь ласка, введіть назву ігрового дня');
      return;
    }

    const gameDay = await addGameDay({
      name: name.trim(),
      date,
      playerTeamAssignments: playerAssignments.map(pa => ({
        playerId: pa.playerId,
        teamId: pa.teamId,
      })),
      matches: [],
      isActive: false,
    });

    navigate(`/game-day/${gameDay.id}`);
  };

  const playersByTeam = teams.map(team => ({
    team,
    players: playerAssignments
      .map((pa, index) => ({ ...pa, index }))
      .filter(pa => pa.teamId === team.id),
  }));

  return (
    <Container>
      <Title>Створити ігровий день</Title>

      <Card>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Назва</Label>
            <Input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Наприклад: Гра 15 грудня"
            />
          </FormGroup>

          <FormGroup>
            <Label>Дата</Label>
            <Input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <MobileStack>
              <Label style={{ margin: 0, flex: 1 }}>Гравці та команди</Label>
              <Button type="button" onClick={handleAddPlayer}>
                + Гравець
              </Button>
            </MobileStack>
          </FormGroup>

          {players.length === 0 && (
            <NoPlayers>
              Спочатку додайте гравців у розділі "Гравці"
            </NoPlayers>
          )}

          {playersByTeam.map(({ team, players: teamPlayers }) => (
            <TeamSection key={team.id}>
              <TeamHeader $color={team.color}>
                {team.name} ({teamPlayers.length})
              </TeamHeader>
              {teamPlayers.length === 0 ? (
                <NoPlayers>Немає гравців</NoPlayers>
              ) : (
                teamPlayers.map(pa => (
                  <PlayerAssignment key={pa.index}>
                    <Select
                      value={pa.playerId}
                      onChange={e => handlePlayerChange(pa.index, e.target.value)}
                      style={{ flex: 2 }}
                    >
                      {players.map(player => (
                        <option key={player.id} value={player.id}>
                          {player.name}
                        </option>
                      ))}
                    </Select>
                    <Select
                      value={pa.teamId}
                      onChange={e => handleTeamChange(pa.index, e.target.value)}
                      style={{ flex: 1 }}
                    >
                      {teams.map(team => (
                        <option key={team.id} value={team.id}>
                          {team.name}
                        </option>
                      ))}
                    </Select>
                    <Button
                      type="button"
                      $variant="danger"
                      onClick={() => handleRemovePlayer(pa.index)}
                    >
                      ✕
                    </Button>
                  </PlayerAssignment>
                ))
              )}
            </TeamSection>
          ))}

          <ButtonGroup style={{ marginTop: '24px' }}>
            <Button type="submit">Створити</Button>
            <Button
              type="button"
              $variant="secondary"
              onClick={() => navigate('/')}
            >
              Скасувати
            </Button>
          </ButtonGroup>
        </form>
      </Card>
    </Container>
  );
};
