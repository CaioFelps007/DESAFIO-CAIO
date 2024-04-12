import { Text } from "react-native";

export default function Textos({ texto, styletxt }) {
    return (
        // Componente texto
        <Text style={styletxt}>{texto}</Text>
    )
}