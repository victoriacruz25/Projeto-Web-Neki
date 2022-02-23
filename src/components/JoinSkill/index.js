import { FiX } from 'react-icons/fi'
import {
    Backdrop,
    Container,
    Header,
    Content,
    Popup
} from './styles';
import { useNavigate } from 'react-router-dom'
import api from "../../Service/api";
import Swal from 'sweetalert2'
import {useState} from 'react'

function CadastrarSkill({ popIsVisible, setPopupIsVisible, id, skill,setSkills, joinSkill, setJoinSkill}) {

    const [nivel, setNivel] = useState(0)
    const user = JSON.parse(localStorage.getItem("user")) || JSON.parse(sessionStorage.getItem("user"))

    async function cadastrarHab() {
        console.log(nivel.data)
        if(!nivel){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Dados incorretos!',
              })
              return
        }

        try {
           let hab = await api.post("/api/cadastrarHabilidadeUsuario",
            {
                usuario:user.id,
                habilidade:id,
                nivel:Number(nivel),
            })
           // navigation("/")
           //setSkills([...skill,hab.data])
           setJoinSkill(joinSkill+1)
           setPopupIsVisible(false)
           
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Dados incorretos!',
              })
              console.log(error)
        }
    }

    


    return (
        <>
            <Popup popIsVisible={popIsVisible}>
                <Backdrop popIsVisible={popIsVisible} onClick={() => setPopupIsVisible(false)} />

                <Container popIsVisible={popIsVisible} >

                    <Header >
                        <h1>Join Skill</h1>

                        <FiX
                            cursor='pointer'
                            color='#34B4B5'
                            size={35}
                            onClick={() => setPopupIsVisible(false)}
                        />
                    </Header>

                    <Content>
                        <input type={"number"} placeholder='Digite o seu nível de conhecimento' valeu={nivel} onChange={(e) => setNivel(e.target.value)} />
                        <button onClick={cadastrarHab}>Join!</button>
                    </Content>

                </Container>
            </Popup>
        </>

    );
}

export default CadastrarSkill;