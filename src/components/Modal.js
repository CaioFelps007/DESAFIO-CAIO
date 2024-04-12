
import { View } from 'react-native';
import { Modal } from 'react-native';
import Textos from '../components/TextComponent';
import Botao from '../components/ButtonComponent';
import { styles } from '../style/StyleSheet';


export default function Telamodal({ visivel, animacao, onrequest, onpres, txt }) {



    return (

        <Modal visible={visivel} animationType={animacao} onRequestClose={onrequest}>
            <View style={styles.container2}>

                <Textos styletxt={styles.textobtn3} texto={txt} />

                <Botao estilo={styles.botao2} onpress={onpres} styletxt={styles.textobtnModal} texto="Fechar"
                />
            </View>
        </Modal>



    );
}