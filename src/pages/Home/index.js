import SkillCard from "../../components/SkillCard";
import {
    Container,
    Conteudo,
    Header,
    Pesquisar,
    Skills,
    TipoSkill,
    Break
} from "./styles";
import { useEffect, useState } from 'react'
import CadastrarSkill from '../../components/CadastrarSkill'
import JoinSkill from '../../components/JoinSkill'
import { useNavigate } from 'react-router-dom'
import api from "../../Service/api";



function Home() {

    const [popupCriacaoSkillVisivel, setPopupCriacaoSkillVisivel] = useState(false)
    const [popupJoinSkillVisivel, setPopupJoinSkillVisivel] = useState(false)
    const [mostrarTodasSkills, setMostrarTodasSkills] = useState(true)
    const navigation = useNavigate()
    const [skills, setSkills] = useState([])
    const [minhasSkills, setMinhasSkills] = useState([])
    const [skillSelecionar, setSkillSelecionar] = useState(0)
    



    useEffect(() => {
        async function carregarDados() {
            let skillResp = await api.get("/api/habilidade")
            console.log(skillResp.data)
            setSkills(skillResp.data)
        }
        carregarDados()
    }, [])

    return (
        <>

            <CadastrarSkill skill={skills} setSkills={setSkills} popIsVisible={popupCriacaoSkillVisivel} setPopupIsVisible={setPopupCriacaoSkillVisivel} />
            <JoinSkill  skill={minhasSkills} setSkills={setMinhasSkills} id={skillSelecionar} popIsVisible={popupJoinSkillVisivel} setPopupIsVisible={setPopupJoinSkillVisivel} />
            <Container>
                <Header>
                    <h1>Lista de skills</h1>
                </Header>
                <Pesquisar>
                    <div>
                        <label>Pesquisar skill</label>
                        <input placeholder="Digite o nome de uma skill" />
                    </div>
                    <button onClick={() => { setPopupCriacaoSkillVisivel(true) }}>Cadastrar Skill</button>
                    <button onClick={() => {
                        localStorage.clear()
                        navigation("/")
                    }}>Sair</button>
                </Pesquisar>
                <Skills>
                    <TipoSkill ativo={mostrarTodasSkills}>
                        <strong onClick={() => { setMostrarTodasSkills(true) }}>Todas as skills</strong>
                    </TipoSkill>
                    <TipoSkill ativo={!mostrarTodasSkills}>
                        <strong onClick={() => { setMostrarTodasSkills(false) }}>Minhas skills</strong>
                    </TipoSkill>
                </Skills>
                <Conteudo>
                    {
                        mostrarTodasSkills
                            ? (
                                <>
                                    {skills.map((skill) => {
                                        return <SkillCard key={skill.id} id={skill.id} skill={skill} 
                                        onClick={() => { 
                                            setPopupJoinSkillVisivel(true)
                                            setSkillSelecionar(skill.id)
                                        
                                        }} /> //laço de repetiçã(pra cada skill entra um card) 
                                    })}
                                </>
                            )
                            : (
                                <>
                                    {minhasSkills.map((skill) => {
                                        return <SkillCard key={skill.id} skill={skill} onClick={() => { setPopupJoinSkillVisivel(true) }} /> //laço de repetiçã(pra cada skill entra um card) 
                                    })}
                                </>
                            )
                    }

                </Conteudo>
            </Container>
        </>

    )
}

export default Home;
