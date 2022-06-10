import styledComponents from "styled-components";

export const HeaderSection = styledComponents.div `
    padding: 20px;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`

export const Logo = styledComponents.div `
    width: 50%;
    float: left;
`

export const LogoText = styledComponents.h2 `
    display: inline-block;
    text-decoration: none;
    color: #000;
    font-size: 30px;
    font-weight: bold
`

export const Anchor = styledComponents.a `
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    :hover {
        color: #eb5424
    }
`

