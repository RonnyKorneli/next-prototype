import Tooltip from '@components/Tooltip';
import { Meta, Story } from '@storybook/react-webpack5';
import TooltipIconFilled from '@icons/tooltip-filled.svg';
import TooltipIcon from '@icons/tooltip-outline.svg';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    text: {
      description: 'Adjust tooltip text',
      control: 'text',
      defaultValue:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'top-left-200', 'bottom', 'bottom-left-200', 'custom'],
      description: 'Choose the position',
    },
    outline: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    light: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} as Meta;
const Template: Story = (args) => {
  const lit = args.light ? '-light' : '';
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '220px',
        width: '400px',
      }}
    >
      <Tooltip text={''} position={''} {...args}>
        {args.outline ? (
          <TooltipIcon className={'icon ' + lit} />
        ) : (
          <TooltipIconFilled className={'icon ' + lit} />
        )}
      </Tooltip>
    </div>
  );
};

export const Default = Template.bind({});
const defaultValue =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';
Default.args = {
  position: 'custom',
  outline: true,
  text: defaultValue,
  light: false,
};
export const PositionTop = Template.bind({});
PositionTop.args = {
  position: 'top',
  text: defaultValue,
};

export const PositionTopLeft200 = Template.bind({});
PositionTopLeft200.args = {
  position: 'top-left-200',
  text: defaultValue,
};

export const PositionBottom = Template.bind({});
PositionBottom.args = {
  position: 'bottom',
  text: defaultValue,
};

export const PositionBottomLeft200 = Template.bind({});
PositionBottomLeft200.args = {
  position: 'bottom-left-200',
  text: defaultValue,
};
