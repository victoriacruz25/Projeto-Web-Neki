import { FiX } from 'react-icons/fi'
import {
    Backdrop,
    Container,
    Header,
    Content,
    Popup
} from './styles';


function CadastrarSkill({ popIsVisible, setPopupIsVisible }) {
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
                        <input placeholder='Digite o seu nível de conhecimento' />
                        <button>Join!</button>
                    </Content>

                </Container>
            </Popup>
        </>

    );
}

export default CadastrarSkill;