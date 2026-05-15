import { SafeAreaView } from "react-native-safe-area-context";
import { View,Text, TouchableOpacity, StyleSheet } from "react-native";
import { THEME } from "../styles/constants";
import { Botao } from "../components/Buttons";
import { DevCard } from "../components/DevCard";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Form } from "./cadastro";

export default function previewScreen() {

    const router = useRouter()

    const params = useLocalSearchParams() as unknown as Form

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Seu cartão</Text>
                
                </View>

                {!!params && <DevCard data={params}/>}
            
                <View style={styles.footerContainer}>
                    <Botao  label="Editar" variant="outline" onPress={() => router.push("/cadastro")}/>
                    <Botao label="Finalizar"
                    onPress={() => router.push("/sucesso")}/>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: 24,
        gap: 12,
    },
    headerContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "flex-start",
        gap: 16,
    },
    logo: {
        color: THEME.colors.primary,
        fontWeight: "bold",
        fontSize: 56,
    },
    title: {
        color: "#6e6565ff",
        fontWeight: "bold",
        fontSize: 28,
        textAlign: "center",
    },
    footerContainer: {
        flexDirection: "column",
        gap: 12,
    },

})