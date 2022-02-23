import {
    Card,
    Imagem,
    Nome,
    Descricao
} from './styles'


function SkillCard({onClick,skill,deletar,id,conhecimento}) {

    return(
        <Card onClick={onClick}>
            <Imagem>
                <img src={skill.imagem}/>
            </Imagem>
            <Nome>
                <strong >{skill.nome}</strong>
                <span>Versão {skill.versao}</span>
                <span>{conhecimento ? `Nível ${conhecimento}`:" "}</span>
            </Nome>
            <Descricao>
                <strong>Descrição</strong>
                <p>{skill.descricao}</p>
            </Descricao>
            <button className={"clicavel"} onClick={() => {deletar(id)}}>Excluir</button>
        </Card>
    )
}

export default SkillCard;