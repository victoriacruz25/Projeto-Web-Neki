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
import Swal from 'sweetalert2'
import api from '../../Service/api';



function Cadastro () {

    const [passwordType, setPasswordType ] = useState("password")
    const navigation = useNavigate()
    const [confirmPasswordType, setConfirmPasswordType ] = useState("password")
    const [login, setLogin ] = useState("")
    const [senha, setSenha ] = useState("")
    const [confirmarSenha, setConfirmarSenha ] = useState("")
    const [logado, setLogado ] = useState(false)

    async function cadastrarUsu() {

        if(!login || !senha || senha !== confirmarSenha){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Dados incorretos!',
              })
              return
        }

        try {
           let user = await api.post("/api/cadastrarUsuario",
            {
                login,
                senha
            })
            if(logado === true){
                localStorage.setItem("user", JSON.stringify(user.data)) //transforma os dados do user em Json e armazena no localStorage 
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
                    <h1>Cadastro</h1>
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
                        <label>Confirme sua senha</label>
                        {confirmPasswordType === "text" ? <VscEye size={15} color="#000" onClick={() => {setConfirmPasswordType("password")}}/>: <VscEyeClosed size={15} color="#000" onClick={() => {setConfirmPasswordType("text")}}/>}
                        <input type={confirmPasswordType} value={confirmarSenha } onChange={(e) => {setConfirmarSenha(e.target.value)}}/>
                    </div>
                    <div>
                        <input type={'checkbox'} value={logado } onChange={(e) => {setLogado(e.target.checked)}}/>
                        <label>Manter-me logado</label>
                    </div>
                    <button onClick={cadastrarUsu}>
                        Cadastre-se
                    </button>
                </Imputs>
                <Footer>
                    <span >
                        Já possui uma  conta? 
                    </span>
                    <strong onClick={() => {navigation("/")}}>
                        Login
                    </strong>
                </Footer>
            </Card>
        </Container>
    );
}

export default Cadastro;