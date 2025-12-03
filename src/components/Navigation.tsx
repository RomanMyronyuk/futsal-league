import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// Main navigation container with glass morphism effect
const Nav = styled.nav`
  background: rgba(28, 38, 50, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all ${({ theme }) => theme.transitions.normal};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

// Logo with football icon and gradient text
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: 20px;
  font-weight: 800;
  font-family: ${({ theme }) => theme.typography.heading};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.md} 0;
  white-space: nowrap;
  letter-spacing: -0.02em;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  /* Gradient text effect */
  background: linear-gradient(135deg, #22c55e 0%, #10b981 50%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

// Football icon animation
const LogoIcon = styled.span`
  font-size: 24px;
  filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.5));
  transition: transform ${({ theme }) => theme.transitions.fast};
  
  ${Logo}:hover & {
    transform: rotate(20deg);
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

// Navigation links container with mobile support
const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};

  @media (max-width: 600px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(28, 38, 50, 0.98);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding: ${({ $isOpen }) => ($isOpen ? `${({ theme }: { theme: typeof import('../styles/theme').theme }) => theme.spacing.sm} 0` : '0')};
    max-height: ${({ $isOpen }) => ($isOpen ? '400px' : '0')};
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    gap: 0;
  }
`;

// Individual navigation link with active state
const NavLink = styled(Link)<{ $active?: boolean }>`
  position: relative;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.heading};
  letter-spacing: 0.01em;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.text.secondary};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primaryLight : 'transparent'};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryLight};
  }
  
  /* Active indicator dot */
  ${({ $active, theme }) => $active && `
    &::before {
      content: '';
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      background: ${theme.colors.primary};
      border-radius: 50%;
    }
  `}

  @media (max-width: 600px) {
    border-radius: 0;
    padding: 14px ${({ theme }) => theme.spacing.lg};
    
    &::before {
      display: none;
    }
    
    /* Mobile active indicator - left bar */
    border-left: 3px solid ${({ theme, $active }) =>
      $active ? theme.colors.primary : 'transparent'};
    background: ${({ theme, $active }) =>
      $active ? theme.colors.primaryLight : 'transparent'};
  }
`;

// Mobile menu button with animated icon
const MenuButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
  }
  
  /* Hamburger icon lines */
  span {
    display: block;
    width: 20px;
    height: 2px;
    background: ${({ theme }) => theme.colors.text.primary};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all ${({ theme }) => theme.transitions.fast};
    border-radius: 1px;
    
    &:nth-child(1) {
      top: ${({ $isOpen }) => ($isOpen ? '19px' : '12px')};
      transform: translateX(-50%) ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }
    
    &:nth-child(2) {
      top: 19px;
      opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
      transform: translateX(-50%);
    }
    
    &:nth-child(3) {
      top: ${({ $isOpen }) => ($isOpen ? '19px' : '26px')};
      transform: translateX(-50%) ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 600px) {
    display: block;
  }
`;

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { path: '/', label: 'Ігрові дні', icon: '📅' },
    { path: '/players', label: 'Гравці', icon: '👥' },
    { path: '/teams', label: 'Команди', icon: '🏆' },
    { path: '/stats', label: 'Статистика', icon: '📊' },
  ];

  return (
    <Nav>
      <NavContainer>
        <Logo to="/" onClick={closeMenu}>
          <LogoIcon>⚽</LogoIcon>
          Futsal League
        </Logo>
        
        <MenuButton 
          onClick={() => setIsOpen(!isOpen)} 
          $isOpen={isOpen}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </MenuButton>
        
        <NavLinks $isOpen={isOpen}>
          {navItems.map(item => (
            <NavLink 
              key={item.path}
              to={item.path} 
              $active={location.pathname === item.path} 
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};
