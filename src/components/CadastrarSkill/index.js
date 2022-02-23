import { FiX } from 'react-icons/fi'
import {
    Backdrop,
    Container,
    Header,
    Content,
    Popup
} from './styles';
import api from '../../Service/api';
import Swal from 'sweetalert2'
import {useState} from 'react'


function CadastrarSkill({popIsVisible, setPopupIsVisible,skill,setSkills }) {

    const [nome,setNome] = useState("")
    const [versao,setVersao] = useState("")
    const [descricao,setDescricao] = useState("")
    const [imagem,setImagem] = useState("")


    async function cadastrarHabilidade() {

        if(!nome || !descricao ){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Faltando dados!',
              })
              return
        }

        try {
           let habSkill = await api.post("/api/cadastrarHabilidade",
            {
                nome,
                versao,
                descricao,
                imagem
            })
            setSkills([...skill,habSkill.data]) //definindo o array com as antigas+novas
            setPopupIsVisible(false)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Erro inesperado ocorreu!',
              })
        }
    }


    return (
        <Popup popIsVisible={popIsVisible}>
            <Backdrop onClick={() => setPopupIsVisible(false)} />

            <Container>

                <Header >
                    <h1>Cadastrar Skill</h1>

                    <FiX
                        cursor='pointer'
                        color='#34B4B5'
                        size={35}
                        onClick={() => setPopupIsVisible(false)}
                    />
                </Header>

                <Content>
                    <div>
                        <input placeholder='Digite o nome da skill' value={nome} onChange={(e) => {setNome(e.target.value)}}/>
                        <input placeholder='Digite a versão' value={versao} onChange={(e) => {setVersao(e.target.value)}}/>
                    </div>
                        <textarea placeholder='Fale mais sobre a skill' value={descricao} onChange={(e) => {setDescricao(e.target.value)}}/>
                        <input placeholder='Digite a URL da imagem' value={imagem} onChange={(e) => {setImagem(e.target.value)}}/>
                        <button onClick={cadastrarHabilidade}>Cadastrar</button>
                </Content>

            </Container>
        </Popup>
    );
}

export default CadastrarSkill;