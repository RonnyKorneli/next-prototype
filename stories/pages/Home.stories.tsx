import Product, { getServerSideProps } from '../../pages/produkte/[name]/[id]';
import { Provider } from 'react-redux';
import { _store_storybook } from '../../.storybook/preview';
import { Response } from 'express';
import { IncomingMessage } from 'connect';
import { HYDRATE } from 'next-redux-wrapper';
import { Meta, Story } from '@storybook/react-webpack5';
const mockRequest = {
  body: {
    firstName: 'J',
    lastName: 'Doe',
    email: 'jdoe@abc123.com',
    password: 'Abcd1234',
    passwordConfirm: 'Abcd1234',
    company: 'ABC Inc.',
  },
} as unknown as IncomingMessage & {
  cookies: Partial<{ [key: string]: string }>;
};

const mockResponse = {
  body: {
    firstName: 'J',
    lastName: 'Doe',
    email: 'jdoe@abc123.com',
    password: 'Abcd1234',
    passwordConfirm: 'Abcd1234',
    company: 'ABC Inc.',
  },
} as unknown as Response;

export default {
  title: 'Pages/Home',
  component: Product,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  decorators: [
    (
      story: any,
      {
        args,
        loaded: {
          props: { initialState },
        },
      }
    ) => {
      const store = _store_storybook();
      store.dispatch({ type: HYDRATE, payload: initialState });
      return <Provider store={store}>{story()}</Provider>;
    },
  ],
  loaders: [
    async (args) => {
      const ssrProps = await getServerSideProps({
        params: undefined,
        previewData: undefined,
        req: mockRequest,
        res: mockResponse,
        resolvedUrl: '',
        query: { id: '8155003.html' },
      });
      return ssrProps;
    },
  ],
} as Meta;

export const ProductPage: Story = (_args, { loaded: { props } }) => <Product />;
