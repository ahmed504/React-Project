import styledComponents from "styled-components";

export const Container = styledComponents.div `
    display: flex;
    flex-wrap: wrap;
    padding: 60px 30px;
`

export const ImgItem = styledComponents.div `
  flex: 50%;

  @media (max-width: 412px) {
    flex: 100%
  }
  `

  export const Img = styledComponents.img `
    
    object-fit: cover;
    width: 410px;
    height: 273px;

    @media (max-width: 412px) {
      width: 300px;
      height: 245px;
      margin: auto;
      display: block;
    }
`

export const Title = styledComponents.h4 `
    color: #fff;
    font-weight: bold;
    direction: rtl;
  `

  export const TitleDesc = styledComponents.h2 `
    color: #fff;
    font-size: 2.4em;
    font-weight: 700;
    margin-top: 0;
    direction: rtl;
`

export const DescItem = styledComponents.div `
  flex: 50%;
  color: #fff;

  @media (max-width: 412px) {
    flex: 100%
  }
`

export const Desc = styledComponents.p `
    direction: rtl;
  `