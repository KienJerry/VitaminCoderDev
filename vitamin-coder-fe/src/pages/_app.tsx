import "@/styles/globals.css";
import "@/styles/app.scss";

import { ConfigProvider } from "antd";
import NextNProgress from "nextjs-progressbar";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import { END } from "redux-saga";

import * as configProvider from "@/constants/configProvider";
import { wrapper } from "@/store";

function WrappedApp({ Component, pageProps, language }: any) {
  return (
    <ConfigProvider
      touch-action="pan-x pan-y"
      theme={configProvider.ConfigProvider}
    >
      <NextNProgress color="#00b14f" />
      <IntlProvider
        locale={language?.locale || "en"}
        messages={language?.messages}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </ConfigProvider>
  );
}

WrappedApp.getInitialProps = async ({ Component, ctx }: any) => {
  let pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  pageProps = {
    ...pageProps,
    ...(Component.getStaticProps ? await Component.getStaticProps(ctx) : {}),
  };
  pageProps = {
    ...pageProps,
    ...(Component.getServerSideProps
      ? await Component.getServerSideProps(ctx)
      : {}),
  };

  if (ctx.req) {
    ctx?.store?.dispatch(END);
    await ctx?.store?.sagaTask?.toPromise();
  }

  return { pageProps };
};

const mapState = (state: any) => {
  const language = state.Language?.language;
  return { language };
};

export default wrapper.withRedux(connect(mapState)(WrappedApp));
