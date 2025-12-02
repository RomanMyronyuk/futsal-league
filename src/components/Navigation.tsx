import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.md} 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex: 1;
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  text-decoration: none;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.text.secondary};
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  border-bottom: 2px solid ${({ theme, $active }) =>
    $active ? theme.colors.primary : 'transparent'};
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">⚽ Futsal League</Logo>
        <NavLinks>
          <NavLink to="/" $active={location.pathname === '/'}>
            Ігрові дні
          </NavLink>
          <NavLink to="/players" $active={location.pathname === '/players'}>
            Гравці
          </NavLink>
          <NavLink to="/teams" $active={location.pathname === '/teams'}>
            Команди
          </NavLink>
          <NavLink to="/stats" $active={location.pathname === '/stats'}>
            Статистика
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

