import styled from "styled-components";

export const Popup = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 4;

    opacity: ${ ({popIsVisible}) => popIsVisible ? 1 : 0 };
    pointer-events: ${ ({popIsVisible}) => popIsVisible ? 'unset' : 'none' };

    transition: opacity .3s; 

`

export const Backdrop = styled.div`
    position: fixed;
    z-index: 4;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0,0,0,0.5);

`

export const Container = styled.div`
    position: absolute;
    z-index: 5;

    max-width: 100%;
    width: 800px;

    padding: 30px;

    background: #fff;
    border-radius: 10px;

    box-shadow: 1px 1px 15px 0px rgba(143,143,143,0.92)
`

export const Header = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & > h1 {
        font-size: 1.5rem;
        color: #34B4B5
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    & > div > input {
        width: 40%;
        padding: 10px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #4B4B4B;
    }

    & > div {
        display: flex;
        justify-content: space-between;
        
    }

    & > textarea {
        margin-top: 15px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #4B4B4B;
        padding:10px;
    }

    & > input {
        margin-top: 15px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #4B4B4B;
        padding: 10px;
    }

    & > button {
        margin-top: 15px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #34B4B5;
        padding: 10px;
        background-color: #34B4B5;
        color: white ;
        font-weight: 500;
        font-size: 18px ;
        cursor: pointer ;
    }
`