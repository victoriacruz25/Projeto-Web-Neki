import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {VscEye,VscEyeClosed} from 'react-icons/vsc'
import { 
    Container,
    Card,
    Header,
    Imputs,
    Footer
} from './styles'



function Login () {

    const [passwordType, setPasswordType ] = useState("password")
    const navigation  = useNavigate()


    return(
        <Container>
            <Card>
                <Header>
                    <h1>Login</h1>
                </Header>
                <Imputs>
                    <div>
                        <label>Seu login</label>
                        <input/>
                    </div>
                    <div>
                        <label>Sua senha</label>
                        {passwordType === "text" ? <VscEye size={15} color="#000" onClick={() => {setPasswordType("password")}}/>: <VscEyeClosed size={15} color="#000" onClick={() => {setPasswordType("text")}}/>}
                        <input type={passwordType}/>
                    </div>
                    <div>
                        <input type={'checkbox'}/>
                        <label>Manter-me logado</label>
                    </div>
                    <button>
                        Logar
                    </button>
                </Imputs>
                <Footer>
                    <span>
                        Ainda não tem conta? 
                    </span>
                    <strong onClick={() => {navigation("/cadastro")}}>
                        Cadastre-se
                    </strong>
                </Footer>
            </Card>
        </Container>
    );
}

export default Login;