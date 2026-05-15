import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { THEME } from "../../styles/constants";
import { styles } from "./styles";
import { GestureResponseDistanceType } from "react-native-screens";
import { GestureResponderEvent } from "react-native";

type Props = {
    label: string,
    disable?: boolean,
    variant?: "primary" | "secondary" | "outline"
    onPress? : (event: GestureResponderEvent) => void
}

export function Botao({label, variant = "primary", onPress, disable} : Props) {

    function handleOnPress(event: GestureResponderEvent){

        if (!onPress) return
        if(disable) return
            onPress(event)
        
    }
    return(
    <TouchableOpacity style={[styles[variant].buttonContainer, disable && {opacity: 0.5}]} onPress={handleOnPress}>
        <Text style={styles[variant].buttonText}>
            {label}
        </Text>
    </TouchableOpacity>
    )
}

