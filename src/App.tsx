import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AppProvider, useApp } from '@/context/AppContext';
import { GlobalStyles, theme } from '@/styles/theme';
import { Navigation } from '@/components/Navigation';
import { GameDaysList } from '@/pages/GameDaysList';
import { CreateGameDay } from '@/pages/CreateGameDay';
import { GameDayView } from '@/pages/GameDayView';
import { PlayersPage } from '@/pages/PlayersPage';
import { TeamsPage } from '@/pages/TeamsPage';
import { PlayerStatsPage } from '@/pages/PlayerStatsPage';
import styled from 'styled-components';

const LoadingScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ConnectionStatus = styled.div<{ $connected: boolean }>`
  position: fixed;
  bottom: 16px;
  right: 16px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  background: ${({ $connected }) => ($connected ? '#4caf50' : '#ff9800')};
  color: white;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
`;

const StatusDot = styled.span<{ $connected: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $connected }) => ($connected ? '#81c784' : '#ffcc80')};
`;

const AppContent: React.FC = () => {
  const { isLoading, isFirebaseConnected } = useApp();

  if (isLoading) {
    return <LoadingScreen>Завантаження...</LoadingScreen>;
  }

  return (
    <>
      <BrowserRouter basename="/futsal-league">
        <Navigation />
        <Routes>
          <Route path="/" element={<GameDaysList />} />
          <Route path="/game-day/new" element={<CreateGameDay />} />
          <Route path="/game-day/:id" element={<GameDayView />} />
          <Route path="/game-day/:id/edit" element={<CreateGameDay />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/stats" element={<PlayerStatsPage />} />
        </Routes>
      </BrowserRouter>

      <ConnectionStatus $connected={isFirebaseConnected}>
        <StatusDot $connected={isFirebaseConnected} />
        {isFirebaseConnected ? 'Firebase' : 'Локально'}
      </ConnectionStatus>
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
