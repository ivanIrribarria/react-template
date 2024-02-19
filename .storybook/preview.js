/** @type { import('@storybook/react').Preview } */
import i18n from  '../src/i18n'

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
