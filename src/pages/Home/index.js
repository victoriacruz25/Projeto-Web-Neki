import SkillCard from "../../components/SkillCard";
import { Container, 
    Conteudo, 
    Header, 
    Pesquisar, 
    Skills, 
    TipoSkill,
    Break
} from "./styles";
import {useState} from 'react'
import CadastrarSkill from '../../components/CadastrarSkill'
import JoinSkill from '../../components/JoinSkill'
import {useNavigate} from 'react-router-dom'


function Home() {

    const [popupCriacaoSkillVisivel, setPopupCriacaoSkillVisivel] = useState(false)
    const [popupJoinSkillVisivel, setPopupJoinSkillVisivel] = useState(false)
    const [mostrarTodasSkills, setMostrarTodasSkills] = useState(true)
    const navigation = useNavigate()

    return(
        <>

             <CadastrarSkill popIsVisible={popupCriacaoSkillVisivel} setPopupIsVisible={setPopupCriacaoSkillVisivel}/>
             <JoinSkill popIsVisible={popupJoinSkillVisivel} setPopupIsVisible={setPopupJoinSkillVisivel}/>
            <Container>
                <Header>
                    <h1>Lista de skills</h1>
                </Header>
                <Pesquisar>
                    <div>
                        <label>Pesquisar skill</label>
                        <input placeholder="Digite o nome de uma skill"/>
                    </div>
                    <button onClick={() => {setPopupCriacaoSkillVisivel(true)}}>Cadastrar Skill</button>
                    <button onClick={() => { 
                        localStorage.clear() 
                        navigation("/")
                    }}>Sair</button>
                </Pesquisar>
                <Skills>
                    <TipoSkill ativo={mostrarTodasSkills}>
                        <strong onClick={() => {setMostrarTodasSkills(true)}}>Todas as skills</strong>
                    </TipoSkill>
                    <TipoSkill ativo={!mostrarTodasSkills}>
                        <strong onClick={() => {setMostrarTodasSkills(false)}}>Minhas skills</strong>
                    </TipoSkill>
                </Skills>
                <Conteudo>
                    <SkillCard onClick={() => {setPopupJoinSkillVisivel(true)}}/>
                </Conteudo>
            </Container>
        </>
        
    )
}

export default Home;
