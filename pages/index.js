import Head from 'next/head'
import * as style from '../styles/global'

import { Link as SCLink, Text } from "@willsgimenes/shibuya/dist";

export default function Home() {
  return (
    <div css={style.body}>
      <Head>
        <title>willgimenes</title>
      </Head>

      <main css={style.background}>
        <div css={style.app}>
          <div css={style.left} />
          <div css={style.right}>
            <Text variant='h1'>William is 🏗️ the web!!!</Text>
            <div>
              <Text>Senior Software Developer based in São Paulo (Brazil).</Text>
              <ul css={style.list}>
                <li css={style.links}>
                  <SCLink inverted external url='https://www.github.com/willsgimenes'>Github</SCLink>
                </li>
                <li css={style.links}>
                  <SCLink inverted external url='https://www.linkedin.com/in/william-gimenes'>Linkedin</SCLink>
                </li>
                <li css={style.links}>
                  <SCLink inverted external url='https://listen.willgimenes.dev'>Get a song</SCLink>
                </li>
              </ul>
            </div>
            <div css={style.imageCopyRight}>
              <small>
                Unicorn Gundam (RX-0) at Odaiba DiverCity Tokyo Plaza
              </small>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
