import React from 'react';
import { useApp } from '@/context/AppContext';
import {
  Container,
  Title,
  Card,
  Table,
  Th,
  Td,
  Tr,
  EmptyState,
  Badge,
} from '@/components/UI';

export const PlayerStatsPage: React.FC = () => {
  const { getPlayerStats, teams } = useApp();
  const playerStats = getPlayerStats();

  const getTeamName = (teamId: string) =>
    teams.find(t => t.id === teamId)?.name || 'Невідома команда';

  const getTeamColor = (teamId: string) =>
    teams.find(t => t.id === teamId)?.color || '#999';

  // Filter out players with no activity
  const activePlayerStats = playerStats.filter(
    stat => stat.totalMatches > 0 || stat.totalGoals > 0
  );

  return (
    <Container>
      <Title>Статистика гравців</Title>

      <Card>
        {activePlayerStats.length === 0 ? (
          <EmptyState>Ще немає статистики. Додайте матчі, щоб побачити статистику гравців.</EmptyState>
        ) : (
          <Table>
            <thead>
              <tr>
                <Th>#</Th>
                <Th>Гравець</Th>
                <Th>Голів</Th>
                <Th>Ігор</Th>
                <Th>Ігрових днів</Th>
                <Th>Голи по командах</Th>
              </tr>
            </thead>
            <tbody>
              {activePlayerStats.map((stat, index) => (
                <Tr key={stat.playerId}>
                  <Td>{index + 1}</Td>
                  <Td>
                    <strong>{stat.playerName}</strong>
                  </Td>
                  <Td>
                    <strong style={{ fontSize: '18px', color: '#4caf50' }}>
                      {stat.totalGoals}
                    </strong>
                  </Td>
                  <Td>
                    <strong style={{ fontSize: '16px', color: '#1976d2' }}>
                      {stat.totalMatches}
                    </strong>
                  </Td>
                  <Td>{stat.gameDaysPlayed}</Td>
                  <Td>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {Object.entries(stat.goalsByTeam).length > 0 ? (
                        Object.entries(stat.goalsByTeam).map(([teamId, goals]) => (
                          <Badge key={teamId} $color={getTeamColor(teamId)}>
                            {getTeamName(teamId)}: {goals}
                          </Badge>
                        ))
                      ) : (
                        <span style={{ color: '#999' }}>—</span>
                      )}
                    </div>
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
