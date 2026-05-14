import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { THEME } from "../../styles/constants";
import { styles } from "./styles";
import { GestureResponseDistanceType } from "react-native-screens";
import { GestureResponderEvent } from "react-native";

type Props = {
    label: string,
    variant?: "primary" | "secondary" | "outline"
    onPress? : (event: GestureResponderEvent) => void
}

export function Botao({label, variant = "primary", onPress} : Props) {
    return(
    <TouchableOpacity style={styles[variant].buttonContainer} onPress={onPress}>
        <Text style={styles[variant].buttonText}>
            {label}
        </Text>
    </TouchableOpacity>
    )
}

