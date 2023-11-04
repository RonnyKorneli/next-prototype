import '../styles/globals.scss';
import '../styles/pages/products/products.scss';
import { Provider } from 'react-redux';
import { makeStore } from '@store/store';
const store = makeStore();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [
  (Story: any) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
];
export const _store_storybook = () => makeStore();
