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
import api from '../../Service/api';
import Swal from 'sweetalert2'





function Login () {

    const [passwordType, setPasswordType ] = useState("password")
    const navigation  = useNavigate()
    const [login, setLogin ] = useState("")
    const [senha, setSenha ] = useState("")
    const [logado, setLogado ] = useState(false)


    async function fazerLogin() {

        if(!login || !senha ){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Dados incorretos!',
              })
              return
        }

        try {
           let user = await api.post("/api/login",
            {
                login,
                senha
            })
    
            if(logado === true){
                localStorage.setItem("user", JSON.stringify(user.data)) //transforma os dados do user em Json e armazena no localStorage 
            }else{
                sessionStorage.setItem("user", JSON.stringify(user.data))
            }
            navigation("/home")
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Dados incorretos!',
              })
        }
    }

    return(
        <Container>
            <Card>
                <Header>
                    <h1>Login</h1>
                </Header>
                <Imputs>
                    <div>
                        <label>Seu login</label>
                        <input value={login } onChange={(e) => {setLogin(e.target.value)}}/>
                    </div>
                    <div>
                        <label>Sua senha</label>
                        {passwordType === "text" ? <VscEye size={15} color="#000" onClick={() => {setPasswordType("password")}}/>: <VscEyeClosed size={15} color="#000" onClick={() => {setPasswordType("text")}}/>}
                        <input type={passwordType} value={senha } onChange={(e) => {setSenha(e.target.value)}}/>
                    </div>
                    <div>
                        <input type={'checkbox'} value={logado } onChange={(e) => {setLogado(e.target.checked)}}/>
                        <label>Manter-me logado</label>
                    </div>
                    <button onClick={fazerLogin}>
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