import styledComponents from "styled-components";

export const Container = styledComponents.div `
    display: flex;
    flex-wrap: wrap;
    padding: 60px 30px;
`

export const ImgItem = styledComponents.div `
  width: 50%;
  `

  export const Img = styledComponents.img `
    width: 100%;
    object-fit: cover;
    width: 410px;
    height: 273px;
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
    margin-top: 0;
    direction: rtl;
    unicode-bidi: bidi-override;
`

export const DescItem = styledComponents.div `
  width: 50%;
`

export const Desc = styledComponents.p `
    direction: rtl;
    unicode-bidi: bidi-override;
  `