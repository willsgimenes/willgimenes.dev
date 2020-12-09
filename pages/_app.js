import {Global, css} from "@emotion/core";
import React from 'react'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Global styles={css`
                @font-face {
                    font-family: 'RobotoCondensed';
                    src: url('/fonts/RobotoCondensed-Bold.ttf');
                    src: url('/fonts/RobotoCondensed-BoldItalic.ttf');
                    src: url('/fonts/RobotoCondensed-Italic.ttf');
                    src: url('/fonts/RobotoCondensed-LightItalic.ttf');
                    src: url('/fonts/RobotoCondensed-Regular.ttf');
                }
                body {
                    font-family: 'RobotoCondensed';
                }
            `}/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
