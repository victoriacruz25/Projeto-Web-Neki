import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        font-family: 'Roboto';

    }
    
    html, body, #root {
        overflow-x: hidden;
    }

`

export default GlobalStyle;