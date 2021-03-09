import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from '../redux/store';
import { ToastProvider } from 'react-toast-notifications';
import NavBar from 'components/layout/navbar/NavBar';
import LoadingOverlay from 'components/layout/LoadingOverlay';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import 'moment/locale/th';
moment.locale('th');
import 'react-markdown-editor-lite/lib/index.css';
import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import 'common/assets/css/flaticon.css';
import 'swiper/swiper-bundle.css';
import 'common/assets/css/icon-example-page.css';
import logo144 from '../public/assets/icon/ramble144.png';
import logo256 from '../public/assets/icon/ramble256.png';

import i18n from 'i18n-js';
import 'translations';

export const LocalizationContext = React.createContext({});

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [locale, setLocale] = useState(store.getState().layout.lang);

  store.subscribe(() => {
    setLocale(store.getState().layout.lang);
  });

  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale: locale, ...options }),
    }),
    [locale]
  );

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Modal>
      <Head>
        <title>Ramble Runner Sharing Community</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href={logo144} />
        <link rel="apple-touch-icon" href={logo144} />
        <meta
          name="description"
          content="Ramble Runner Sharing Community find your first marathon."
        />
        <meta
          property="og:description"
          content="Ramble Runner Sharing Community find your first marathon."
        />
        <meta property="og:image" content={logo256} />
      </Head>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <LocalizationContext.Provider value={localizationContext}>
          <ThemeProvider theme={theme}>
            <ToastProvider placement={'top-center'} autoDismissTimeout={2000}>
              <Provider store={store}>
                <PersistGate persistor={persistor}>
                  <LoadingOverlay>
                    <NavBar />
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                  </LoadingOverlay>
                </PersistGate>
              </Provider>
            </ToastProvider>
          </ThemeProvider>
        </LocalizationContext.Provider>
      </MuiPickersUtilsProvider>
    </Modal>
  );
}
