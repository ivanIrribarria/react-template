import Home from '../../pages/Home';

export default {
  title: 'Pages/Home',
  component: Home,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export const HomePage = { };