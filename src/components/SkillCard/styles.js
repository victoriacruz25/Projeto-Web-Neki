import styled from 'styled-components'

export const Card = styled.div`
width: 290px;
height: 400px;
background-color: white;
box-shadow: 1px 5px 16px 5px rgba(179,179,179,0.54);
margin-top: 50px;
border-radius: 5px;
padding: 10px;
cursor: pointer;

& > button {
    width: 100%;
    height: 5%;
    background-color:#34B4B5;
    border-radius:5px;
    outline: none;
    border: none;
    cursor: pointer;
    color: white;
}

`
export const Imagem = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        object-fit: cover;
        object-position: center;
    }
`
export const Nome = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > strong {
        color: #474747;
        font-size:18px;
    }

    & > span {
        color: #34B4B5;
    }
   

    
`
export const Descricao = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    color: #4B4B4B;

    & > strong {
        margin-top: 20px;
    }


    & > p {
        margin-top: 20px;
    }
    

`

