import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.md} 0;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 600px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: ${({ theme }) => theme.shadows.md};
    padding: ${({ $isOpen }) => ($isOpen ? '8px 0' : '0')};
    max-height: ${({ $isOpen }) => ($isOpen ? '300px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
  }
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
  font-size: 14px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 600px) {
    border-bottom: none;
    border-left: 3px solid ${({ theme, $active }) =>
      $active ? theme.colors.primary : 'transparent'};
    padding: 12px 16px;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: 600px) {
    display: block;
  }
`;

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/" onClick={closeMenu}>⚽ Futsal League</Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </MenuButton>
        <NavLinks $isOpen={isOpen}>
          <NavLink to="/" $active={location.pathname === '/'} onClick={closeMenu}>
            Ігрові дні
          </NavLink>
          <NavLink to="/players" $active={location.pathname === '/players'} onClick={closeMenu}>
            Гравці
          </NavLink>
          <NavLink to="/teams" $active={location.pathname === '/teams'} onClick={closeMenu}>
            Команди
          </NavLink>
          <NavLink to="/stats" $active={location.pathname === '/stats'} onClick={closeMenu}>
            Статистика
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};
