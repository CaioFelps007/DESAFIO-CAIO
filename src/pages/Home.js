import { useState } from 'react';
import { View } from 'react-native';
import { Modal } from 'react-native';
import Textos from '../components/TextComponent';
import CaixaTexto from '../components/TextInput';
import Botao from '../components/ButtonComponent';
import { styles } from '../style/StyleSheet';


export default function Home() {

    // Declaração do estado de cada campo e do modal.
    const [celsius, setCelsius] = useState("");
    const [Valor, setValor] = useState("");
    const [modal, setModal] = useState(false);

    // Função que realiza a conta e abre o modal, verificando se contém algum valor definido na caixa de texto
    const conversao = () => {
        const conta = (celsius) * 9 / 5 + 32;
        if (celsius === "") {
            alert("Preencha o campo!")
        }
        else {
            setValor(conta);
            setModal(true)
        }

    };

    // Função que fecha a função
    const fechar = () => {
        setCelsius("");
        setModal(false)
    }

    return (


        <View style={styles.container}>


            {/* // Formulário onde o usuário coloca o valor desejado. */}
            <Textos styletxt={styles.textobtn2} texto="Digite um Valoe para calcular:" />

            <CaixaTexto estilos={styles.caixatxt} textocaixa="Graus Celsiu/ Valor dado" valor={celsius} onchange={setCelsius} />


            <Botao estilo={styles.botao} onpress={conversao} styletxt={styles.textobtn} texto="Calcule Fahrenheit"
            />



            {/* MODAL */}
            <Modal visible={modal} animationType='slide' onRequestClose={setModal}>
                <View style={styles.container2}>

                    <Textos styletxt={styles.textobtn3} texto={`Fahrenheit:${Valor}`} />

                    <Botao estilo={styles.botao2} onpress={fechar} styletxt={styles.textobtnModal} texto="Fechar"
                    />
                </View>
            </Modal>


        </View>


    );
}