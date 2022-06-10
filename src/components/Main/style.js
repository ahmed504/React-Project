import { Link } from "react-router-dom";
import styledComponents from "styled-components";

export const Title = styledComponents.h2 `
    text-align: center;
    color: #ff0000;
    font-size: 2.4em;
    font-weight: 700;
    letter-spacing: 5px
`

export const MainSection = styledComponents.main `
    background-color: #eee;
    overflow: hidden
  `
  
  export const Container = styledComponents.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 30px;
  `
  
  export const Item = styledComponents.div `
    padding: 30px;
    margin-right: 3%;
    width: 330px;
    background-color: #fff;
    text-align: center;
  `
  
  export const Img = styledComponents.img `
    border-radius: 50%;
    width: 250px;
    height: 250px;
    margin: 0 auto;
  `
  
  export const ItemTitle = styledComponents.h4 `
    color: #ff0000;
    font-weight: bold;
  `
  
  export const Desc = styledComponents.p `
    direction: rtl;
    unicode-bidi: bidi-override;
  `
  export const Button = styledComponents(Link) `
    display: inline-block;
    text-decoration: none;
    color: #000;
    padding: 10px 20px;
    border: 2px solid #ff0000;
    cursor: pointer;

    :hover {
        border: 2px solid #ffaaaa;
    }
  `