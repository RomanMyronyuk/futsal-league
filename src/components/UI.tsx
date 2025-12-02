import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md};
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Button = styled.button<{ $variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  background: ${({ theme, $variant }) => {
    if ($variant === 'danger') return theme.colors.error;
    if ($variant === 'secondary') return theme.colors.text.secondary;
    return theme.colors.primary;
  }};
  color: white;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 14px;
  width: 100%;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Select = styled.select`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 14px;
  width: 100%;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

export const Th = styled.th`
  text-align: left;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
  font-weight: 600;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

export const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Tr = styled.tr`
  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const Flex = styled.div<{ $gap?: string; $justify?: string; $align?: string; $wrap?: string }>`
  display: flex;
  gap: ${({ $gap, theme }) => $gap || theme.spacing.md};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'stretch'};
  flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};
`;

export const Badge = styled.span<{ $color?: string }>`
  display: inline-block;
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 12px;
  font-weight: 500;
  background: ${({ $color }) => $color || '#e0e0e0'};
  color: white;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 16px;
`;

