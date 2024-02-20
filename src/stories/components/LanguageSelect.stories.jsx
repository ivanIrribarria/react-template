import LanguageSelect from '../../components/LanguageSelect';

export default {
  title: 'Components/LanguageSelect',
  component: LanguageSelect,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export const LanguageSelectStory = { };