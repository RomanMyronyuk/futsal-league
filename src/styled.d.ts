import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      warning: string;
      error: string;
      info: string;
      background: string;
      surface: string;
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      border: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}

