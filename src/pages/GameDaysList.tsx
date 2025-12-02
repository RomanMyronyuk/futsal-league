import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import {
  Container,
  Title,
  Card,
  Button,
  Flex,
  EmptyState,
  Badge,
} from '@/components/UI';
import styled from 'styled-components';

const GameDayCard = styled(Card)`
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const GameDayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const GameDayTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

const GameDayDate = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const GameDayStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const GameDaysList: React.FC = () => {
  const { gameDays, deleteGameDay, setActiveGameDay } = useApp();
  const navigate = useNavigate();

  const sortedGameDays = [...gameDays].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const handleGameDayClick = (id: string) => {
    navigate(`/game-day/${id}`);
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (window.confirm('Ви впевнені, що хочете видалити цей ігровий день?')) {
      deleteGameDay(id);
    }
  };

  const handleSetActive = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setActiveGameDay(id);
  };

  return (
    <Container>
      <Flex $justify="space-between" $align="center">
        <Title>Ігрові дні</Title>
        <Button onClick={() => navigate('/game-day/new')}>
          + Створити ігровий день
        </Button>
      </Flex>

      {sortedGameDays.length === 0 ? (
        <EmptyState>
          <p>Ще немає ігрових днів</p>
          <p>Створіть перший ігровий день, щоб почати!</p>
        </EmptyState>
      ) : (
        sortedGameDays.map(gameDay => (
          <GameDayCard key={gameDay.id} onClick={() => handleGameDayClick(gameDay.id)}>
            <GameDayHeader>
              <GameDayTitle>{gameDay.name}</GameDayTitle>
              {gameDay.isActive && <Badge $color="#4caf50">Активний</Badge>}
            </GameDayHeader>
            <GameDayDate>{new Date(gameDay.date).toLocaleDateString('uk-UA')}</GameDayDate>
            <GameDayStats>
              <span>Матчів: {gameDay.matches.length}</span>
              <span>Гравців: {gameDay.playerTeamAssignments.length}</span>
            </GameDayStats>
            <Flex $gap="8px" style={{ marginTop: '16px' }}>
              {!gameDay.isActive && (
                <Button onClick={e => handleSetActive(e, gameDay.id)}>
                  Зробити активним
                </Button>
              )}
              <Button
                $variant="secondary"
                onClick={e => {
                  e.stopPropagation();
                  navigate(`/game-day/${gameDay.id}/edit`);
                }}
              >
                Редагувати
              </Button>
              <Button $variant="danger" onClick={e => handleDelete(e, gameDay.id)}>
                Видалити
              </Button>
            </Flex>
          </GameDayCard>
        ))
      )}
    </Container>
  );
};

