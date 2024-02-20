/** @type { import('@storybook/react').Preview } */
import i18n from  '../src/i18n'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "../src/themes/dark.theme";
import { lightTheme } from "../src/themes/light.theme";
import { useMemo } from "react";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    i18n,
  },
  globals: {
    locale: 'en',
        locales: {
            en: 'English',
            es: 'Español',
            it: 'Italiano',
        },
  }
};

export default preview;

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};

export const withMuiTheme = (Story, context) => {
  const { theme: themeKey } = context.globals;

  const theme = useMemo(() => THEMES[themeKey] || THEMES["light"], [themeKey]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: "light", left: "☀️", title: "Light mode" },
        { value: "dark", left: "🌙", title: "Dark mode" },
      ],
    },
  },
};