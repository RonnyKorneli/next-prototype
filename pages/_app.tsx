import '../styles/globals.scss';
import '../styles/pages/products/products.scss';

import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

import { wrapper } from '@store/store';

interface PageProps {
  pageProps: {
    // here we can add global page parameter (?debug=true)
  };
}
const MyApp = ({
  Component,
  ...rest
}: Omit<AppProps, 'pageProps'> & PageProps) => {
  //console.log('rest: ', rest);
  const { store, props } = wrapper.useWrappedStore(rest);

  // GTM implementation
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_TAGMANAGER_ID) {
      throw new Error(
        'NEXT_PUBLIC_GOOGLE_TAGMANAGER_ID env. variable is missing'
      );
    }
    TagManager.initialize({
      gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAGMANAGER_ID,
    });
  }, []);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default MyApp;
