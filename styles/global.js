import {css} from "@emotion/core";

const PRIMARY_COLOR = '#2f3437'

export const body = css`
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
`

export const background = css`
  background: ${PRIMARY_COLOR};
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const text = css`
  color: rgba(255, 255, 255, .9);
  font-size: 2em;
  text-align: center;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 3em;
  }
`

export const app = css`
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(255, 255, 255, .9);
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  flex-direction: row;
  padding: 0 0;
  width: 100%;
`

export const right = css`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const imageCopyRight = css`
  position: absolute;
  bottom: 10px;
  left: 10px;
  margin: 0 0;
  padding-right: 18px;
  text-decoration: none;
  font-size: 0.8em;

  @media screen and (min-width: 480px) {
    font-size: 0.9em;
    background-position: 100% calc(100% - 2px);
    background-size: 14px 14px;
  }
`

export const left = css`
  background: url("/images/RX-0.jpg");
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`

export const link = css`
  background: url("/images/external.svg") no-repeat;
  background-position: 100% calc(100% - 2px);
  background-size: 11px 11px;
  color: rgba(255, 255, 255, .9);
  margin: 0 5px;
  padding-right: 20px;
  text-decoration: none;
  font-size: .7em;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media screen and (min-width: 768px) {
    background-position: 100% calc(100% - 2px);
    background-size: 14px 14px;
    font-size: 16px;
  }
`

export const list = css`
  padding: 0;
  margin: 16px 0;
  
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`

export const links = css`
  line-height: 1.6em;
  list-style: none;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    line-height: 1.3em;
    display: inline-block;
    margin: 10px;
  }
`
