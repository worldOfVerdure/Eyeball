type ManualPaletteType = {
  light: string,
  dark: string
}

export interface ManualPaletteConfig {
  primaryMain: ManualPaletteType;
  secondaryMain: ManualPaletteType;
  backgroundDefault: ManualPaletteType;
  backgroundPaper: ManualPaletteType;
  textPrimary: ManualPaletteType;
  textSecondary: ManualPaletteType;
  errorMain: ManualPaletteType;
  infoMain: ManualPaletteType;
  divider: ManualPaletteType;
}
//Palette where author choose colors
export const authorPalette: ManualPaletteConfig = {
  primaryMain: {
    light: '#1976d2',
    dark: '#90caf9',
  },
  secondaryMain: {
    light: '#9c27b0',
    dark: '#ce93d8',
  },
  backgroundDefault: {
    light: '#fafafa',
    dark: '#121212',
  },
  backgroundPaper: {
    light: '#ffffff',
    dark: '#1e1e1e',
  },
  textPrimary: {
    light: 'rgba(0, 0, 0, 0.87)',
    dark: '#ffffff',
  },
  textSecondary: {
    light: 'rgba(0, 0, 0, 0.6)',
    dark: 'rgba(255, 255, 255, 0.7)',
  },
  errorMain: {
    light: '#f44336',
    dark: '#f44336',
  },
  infoMain: {
    light: '#2196f3',
    dark: '#2196f3',
  },
  divider: {
    light: 'rgba(0, 0, 0, 0.12)',
    dark: 'rgba(255, 255, 255, 0.12)',
  },
};
