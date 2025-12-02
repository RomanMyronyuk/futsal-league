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
  TableWrapper,
} from '@/components/UI';
import styled from 'styled-components';

const GoalsBadges = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

const StatNumber = styled.strong<{ $color?: string }>`
  font-size: 16px;
  color: ${({ $color }) => $color || 'inherit'};

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const PlayerStatsPage: React.FC = () => {
  const { getPlayerStats, teams } = useApp();
  const playerStats = getPlayerStats();

  const getTeamName = (teamId: string) =>
    teams.find(t => t.id === teamId)?.name || '?';

  const getTeamColor = (teamId: string) =>
    teams.find(t => t.id === teamId)?.color || '#999';

  const activePlayerStats = playerStats.filter(
    stat => stat.totalMatches > 0 || stat.totalGoals > 0
  );

  return (
    <Container>
      <Title>Статистика гравців</Title>

      <Card>
        {activePlayerStats.length === 0 ? (
          <EmptyState>
            Ще немає статистики.<br />
            Додайте матчі, щоб побачити статистику гравців.
          </EmptyState>
        ) : (
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <Th>#</Th>
                  <Th>Гравець</Th>
                  <Th>⚽</Th>
                  <Th>Ігор</Th>
                  <Th>Днів</Th>
                  <Th>По командах</Th>
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
                      <StatNumber $color="#4caf50">
                        {stat.totalGoals}
                      </StatNumber>
                    </Td>
                    <Td>
                      <StatNumber $color="#1976d2">
                        {stat.totalMatches}
                      </StatNumber>
                    </Td>
                    <Td>{stat.gameDaysPlayed}</Td>
                    <Td>
                      <GoalsBadges>
                        {Object.entries(stat.goalsByTeam).length > 0 ? (
                          Object.entries(stat.goalsByTeam).map(([teamId, goals]) => (
                            <Badge key={teamId} $color={getTeamColor(teamId)}>
                              {getTeamName(teamId)}: {goals}
                            </Badge>
                          ))
                        ) : (
                          <span style={{ color: '#999' }}>—</span>
                        )}
                      </GoalsBadges>
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
