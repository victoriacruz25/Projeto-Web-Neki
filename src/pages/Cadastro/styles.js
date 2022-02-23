import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #eee;
`
export const Card = styled.div`

    width: 500px;
    height: 500px;
    background-color: white;
    border-radius: 5px;
`
export const Header = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    color: #34B4B5;
`
export const Imputs = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;

    & > div {
        display: flex;
        flex-direction: column;
        width: 80%;
        position: relative;
        & > svg {
            position: absolute;
            top: 55%;
            right: 10px;
            cursor: pointer;
        }
    }

    & > div + div {
        margin-top: 20px;
    }

    & > div > input {
        width: 100%;
        padding: 5px;
        outline:none;
        border-radius: 5px;
        border: 1px solid #4B4B4B;
        ::-ms-reveal{
            display: none;
        }
    }

    & > div:nth-child(4) {
        flex-direction: row;
        align-items: center;
        
        & > input {
            width: 10%;
        }

        & > label{
            font-size: 15px;
        }
    }

    & > button {
        width: 80%;
        padding: 10px 0;
        font-size: 20px;
        font-weight: 500;
        background-color: #34B4B5;
        color: #fff;
        border: none;
        outline: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 20px;
    }

`
export const Footer = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 10px;
    
    & > strong {
        margin-right: 10%;
        color:#34B4B5;
        margin-left: 3px;
        cursor: pointer;
    }
`
