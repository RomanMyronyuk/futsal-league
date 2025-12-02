import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import {
  Container,
  Title,
  Card,
  Button,
  EmptyState,
  ButtonGroup,
} from '@/components/UI';
import styled from 'styled-components';

const GameDayCard = styled(Card)`
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  @media (max-width: 480px) {
    &:hover {
      transform: none;
    }
  }
`;

const GameDayHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const GameDayTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 16px;
  }
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
  flex-wrap: wrap;

  @media (max-width: 480px) {
    font-size: 13px;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const GameDaysList: React.FC = () => {
  const { gameDays, deleteGameDay } = useApp();
  const navigate = useNavigate();

  const sortedGameDays = [...gameDays].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const handleGameDayClick = (id: string) => {
    navigate(`/game-day/${id}`);
  };

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (window.confirm('Ви впевнені, що хочете видалити цей ігровий день?')) {
      await deleteGameDay(id);
    }
  };

  return (
    <Container>
      <PageHeader>
        <Title style={{ margin: 0 }}>Ігрові дні</Title>
        <Button onClick={() => navigate('/game-day/new')}>
          + Створити
        </Button>
      </PageHeader>

      {sortedGameDays.length === 0 ? (
        <Card>
          <EmptyState>
            <p>Ще немає ігрових днів</p>
            <p>Створіть перший ігровий день, щоб почати!</p>
          </EmptyState>
        </Card>
      ) : (
        sortedGameDays.map(gameDay => (
          <GameDayCard key={gameDay.id} onClick={() => handleGameDayClick(gameDay.id)}>
            <GameDayHeader>
              <GameDayTitle>{gameDay.name}</GameDayTitle>
            </GameDayHeader>
            <GameDayDate>{new Date(gameDay.date).toLocaleDateString('uk-UA')}</GameDayDate>
            <GameDayStats>
              <span>Матчів: {gameDay.matches.length}</span>
              <span>Гравців: {gameDay.playerTeamAssignments.length}</span>
            </GameDayStats>
            <ButtonGroup style={{ marginTop: '16px' }}>
              <Button $variant="danger" onClick={e => handleDelete(e, gameDay.id)}>
                Видалити
              </Button>
            </ButtonGroup>
          </GameDayCard>
        ))
      )}
    </Container>
  );
};
