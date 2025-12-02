import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import {
  Container,
  Title,
  Subtitle,
  Card,
  Button,
  Table,
  Th,
  Td,
  Tr,
  Badge,
  Select,
  Label,
  FormGroup,
  EmptyState,
  TableWrapper,
  ButtonGroup,
  MobileStack,
} from '@/components/UI';
import styled from 'styled-components';
import { Goal, Match } from '@/types';

const TeamBadge = styled.div<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  background: ${({ $color }) => $color};
  color: white;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`;

const ScoreDisplay = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  min-width: 60px;

  @media (max-width: 480px) {
    font-size: 20px;
    min-width: 50px;
  }
`;

const MatchCard = styled(Card)`
  background: ${({ theme }) => theme.colors.background};
`;

const MatchContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const MatchTeams = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex: 1;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const GoalsList = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const GoalInputRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px;
  background: white;
  border-radius: 4px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`;

const GoalCount = styled.input`
  width: 60px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  -webkit-appearance: none;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ScoreInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 18px;
  text-align: center;
  -webkit-appearance: none;
`;

const ValidationError = styled.div`
  color: #f44336;
  font-size: 12px;
  margin-top: 4px;
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
`;

const ModalContent = styled(Card)`
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`;

const GoalRowActions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`;

interface PlayerGoalInput {
  playerId: string;
  teamId: string;
  goals: string;
}

