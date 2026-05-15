import { SafeAreaView } from "react-native-safe-area-context";
import { View,Text, TouchableOpacity, StyleSheet } from "react-native";
import { THEME } from "../styles/constants";
import { Botao } from "../components/Buttons";
import { useRouter } from "expo-router";

export default function HomeScreen() {

    const router = useRouter()

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.logo}>DevCard</Text>
                <Text style={styles.subtutle}>Seu cartão de visita digital de dev mobile</Text>
                </View>
            
                <Botao label="Criar meu Cartão" onPress={() => router.push("/cadastro")}/>
                
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
    buttonContainer: {
        backgroundColor:THEME.colors.primary,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: THEME.border.radius.md,
    },
    buttonText: {
        color: THEME.colors.primary_foreground,
        fontWeight: "800",
        fontSize: 24,
    },
})