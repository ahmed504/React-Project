import styledComponents from "styled-components"

export const Main = styledComponents.main `
  
`
export const Container = styledComponents.div `
    display: flex;
    flex-wrap: wrap;
`

export const ImgItem = styledComponents.div `
    width: 66%;
    position: relative;
  `

export const Img = styledComponents.img `
    width: 100%;
    z-index: -1
`
export const TitleSection = styledComponents.div `
    width: 45%;
    height: 65%;
    padding: 50px 30px;
    background-color: #000;
    opacity: 0.85;
    position: absolute;
    bottom: 0;
    left: 0
`

export const Title = styledComponents.h4 `
    color: #ff0000;
    font-weight: bold;
    direction: rtl;
    unicode-bidi: bidi-override;
  `

export const TitleDesc = styledComponents.h2 `
    color: #ff0000;
    font-size: 2.4em;
    font-weight: 700;
    direction: rtl;
    unicode-bidi: bidi-override;
`

export const DescItem = styledComponents.div `
  padding: 30px;
  width: 34%;
  background-color: #eee;
`

export const Desc = styledComponents.p `
    direction: rtl;
    unicode-bidi: bidi-override;
  `