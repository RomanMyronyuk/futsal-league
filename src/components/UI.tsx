import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md};

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`;

export const Button = styled.button<{ $variant?: 'primary' | 'secondary' | 'danger'; $fullWidth?: boolean }>`
  padding: 10px 16px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

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

  @media (max-width: 480px) {
    padding: 12px 16px;
    font-size: 14px;
  }
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 16px;
  width: 100%;
  transition: border-color 0.2s;
  -webkit-appearance: none;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 480px) {
    padding: 14px 12px;
  }
`;

export const Select = styled.select`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 16px;
  width: 100%;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 40px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 480px) {
    padding: 14px 12px;
    padding-right: 40px;
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
  font-size: 28px;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 0 -${({ theme }) => theme.spacing.lg};
  padding: 0 ${({ theme }) => theme.spacing.lg};

  @media (max-width: 480px) {
    margin: 0 -${({ theme }) => theme.spacing.md};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  min-width: 500px;

  @media (max-width: 480px) {
    font-size: 12px;
    min-width: 400px;
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
  font-weight: 600;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  white-space: nowrap;

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const Tr = styled.tr`
  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const Flex = styled.div<{ $gap?: string; $justify?: string; $align?: string; $wrap?: string; $direction?: string }>`
  display: flex;
  gap: ${({ $gap, theme }) => $gap || theme.spacing.md};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'stretch'};
  flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};
  flex-direction: ${({ $direction }) => $direction || 'row'};
`;

export const MobileStack = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const Badge = styled.span<{ $color?: string }>`
  display: inline-block;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 12px;
  font-weight: 500;
  background: ${({ $color }) => $color || '#e0e0e0'};
  color: white;
  white-space: nowrap;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 16px;

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.lg};
    font-size: 14px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    width: 100%;
    
    & > button {
      flex: 1;
      min-width: 0;
    }
  }
`;
