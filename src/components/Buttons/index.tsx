import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { THEME } from "../../styles/constants";
import { styles } from "./styles";
import { GestureResponseDistanceType } from "react-native-screens";
import { GestureResponderEvent } from "react-native";

type Props = {
    label: string,
    onPress? : (event: GestureResponderEvent) => void
}

export function Botao({label, onPress} : Props) {
    return(
    <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>
            {label}
        </Text>
    </TouchableOpacity>
    )
}

