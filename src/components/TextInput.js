import { TextInput } from "react-native";

export default function CaixaTexto({ estilos, textocaixa, valor, onchange }) {
    return (
        // Componente Caixa de Texto/ TextInput
        <TextInput style={estilos} placeholder={textocaixa} value={valor} onChangeText={onchange} />
    )
}