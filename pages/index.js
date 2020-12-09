import Head from 'next/head'
import * as style from '../styles/global'

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
            <p css={style.text}>William is 🏗️ the web!!!</p>
            <div>
              <p css={style.paragraph}>
                Senior Software Developer based in São Paulo (Brazil).
              </p>
              <ul css={style.list}>
                <li css={style.links}>
                  <a css={style.link} href="https://www.github.com/willsgimenes" target="_blank">Github</a>
                </li>
                <li css={style.links}>
                  <a css={style.link} href="https://www.linkedin.com/in/william-gimenes/" target="_blank">
                    Linkedin
                  </a>
                </li>
                <li css={style.links}>
                  <a css={style.link} href="https://listen.willgimenes.dev" target="_blank">
                    Get a song
                  </a>
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
