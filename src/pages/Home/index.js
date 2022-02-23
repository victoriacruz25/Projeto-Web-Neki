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
import Swal from 'sweetalert2'



function Home() {

    const [popupCriacaoSkillVisivel, setPopupCriacaoSkillVisivel] = useState(false)
    const [popupJoinSkillVisivel, setPopupJoinSkillVisivel] = useState(false)
    const [mostrarTodasSkills, setMostrarTodasSkills] = useState(true)
    const navigation = useNavigate()
    const [skills, setSkills] = useState([])
    const [minhasSkills, setMinhasSkills] = useState([])
    const [skillSelecionar, setSkillSelecionar] = useState(0)
    const user = JSON.parse(localStorage.getItem("user")) || JSON.parse(sessionStorage.getItem("user"))
    const [joinSkill, setJoinSkill] = useState(0)
    const [pesquisar, setPesquisar] = useState("")
    const [skillsVisiveis, setSkillsVisiveis] = useState([])
    const [minhasSkillsVisiveis, setMinhasSkillsVisiveis] = useState([])


    useEffect(() => {
        if(pesquisar === "") {
            setSkillsVisiveis(skills)
            setMinhasSkillsVisiveis(minhasSkills)
            return
        }
        setSkillsVisiveis(skills.filter((item) => item.nome.toLowerCase().includes(pesquisar.toLowerCase()) ))
        setMinhasSkillsVisiveis(minhasSkills.filter((item) => item.habilidade.nome.toLowerCase().includes(pesquisar.toLowerCase()) ))
    },[pesquisar])

    async function deletarSkill(id) {
        try{
            await api.delete(`/api/deletarHabilidade/${id}`)
            let deletarMinhasSkillsNovas = skills.filter((item) => item.id !== id )
            setSkills(deletarMinhasSkillsNovas) //filtro retorna todas as skills que não for igual ao id excluido
            setMinhasSkillsVisiveis(deletarMinhasSkillsNovas)
        }catch(erro) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Erro ao excluir skill!',
              })
        }
    }

    async function deletarMinhasSkills(id) {
        try{
            await api.delete(`/api/deletarHabilidadeUsuario/${id}`)
            let minhasSkillsNovas = minhasSkills.filter((item) => item.id !== id ) //filtro retorna todas as skills que não for igual ao id excluido
            setMinhasSkills(minhasSkillsNovas) 
            setMinhasSkillsVisiveis(minhasSkillsNovas)
        }catch(erro) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Erro ao excluir skill!',
              })
        }
    }
    

    useEffect(() => {
        async function carregarDados() {
            let skillResp = await api.get("/api/habilidade")
            setSkills(skillResp.data)
            setSkillsVisiveis(skillResp.data)
            let minhasSkillsResp = await api.get(`/api/habilidadePorIdUsuario/${user.id}`)
            setMinhasSkills(minhasSkillsResp.data)
            setMinhasSkillsVisiveis(minhasSkillsResp.data)
            console.log(minhasSkillsResp.data)
        }
        carregarDados()
    }, [joinSkill])

    return (
        <>

            <CadastrarSkill skill={skills} setSkills={setSkills} popIsVisible={popupCriacaoSkillVisivel} setPopupIsVisible={setPopupCriacaoSkillVisivel} />
            <JoinSkill setJoinSkill={setJoinSkill} joinSkill={joinSkill} skill={minhasSkills} setSkills={setMinhasSkills} id={skillSelecionar} popIsVisible={popupJoinSkillVisivel} setPopupIsVisible={setPopupJoinSkillVisivel} />
            <Container>
                <Header>
                    <h1>Lista de skills</h1>
                </Header>
                <Pesquisar>
                    <div>
                        <label>Pesquisar skill</label>
                        <input placeholder="Digite o nome de uma skill" value={pesquisar} onChange={(e) => {setPesquisar(e.target.value)}}/>
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
                                    {skillsVisiveis.map((skill) => {
                                        return <SkillCard 
                                        deletar={deletarSkill}
                        
                                        key={skill.id} 
                                        id={skill.id} 
                                        skill={skill} 
                                        onClick={(e) => { 
                                            if (Array.from(e.target.classList).includes('clicavel')) return;
                                            setPopupJoinSkillVisivel(true)
                                            setSkillSelecionar(skill.id)
                                        
                                        }} /> //laço de repetiçã(pra cada skill entra um card) 
                                    })}
                                </>
                            )
                            : (
                                <>
                                    {minhasSkillsVisiveis.map((skill) => {
                                        return <SkillCard 
                                        deletar={deletarMinhasSkills}
                                        key={skill.id} 
                                        id={skill.id}
                                        skill={skill.habilidade} 
                                        conhecimento={skill.nivel}
                                        onClick={(e) => { 
                                            if (Array.from(e.target.classList).includes('clicavel')) return;
                                            setPopupJoinSkillVisivel(true) 
                                        }} 
                                        /> //laço de repetiçã(pra cada skill entra um card) 
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
