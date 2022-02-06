import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="application-TileColor" />
          <meta charSet="UTF-8" />
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />

          <link href="/favicons/site.webmanifest" rel="manifest" />
          <link href="/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        </Head>
        <body className="min-w-max">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
