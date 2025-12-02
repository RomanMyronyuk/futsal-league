import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import {
  Container,
  Title,
  Subtitle,
  Card,
  Button,
  Flex,
  Table,
  Th,
  Td,
  Tr,
  Badge,
  Select,
  Input,
  Label,
  FormGroup,
  EmptyState,
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
`;

const ScoreDisplay = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

const MatchCard = styled(Card)`
  background: ${({ theme }) => theme.colors.background};
`;

const GoalsList = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const GoalInputRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px;
  background: white;
  border-radius: 4px;
`;

const GoalCount = styled.input`
  width: 60px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
`;

const ScoreInput = styled.input`
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  text-align: center;
`;

const ValidationError = styled.div`
  color: #f44336;
  font-size: 12px;
  margin-top: 4px;
`;

interface PlayerGoalInput {
  playerId: string;
  teamId: string;
  goals: string; // Use string to allow empty input
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

  // Add/Edit match form state - use strings for inputs to allow empty values
  const [team1Id, setTeam1Id] = useState('');
  const [team2Id, setTeam2Id] = useState('');
  const [score1Input, setScore1Input] = useState('0');
  const [score2Input, setScore2Input] = useState('0');
  const [playerGoals, setPlayerGoals] = useState<PlayerGoalInput[]>([]);

  // Transfer form state
  const [transferPlayerId, setTransferPlayerId] = useState('');
  const [transferFromTeamId, setTransferFromTeamId] = useState('');
  const [transferToTeamId, setTransferToTeamId] = useState('');

  const gameDay = getGameDay(id || '');

  // Initialize team1Id and team2Id when teams are available
  useEffect(() => {
    if (teams.length >= 2 && !team1Id && !team2Id) {
      setTeam1Id(teams[0].id);
      setTeam2Id(teams[1].id);
    }
  }, [teams, team1Id, team2Id]);

  // Auto-select different team when team1 changes
  useEffect(() => {
    if (team1Id && team1Id === team2Id) {
      const differentTeam = teams.find(t => t.id !== team1Id);
      if (differentTeam) {
        setTeam2Id(differentTeam.id);
      }
    }
  }, [team1Id, team2Id, teams]);

  // Auto-set transfer "from team" when player is selected
  useEffect(() => {
    if (transferPlayerId && gameDay) {
      const assignment = gameDay.playerTeamAssignments.find(
        pa => pa.playerId === transferPlayerId
      );
      if (assignment) {
        setTransferFromTeamId(assignment.teamId);
        // Reset "to team" if it's the same as "from team"
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
    teams.find(t => t.id === teamId)?.name || 'Невідома команда';

  const getTeamColor = (teamId: string) =>
    teams.find(t => t.id === teamId)?.color || '#999';

  const getPlayerName = (playerId: string) =>
    players.find(p => p.id === playerId)?.name || 'Невідомий гравець';

  const getPlayersForTeam = (teamId: string) => {
    return gameDay.playerTeamAssignments
      .filter(pa => pa.teamId === teamId)
      .map(pa => players.find(p => p.id === pa.playerId))
      .filter(Boolean);
  };

  // Get available teams for team2 (exclude team1)
  const getAvailableTeamsForTeam2 = () => {
    return teams.filter(t => t.id !== team1Id);
  };

  // Get available teams for transfer "to" (exclude current team)
  const getAvailableTeamsForTransfer = () => {
    return teams.filter(t => t.id !== transferFromTeamId);
  };

  // Parse score input to number
  const parseScore = (value: string): number => {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : Math.max(0, parsed);
  };

  // Parse goals string to number
  const parseGoals = (value: string): number => {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : Math.max(0, parsed);
  };

  // Calculate total goals by team from playerGoals
  const getTotalPlayerGoalsForTeam = (teamId: string): number => {
    return playerGoals
      .filter(pg => pg.teamId === teamId)
      .reduce((sum, pg) => sum + parseGoals(pg.goals), 0);
  };

  // Validation
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
      // Allow empty string or numbers only
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

  const handleSaveMatch = () => {
    if (team1Id === team2Id) {
      alert('Виберіть різні команди');
      return;
    }

    if (hasValidationErrors) {
      alert('Кількість голів гравців перевищує загальний рахунок команди');
      return;
    }

    // Convert playerGoals to individual Goal objects
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
      // Update existing match
      updateMatch(gameDay.id, editingMatchId, {
        team1Id,
        team2Id,
        score1,
        score2,
        goals: goals.map(g => ({ ...g, id: Date.now().toString() + Math.random() })),
      });
    } else {
      // Add new match
      addMatch(gameDay.id, {
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

    // Convert goals back to playerGoals format
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

  const handleTransfer = () => {
    if (!transferPlayerId || !transferFromTeamId || !transferToTeamId) {
      alert('Заповніть всі поля');
      return;
    }

    if (transferFromTeamId === transferToTeamId) {
      alert('Виберіть різні команди');
      return;
    }

    transferPlayer(gameDay.id, transferPlayerId, transferFromTeamId, transferToTeamId);
    setShowTransfer(false);
    setTransferPlayerId('');
    setTransferFromTeamId('');
    setTransferToTeamId('');
  };

  // Group goals by player for display
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
      <Flex $justify="space-between" $align="center">
        <div>
          <Title>{gameDay.name}</Title>
          <p style={{ color: '#666', marginTop: '-16px' }}>
            {new Date(gameDay.date).toLocaleDateString('uk-UA')}
          </p>
        </div>
        <Flex $gap="8px">
          <Button onClick={() => setShowTransfer(true)}>Трансфер гравця</Button>
          <Button onClick={() => navigate('/')}>Назад</Button>
        </Flex>
      </Flex>

      {/* Standings Table */}
      <Card>
        <Subtitle>Турнірна таблиця</Subtitle>
        {stats.length === 0 ? (
          <EmptyState>Немає даних для відображення</EmptyState>
        ) : (
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
        )}
      </Card>

      {/* Add/Edit Match Section */}
      <Card>
        <Flex $justify="space-between" $align="center">
          <Subtitle>Матчі</Subtitle>
          {!showAddMatch && (
            <Button onClick={() => setShowAddMatch(true)}>+ Додати матч</Button>
          )}
        </Flex>

        {showAddMatch && (
          <Card style={{ background: '#f5f5f5', marginTop: '16px' }}>
            <Subtitle style={{ fontSize: '18px', marginBottom: '16px' }}>
              {editingMatchId ? 'Редагування матчу' : 'Новий матч'}
            </Subtitle>

            <Flex $gap="16px">
              <FormGroup style={{ flex: 1 }}>
                <Label>Команда 1</Label>
                <Select value={team1Id} onChange={e => setTeam1Id(e.target.value)}>
                  {teams.map(team => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>

              <FormGroup style={{ flex: 1 }}>
                <Label>Команда 2</Label>
                <Select value={team2Id} onChange={e => setTeam2Id(e.target.value)}>
                  {getAvailableTeamsForTeam2().map(team => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>
            </Flex>

            <Flex $gap="16px">
              <FormGroup style={{ flex: 1 }}>
                <Label>Рахунок {getTeamName(team1Id)}</Label>
                <ScoreInput
                  type="text"
                  inputMode="numeric"
                  value={score1Input}
                  onChange={e => {
                    const value = e.target.value;
                    // Allow empty string or numbers only
                    if (value === '' || /^\d+$/.test(value)) {
                      setScore1Input(value);
                    }
                  }}
                  onBlur={() => {
                    // Set to 0 if empty on blur
                    if (score1Input === '') {
                      setScore1Input('0');
                    }
                  }}
                />
                {team1GoalsExceeded && (
                  <ValidationError>
                    Голів гравців ({team1PlayerGoals}) більше ніж рахунок ({score1})
                  </ValidationError>
                )}
              </FormGroup>

              <FormGroup style={{ flex: 1 }}>
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
                    Голів гравців ({team2PlayerGoals}) більше ніж рахунок ({score2})
                  </ValidationError>
                )}
              </FormGroup>
            </Flex>

            <FormGroup>
              <Label>Голи гравців (необов'язково)</Label>
              <Flex $gap="8px" $wrap="wrap">
                <Button type="button" onClick={() => handleAddPlayerGoal(team1Id)}>
                  + Гравець {getTeamName(team1Id)}
                </Button>
                <Button type="button" onClick={() => handleAddPlayerGoal(team2Id)}>
                  + Гравець {getTeamName(team2Id)}
                </Button>
              </Flex>
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
                />
                <span style={{ fontSize: '14px', color: '#666' }}>голів</span>
                <Button $variant="danger" onClick={() => handleRemovePlayerGoal(index)}>
                  ✕
                </Button>
              </GoalInputRow>
            ))}

            <Flex $gap="8px" style={{ marginTop: '16px' }}>
              <Button onClick={handleSaveMatch} disabled={hasValidationErrors}>
                {editingMatchId ? 'Зберегти зміни' : 'Зберегти матч'}
              </Button>
              <Button $variant="secondary" onClick={handleCancelEdit}>
                Скасувати
              </Button>
            </Flex>
          </Card>
        )}

        {/* Matches List */}
        {gameDay.matches.length === 0 ? (
          <EmptyState>Ще немає матчів</EmptyState>
        ) : (
          gameDay.matches.map(match => (
            <MatchCard key={match.id}>
              <Flex $justify="space-between" $align="center">
                <Flex $gap="24px" $align="center" style={{ flex: 1 }}>
                  <TeamBadge $color={getTeamColor(match.team1Id)}>
                    {getTeamName(match.team1Id)}
                  </TeamBadge>
                  <ScoreDisplay>
                    {match.score1} : {match.score2}
                  </ScoreDisplay>
                  <TeamBadge $color={getTeamColor(match.team2Id)}>
                    {getTeamName(match.team2Id)}
                  </TeamBadge>
                </Flex>
                <Flex $gap="8px">
                  <Button
                    onClick={() => handleEditMatch(match)}
                    disabled={editingMatchId === match.id}
                  >
                    Редагувати
                  </Button>
                  <Button
                    $variant="danger"
                    onClick={() => {
                      if (window.confirm('Видалити цей матч?')) {
                        deleteMatch(gameDay.id, match.id);
                      }
                    }}
                  >
                    Видалити
                  </Button>
                </Flex>
              </Flex>

              {match.goals.length > 0 && (
                <GoalsList>
                  <strong>Голи:</strong>
                  <ul style={{ marginTop: '4px', paddingLeft: '20px' }}>
                    {groupGoalsByPlayer(match.goals).map((goalInfo, idx) => (
                      <li key={idx}>
                        {getPlayerName(goalInfo.playerId)} ({getTeamName(goalInfo.teamId)})
                        {goalInfo.count > 1 && ` × ${goalInfo.count}`}
                      </li>
                    ))}
                  </ul>
                </GoalsList>
              )}
            </MatchCard>
          ))
        )}
      </Card>

      {/* Transfer Modal */}
      {showTransfer && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setShowTransfer(false)}
        >
          <Card
            style={{ maxWidth: '500px', width: '90%' }}
            onClick={e => e.stopPropagation()}
          >
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
                    : 'Автоматично визначиться'}
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

            <Flex $gap="8px">
              <Button onClick={handleTransfer} disabled={!transferToTeamId}>
                Трансфер
              </Button>
              <Button $variant="secondary" onClick={() => setShowTransfer(false)}>
                Скасувати
              </Button>
            </Flex>
          </Card>
        </div>
      )}
    </Container>
  );
};