export const GameDayView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    getGameDay,
    teams,
    players,
    addMatch,
    updateMatch,
    deleteMatch,
    getTeamDayStats,
    transferPlayer,
  } = useApp();

  const [showAddMatch, setShowAddMatch] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [editingMatchId, setEditingMatchId] = useState<string | null>(null);

  const [team1Id, setTeam1Id] = useState('');
  const [team2Id, setTeam2Id] = useState('');
  const [score1Input, setScore1Input] = useState('0');
  const [score2Input, setScore2Input] = useState('0');
  const [playerGoals, setPlayerGoals] = useState<PlayerGoalInput[]>([]);

  const [transferPlayerId, setTransferPlayerId] = useState('');
  const [transferFromTeamId, setTransferFromTeamId] = useState('');
  const [transferToTeamId, setTransferToTeamId] = useState('');

  const gameDay = getGameDay(id || '');

  useEffect(() => {
    if (teams.length >= 2 && !team1Id && !team2Id) {
      setTeam1Id(teams[0].id);
      setTeam2Id(teams[1].id);
    }
  }, [teams, team1Id, team2Id]);

  useEffect(() => {
    if (team1Id && team1Id === team2Id) {
      const differentTeam = teams.find(t => t.id !== team1Id);
      if (differentTeam) {
        setTeam2Id(differentTeam.id);
      }
    }
  }, [team1Id, team2Id, teams]);

  useEffect(() => {
    if (transferPlayerId && gameDay) {
      const assignment = gameDay.playerTeamAssignments.find(
        pa => pa.playerId === transferPlayerId
      );
      if (assignment) {
        setTransferFromTeamId(assignment.teamId);
        if (transferToTeamId === assignment.teamId) {
          setTransferToTeamId('');
        }
      }
    }
  }, [transferPlayerId, gameDay, transferToTeamId]);

  if (!gameDay) {
    return (
      <Container>
        <Title>Ігровий день не знайдено</Title>
        <Button onClick={() => navigate('/')}>Назад до списку</Button>
      </Container>
    );
  }

  const stats = getTeamDayStats(gameDay.id);

  const getTeamName = (teamId: string) =>
    teams.find(t => t.id === teamId)?.name || '?';

  const getTeamColor = (teamId: string) =>
    teams.find(t => t.id === teamId)?.color || '#999';

  const getPlayerName = (playerId: string) =>
    players.find(p => p.id === playerId)?.name || '?';

  const getPlayersForTeam = (teamId: string) => {
    return gameDay.playerTeamAssignments
      .filter(pa => pa.teamId === teamId)
      .map(pa => players.find(p => p.id === pa.playerId))
      .filter(Boolean);
  };

  const getAvailableTeamsForTeam2 = () => {
    return teams.filter(t => t.id !== team1Id);
  };

  const getAvailableTeamsForTransfer = () => {
    return teams.filter(t => t.id !== transferFromTeamId);
  };

  const parseScore = (value: string): number => {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : Math.max(0, parsed);
  };

  const parseGoals = (value: string): number => {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : Math.max(0, parsed);
  };

  const getTotalPlayerGoalsForTeam = (teamId: string): number => {
    return playerGoals
      .filter(pg => pg.teamId === teamId)
      .reduce((sum, pg) => sum + parseGoals(pg.goals), 0);
  };

  const score1 = parseScore(score1Input);
  const score2 = parseScore(score2Input);
  const team1PlayerGoals = getTotalPlayerGoalsForTeam(team1Id);
  const team2PlayerGoals = getTotalPlayerGoalsForTeam(team2Id);
  
  const team1GoalsExceeded = team1PlayerGoals > score1;
  const team2GoalsExceeded = team2PlayerGoals > score2;
  const hasValidationErrors = team1GoalsExceeded || team2GoalsExceeded;

  const handleAddPlayerGoal = (teamId: string) => {
    const teamPlayers = getPlayersForTeam(teamId);
    if (teamPlayers.length > 0) {
      setPlayerGoals([
        ...playerGoals,
        {
          playerId: teamPlayers[0]!.id,
          teamId,
          goals: '1',
        },
      ]);
    }
  };

  const handleRemovePlayerGoal = (index: number) => {
    setPlayerGoals(playerGoals.filter((_, i) => i !== index));
  };

  const handlePlayerGoalChange = (
    index: number,
    field: 'playerId' | 'goals',
    value: string
  ) => {
    const updated = [...playerGoals];
    if (field === 'playerId') {
      updated[index].playerId = value;
    } else {
      if (value === '' || /^\d+$/.test(value)) {
        updated[index].goals = value;
      }
    }
    setPlayerGoals(updated);
  };

  const resetForm = () => {
    setScore1Input('0');
    setScore2Input('0');
    setPlayerGoals([]);
    setShowAddMatch(false);
    setEditingMatchId(null);
    if (teams.length >= 2) {
      setTeam1Id(teams[0].id);
      setTeam2Id(teams[1].id);
    }
  };

  const handleSaveMatch = async () => {
    if (team1Id === team2Id) {
      alert('Виберіть різні команди');
      return;
    }

    if (hasValidationErrors) {
      alert('Кількість голів гравців перевищує загальний рахунок команди');
      return;
    }

    const goals: Omit<Goal, 'id'>[] = [];
    playerGoals.forEach(pg => {
      const goalCount = parseGoals(pg.goals);
      for (let i = 0; i < goalCount; i++) {
        goals.push({
          playerId: pg.playerId,
          teamId: pg.teamId,
        });
      }
    });

    if (editingMatchId) {
      await updateMatch(gameDay.id, editingMatchId, {
        team1Id,
        team2Id,
        score1,
        score2,
        goals: goals.map(g => ({ ...g, id: Date.now().toString() + Math.random() })),
      });
    } else {
      await addMatch(gameDay.id, {
        team1Id,
        team2Id,
        score1,
        score2,
        goals: goals.map(g => ({ ...g, id: Date.now().toString() + Math.random() })),
        timestamp: Date.now(),
      });
    }

    resetForm();
  };

  const handleEditMatch = (match: Match) => {
    setEditingMatchId(match.id);
    setTeam1Id(match.team1Id);
    setTeam2Id(match.team2Id);
    setScore1Input(match.score1.toString());
    setScore2Input(match.score2.toString());

    const goalsMap = new Map<string, { playerId: string; teamId: string; count: number }>();
    match.goals.forEach(goal => {
      const key = `${goal.playerId}-${goal.teamId}`;
      if (goalsMap.has(key)) {
        goalsMap.get(key)!.count++;
      } else {
        goalsMap.set(key, {
          playerId: goal.playerId,
          teamId: goal.teamId,
          count: 1,
        });
      }
    });
    setPlayerGoals(
      Array.from(goalsMap.values()).map(g => ({
        playerId: g.playerId,
        teamId: g.teamId,
        goals: g.count.toString(),
      }))
    );
    setShowAddMatch(true);
  };

  const handleCancelEdit = () => {
    resetForm();
  };

  const handleTransfer = async () => {
    if (!transferPlayerId || !transferFromTeamId || !transferToTeamId) {
      alert('Заповніть всі поля');
      return;
    }

    if (transferFromTeamId === transferToTeamId) {
      alert('Виберіть різні команди');
      return;
    }

    await transferPlayer(gameDay.id, transferPlayerId, transferFromTeamId, transferToTeamId);
    setShowTransfer(false);
    setTransferPlayerId('');
    setTransferFromTeamId('');
    setTransferToTeamId('');
  };

  const groupGoalsByPlayer = (goals: Goal[]) => {
    const grouped: { [key: string]: { playerId: string; teamId: string; count: number } } = {};
    goals.forEach(goal => {
      const key = `${goal.playerId}-${goal.teamId}`;
      if (!grouped[key]) {
        grouped[key] = { playerId: goal.playerId, teamId: goal.teamId, count: 0 };
      }
      grouped[key].count++;
    });
    return Object.values(grouped);
  };

  return (
    <Container>
      <PageHeader>
        <div>
          <Title style={{ marginBottom: '4px' }}>{gameDay.name}</Title>
          <p style={{ color: '#666', margin: 0 }}>
            {new Date(gameDay.date).toLocaleDateString('uk-UA')}
          </p>
        </div>
        <HeaderActions>
          <Button onClick={() => setShowTransfer(true)}>Трансфер</Button>
          <Button $variant="secondary" onClick={() => navigate('/')}>Назад</Button>
        </HeaderActions>
      </PageHeader>

      {/* Standings Table */}
      <Card>
        <Subtitle>Турнірна таблиця</Subtitle>
        {stats.length === 0 ? (
          <EmptyState>Немає даних</EmptyState>
        ) : (
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <Th>#</Th>
                  <Th>Команда</Th>
                  <Th>І</Th>
                  <Th>В</Th>
                  <Th>Н</Th>
                  <Th>П</Th>
                  <Th>ЗГ</Th>
                  <Th>ПГ</Th>
                  <Th>РГ</Th>
                  <Th>О</Th>
                </tr>
              </thead>
              <tbody>
                {stats.map((team, index) => (
                  <Tr key={team.teamId}>
                    <Td>{index + 1}</Td>
                    <Td>
                      <TeamBadge $color={team.teamColor}>{team.teamName}</TeamBadge>
                    </Td>
                    <Td>{team.matchesPlayed}</Td>
                    <Td>{team.wins}</Td>
                    <Td>{team.draws}</Td>
                    <Td>{team.losses}</Td>
                    <Td>{team.goalsFor}</Td>
                    <Td>{team.goalsAgainst}</Td>
                    <Td>{team.goalDifference}</Td>
                    <Td>
                      <strong>{team.points}</strong>
                    </Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        )}
      </Card>

      {/* Add/Edit Match Section */}
      <Card>
        <MobileStack style={{ marginBottom: '16px' }}>
          <Subtitle style={{ margin: 0, flex: 1 }}>Матчі</Subtitle>
          {!showAddMatch && (
            <Button onClick={() => setShowAddMatch(true)}>+ Додати матч</Button>
          )}
        </MobileStack>

        {showAddMatch && (
          <Card style={{ background: '#f5f5f5' }}>
            <Subtitle style={{ fontSize: '16px', marginBottom: '16px' }}>
              {editingMatchId ? 'Редагування матчу' : 'Новий матч'}
            </Subtitle>

            <MobileStack style={{ marginBottom: '16px' }}>
              <FormGroup style={{ flex: 1, margin: 0 }}>
                <Label>Команда 1</Label>
                <Select value={team1Id} onChange={e => setTeam1Id(e.target.value)}>
                  {teams.map(team => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>

              <FormGroup style={{ flex: 1, margin: 0 }}>
                <Label>Команда 2</Label>
                <Select value={team2Id} onChange={e => setTeam2Id(e.target.value)}>
                  {getAvailableTeamsForTeam2().map(team => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>
            </MobileStack>

            <MobileStack style={{ marginBottom: '16px' }}>
              <FormGroup style={{ flex: 1, margin: 0 }}>
                <Label>Рахунок {getTeamName(team1Id)}</Label>
                <ScoreInput
                  type="text"
                  inputMode="numeric"
                  value={score1Input}
                  onChange={e => {
                    const value = e.target.value;
                    if (value === '' || /^\d+$/.test(value)) {
                      setScore1Input(value);
                    }
                  }}
                  onBlur={() => {
                    if (score1Input === '') {
                      setScore1Input('0');
                    }
                  }}
                />
                {team1GoalsExceeded && (
                  <ValidationError>
                    Голів ({team1PlayerGoals}) &gt; рахунок ({score1})
                  </ValidationError>
                )}
              </FormGroup>

              <FormGroup style={{ flex: 1, margin: 0 }}>
                <Label>Рахунок {getTeamName(team2Id)}</Label>
                <ScoreInput
                  type="text"
                  inputMode="numeric"
                  value={score2Input}
                  onChange={e => {
                    const value = e.target.value;
                    if (value === '' || /^\d+$/.test(value)) {
                      setScore2Input(value);
                    }
                  }}
                  onBlur={() => {
                    if (score2Input === '') {
                      setScore2Input('0');
                    }
                  }}
                />
                {team2GoalsExceeded && (
                  <ValidationError>
                    Голів ({team2PlayerGoals}) &gt; рахунок ({score2})
                  </ValidationError>
                )}
              </FormGroup>
            </MobileStack>

            <FormGroup>
              <Label>Голи гравців (необов'язково)</Label>
              <ButtonGroup>
                <Button type="button" onClick={() => handleAddPlayerGoal(team1Id)}>
                  + {getTeamName(team1Id)}
                </Button>
                <Button type="button" onClick={() => handleAddPlayerGoal(team2Id)}>
                  + {getTeamName(team2Id)}
                </Button>
              </ButtonGroup>
            </FormGroup>

            {playerGoals.map((pg, index) => (
              <GoalInputRow key={index}>
                <Select
                  value={pg.playerId}
                  onChange={e => handlePlayerGoalChange(index, 'playerId', e.target.value)}
                  style={{ flex: 1 }}
                >
                  {getPlayersForTeam(pg.teamId).map(player => (
                    <option key={player!.id} value={player!.id}>
                      {player!.name}
                    </option>
                  ))}
                </Select>
                <GoalRowActions>
                  <Badge $color={getTeamColor(pg.teamId)}>{getTeamName(pg.teamId)}</Badge>
                  <GoalCount
                    type="text"
                    inputMode="numeric"
                    value={pg.goals}
                    onChange={e => handlePlayerGoalChange(index, 'goals', e.target.value)}
                    onBlur={() => {
                      if (pg.goals === '') {
                        handlePlayerGoalChange(index, 'goals', '0');
                      }
                    }}
                    style={{ width: '50px' }}
                  />
                  <Button $variant="danger" onClick={() => handleRemovePlayerGoal(index)}>
                    ✕
                  </Button>
                </GoalRowActions>
              </GoalInputRow>
            ))}

            <ButtonGroup style={{ marginTop: '16px' }}>
              <Button onClick={handleSaveMatch} disabled={hasValidationErrors}>
                {editingMatchId ? 'Зберегти' : 'Додати'}
              </Button>
              <Button $variant="secondary" onClick={handleCancelEdit}>
                Скасувати
              </Button>
            </ButtonGroup>
          </Card>
        )}

        {/* Matches List */}
        {gameDay.matches.length === 0 ? (
          <EmptyState>Ще немає матчів</EmptyState>
        ) : (
          gameDay.matches.map(match => (
            <MatchCard key={match.id}>
              <MatchContent>
                <MatchTeams>
                  <TeamBadge $color={getTeamColor(match.team1Id)}>
                    {getTeamName(match.team1Id)}
                  </TeamBadge>
                  <ScoreDisplay>
                    {match.score1} : {match.score2}
                  </ScoreDisplay>
                  <TeamBadge $color={getTeamColor(match.team2Id)}>
                    {getTeamName(match.team2Id)}
                  </TeamBadge>
                </MatchTeams>
                <ButtonGroup>
                  <Button
                    onClick={() => handleEditMatch(match)}
                    disabled={editingMatchId === match.id}
                  >
                    Редагувати
                  </Button>
                  <Button
                    $variant="danger"
                    onClick={async () => {
                      if (window.confirm('Видалити цей матч?')) {
                        await deleteMatch(gameDay.id, match.id);
                      }
                    }}
                  >
                    Видалити
                  </Button>
                </ButtonGroup>
              </MatchContent>

              {match.goals.length > 0 && (
                <GoalsList>
                  <strong>Голи:</strong>{' '}
                  {groupGoalsByPlayer(match.goals).map((goalInfo, idx, arr) => (
                    <span key={idx}>
                      {getPlayerName(goalInfo.playerId)}
                      {goalInfo.count > 1 && ` ×${goalInfo.count}`}
                      {idx < arr.length - 1 && ', '}
                    </span>
                  ))}
                </GoalsList>
              )}
            </MatchCard>
          ))
        )}
      </Card>

      {/* Transfer Modal */}
      {showTransfer && (
        <Modal onClick={() => setShowTransfer(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <Subtitle>Трансфер гравця</Subtitle>

            <FormGroup>
              <Label>Гравець</Label>
              <Select
                value={transferPlayerId}
                onChange={e => setTransferPlayerId(e.target.value)}
              >
                <option value="">Виберіть гравця</option>
                {gameDay.playerTeamAssignments.map(pa => {
                  const player = players.find(p => p.id === pa.playerId);
                  const team = teams.find(t => t.id === pa.teamId);
                  return (
                    <option key={pa.playerId} value={pa.playerId}>
                      {player?.name} ({team?.name})
                    </option>
                  );
                })}
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>З команди</Label>
              <Select
                value={transferFromTeamId}
                disabled={true}
                style={{ background: '#f0f0f0' }}
              >
                <option value="">
                  {transferFromTeamId
                    ? getTeamName(transferFromTeamId)
                    : 'Автоматично'}
                </option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>До команди</Label>
              <Select
                value={transferToTeamId}
                onChange={e => setTransferToTeamId(e.target.value)}
                disabled={!transferFromTeamId}
              >
                <option value="">Виберіть команду</option>
                {getAvailableTeamsForTransfer().map(team => (
                  <option key={team.id} value={team.id}>
                    {team.name}
                  </option>
                ))}
              </Select>
            </FormGroup>

            <ButtonGroup>
              <Button onClick={handleTransfer} disabled={!transferToTeamId}>
                Трансфер
              </Button>
              <Button $variant="secondary" onClick={() => setShowTransfer(false)}>
                Скасувати
              </Button>
            </ButtonGroup>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};
