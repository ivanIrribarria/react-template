import SimpleContainer from '../../components/SimpleContainer';

export default {
  title: 'Components/SimpleContainer',
  component: SimpleContainer,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export const SimpleContainerStory = { };