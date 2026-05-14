import { SafeAreaView } from "react-native-safe-area-context";
import { View,Text, TouchableOpacity, StyleSheet } from "react-native";
import { THEME } from "../styles/constants";
import { Botao } from "../components/Buttons";

export default function sucessoScreen() {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Cartão criado com sucesso!</Text>
                <Text style={styles.subtutle}>Seu cartão de visita digital esta pronto, compartilhe com a galera!</Text>
                </View>
            
                <View style={styles.footerContainer}>
                    <Botao  label="Criar outro Cartão" variant="primary"/>
                    <Botao label="Voltar ao inicio" variant="secondary"/>
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
        height: 600,
        gap: 12,
    },
    logo: {
        color: THEME.colors.primary,
        fontWeight: "bold",
        fontSize: 56,
    },
    title: {
        color: "#6e6565ff",
        fontWeight: "bold",
        fontSize: 32,
        width: 200,
        textAlign: "center",
    },
    subtutle: {
        color: THEME.colors.subtitle,
        fontWeight: "400",
        fontSize: 16,
        width: 200,
        textAlign: "center",
    },
    footerContainer: {
        flexDirection: "column",
        gap: 12,
    }
})