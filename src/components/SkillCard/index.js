import {
    Card,
    Imagem,
    Nome,
    Descricao
} from './styles'


function SkillCard({onClick,skill}) {
    return(
        <Card onClick={onClick}>
            <Imagem>
                <img src={skill.imagem}/>
            </Imagem>
            <Nome>
                <strong >{skill.nome}</strong>
                <span>{skill.versao}</span>
            </Nome>
            <Descricao>
                <strong>Descrição</strong>
                <p>{skill.descricao}</p>
            </Descricao>
        </Card>
    )
}

export default SkillCard;