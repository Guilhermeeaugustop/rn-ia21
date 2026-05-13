import { SafeAreaView } from "react-native-safe-area-context";
import { View,Text, TouchableOpacity, StyleSheet } from "react-native";
import { THEME } from "../styles/constants";
import { Botao } from "../components/Buttons";

export default function HomeScreen() {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.logo}>Sucesso!</Text>
                <Text style={styles.subtutle}>Seu cartão de visita digital de dev mobile</Text>
                </View>
            
                <View style={styles.footerContainer}>
                    <Botao label="Criar outro Cartão"/>
                    <Botao label="Voltar ao inicio"/>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: "column",
        height : "100%",
        justifyContent: "center",
        paddingHorizontal: 24,
    },
    headerContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        height: 700,
    },
    logo: {
        color: THEME.colors.primary,
        fontWeight: "bold",
        fontSize: 56,
    },
    subtutle: {
        color: THEME.colors.subtitle,
        fontWeight: "400",
        fontSize: 16,
        width: 200,
        textAlign: "center",
    },
    footerContainer: {
        
    }
})