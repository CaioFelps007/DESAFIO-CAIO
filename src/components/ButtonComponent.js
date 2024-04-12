import { TouchableOpacity, Text } from "react-native";

export default function Botao({ estilo, onpress, styletxt, texto }) {
    return (
        // Componente do botão
        <TouchableOpacity style={estilo} onPress={onpress} >
            <Text style={styletxt}>{texto}</Text>
        </TouchableOpacity>
    )
}