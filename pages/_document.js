import Document, { Html, Head, Main, NextScript } from 'next/document'
import * as style from '../styles/global'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body css={style.body}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument