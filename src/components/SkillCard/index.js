import {
    Card,
    Imagem,
    Nome,
    Descricao
} from './styles'


function SkillCard({onClick}) {
    return(
        <Card onClick={onClick}>
            <Imagem>
                <img src={"https://static.atletis.com.br/assets/base/dc9/60c/46c/como-correr-corretamente.jpg"}/>
            </Imagem>
            <Nome>
                <strong>Correr</strong>
                <span>2.0</span>
            </Nome>
            <Descricao>
                <strong>Descrição</strong>
                <p>imprimir grande velocidade ao deslocamento do corpo, pelo contato rápido dos pés ou das patas com o solo.</p>
            </Descricao>
        </Card>
    )
}

export default SkillCard;