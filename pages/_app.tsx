import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { DataProvider } from "utils/DataProvider";
import { globalStyles } from "styles/globals";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <DataProvider>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </DataProvider>
  );
}

export default MyApp;
