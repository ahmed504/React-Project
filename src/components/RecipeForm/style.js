import styled from "styled-components";

export const Form = styled.form `
    
`

export const Input = styled.input `
    display: block;
    width: 75%;
    background: #e0d2da;
    border: 0;
    padding: 10px;
    outline: 0;
    margin: 8px auto
`

export const IngInput = styled(Input) `
    height: 50px
`

export const MethodInput = styled.textarea `
    height: 100px;
    display: block;
    width: 75%;
    background: #e0d2da;
    border: 0;
    padding: 10px;
    outline: 0;
    margin: 8px auto
`

export const Button = styled.button `
    padding: 10px 20px;
    background: #fff;
    border: 2px solid #fff;
    cursor: pointer;
    margin: 0 auto;
    display: block;

    :hover {
        border: 2px solid #e0d2da;
        background: #e0d2da;
    }
`