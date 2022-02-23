import styled from 'styled-components'

 export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    padding-bottom:100px;
    background-color: #f7f7f7;
    
 `
 export const Header = styled.div`
        display: flex;
        justify-content: center;
        align-items:center;
        height: 15vh;
        color: #34B4B5;
        
 `
 export const Pesquisar = styled.div`
      display: flex;
      flex-direction: row;
      width: 80%;
      justify-content: space-between;
      align-items: flex-end;
      

      & > div {
        display: flex;
        flex-direction: column;
        width: 80%;
      }

      & > div > input {
         padding: 10px;
         margin-top: 10px;
         border-radius: 5px;
         border: 1px solid #252525;
         outline: none;


      }

      & > div > label {
         font-size: 20px;
      }

      & > button {
        width: 100px;
        height: 40px;
        border-radius: 5px;
        outline: none;
        background-color: #34B4B5;
        border: none;
        cursor: pointer;
        color: white;
        font-weight: 500;
        
      }

      & > button:nth-child(3) {
         background-color: #d10000;
      }

 `
 export const Skills = styled.div`
      display: flex;
      width: 80%;
      margin-top: 30px;


 `
 export const TipoSkill = styled.div`
         width: 50%;
         display: flex;
         justify-content: center;
         border-bottom: 1px solid ${props => props.ativo ? "#34B4B5" : "#252525"};
         color: ${props => props.ativo ? "#34B4B5" : "#252525"};
         cursor: pointer;
         padding-bottom: 10px;
         opacity:  ${props => props.ativo ? 1 : 0.7} ;
         transition: opacity 0.7s;
 `
 export const Conteudo = styled.div`
         display: flex;
         flex-wrap:wrap;
         justify-content: space-between;
         width: 80%;
         margin-top: 50px;

 `

 export const Break = styled.div`
         width: 100%;
         height: 1px;
 `





