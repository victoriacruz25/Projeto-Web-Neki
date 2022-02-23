import { FiX } from 'react-icons/fi'
import {
    Backdrop,
    Container,
    Header,
    Content,
    Popup
} from './styles';


function CadastrarSkill({popIsVisible, setPopupIsVisible }) {
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
                        <input placeholder='Digite o nome da skill'/>
                        <input placeholder='Digite a versão'/>
                    </div>
                        <textarea placeholder='Fale mais sobre a skill'/>
                        <input placeholder='Digite a URL da imagem'/>
                        <button>Cadastrar</button>
                </Content>

            </Container>
        </Popup>
    );
}

export default CadastrarSkill;