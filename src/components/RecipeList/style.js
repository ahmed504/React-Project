import styledComponents from "styled-components";

export const Container = styledComponents.div `
    display: flex;
    flex-wrap: wrap;
    padding: 60px 30px;
`

export const ImgItem = styledComponents.div `
  flex: 50%;

  @media (max-width: 400px) {
    flex: 100%
  }
  `

  export const Img = styledComponents.img `
    
    object-fit: cover;
    width: 410px;
    height: 273px;

    @media (max-width: 400px) {
      width: 335px;
      height: 245px;
    }
`

export const Title = styledComponents.h4 `
    color: #fff;
    font-weight: bold;
    direction: rtl;
    unicode-bidi: bidi-override;
  `

  export const TitleDesc = styledComponents.h2 `
    color: #fff;
    font-size: 2.4em;
    font-weight: 700;
    margin-top: 0;
    direction: rtl;
    unicode-bidi: bidi-override;
`

export const DescItem = styledComponents.div `
  flex: 50%;
  color: #fff;

  @media (max-width: 400px) {
    flex: 100%
  }
`

export const Desc = styledComponents.p `
    direction: rtl;
    unicode-bidi: bidi-override;
  `