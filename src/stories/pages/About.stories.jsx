import About from '../../pages/About';

export default {
  title: 'Pages/About',
  component: About,
  decorators: [
    (Story) => (
      <div>
          <Story />
      </div>
    ),
  ],
};

export const AboutPage = { };