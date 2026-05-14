import { SafeAreaView } from "react-native-safe-area-context";
import { View,Text, TouchableOpacity, StyleSheet } from "react-native";
import { THEME } from "../styles/constants";
import { Botao } from "../components/Buttons";

export default function previewScreen() {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Seu cartão</Text>
                
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.cardAvatarContainer}>
                    <View style={styles.cardAvatarSubContainer}>
                        <Text style={styles.cardAvatarLetter}>G</Text>
                    </View>
                    </View>

                    <View style={styles.cardTextGroup}>
                        <View style={styles.cardTextGroup}>
                        <Text style={styles.cardTitle}>Guilherme Augusto</Text>
                        </View>
                        <Text style={styles.cardText}>Arquiteto de Software</Text>
                        <Text style={styles.cardSubtitle}>MwT</Text>
                    </View>

                    <View style={styles.cardSeparator}></View>

                    <View style={styles.cardTextGroup}>
                        <Text style={styles.cardSubtitle}>Especialista em</Text>
                    <Text style={styles.cardRole}>Backend</Text>
                    </View>

                    <View style={[styles.cardBadgeContainer, {marginTop: 8}]}>
                        <Text style={styles.cardBadgeText}>
                            Especialista
                        </Text>
                    </View>

                    <Text style={styles.cardSubtitle}>12 anos de experiencia</Text>
                </View>
            
                <View style={styles.footerContainer}>
                    <Botao  label="Editar" variant="outline"/>
                    <Botao label="Finalizar"/>
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
    cardContainer:{
        backgroundColor: "#4a80ff",
        borderRadius: THEME.border.radius.xlg,
        padding: 32,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
    },
    cardAvatarContainer:{
        backgroundColor: "#98b4f7",
        padding: 4,
        borderRadius: "100%"
    },
    cardAvatarSubContainer:{
        backgroundColor: "#ffff",
        borderRadius: "100%",
        height: 80,
        width: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    cardAvatarLetter:{
        color: "#4a80ff",
        fontSize: 32,
        fontWeight: "bold",
    },
    cardTitle:{
        fontSize: 32,
        fontWeight: "bold",
        color: "#ffff"
    },
    cardText:{
        fontSize: 12,
        color: "#f1f1f1"
    },
    cardSubtitle:{
        fontSize: 16,
        color: "#cfc9c9"
    },
    cardSeparator:{
        backgroundColor: "#ffffff56",
        height: 1,
        width: 250,
        marginVertical: 8
    },
    cardRole:{
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffff"
    },
    cardBadgeContainer:{
        backgroundColor: "#ece93c",
        paddingVertical : 8,
        paddingHorizontal: 12,
        borderRadius: THEME.border.radius.xxlg
    },
    cardBadgeText:{
        color: "#4e4e2a",
        fontWeight: "bold",
        letterSpacing: 1,
    },
    cardTextGroup: {
        justifyContent: "center", alignItems: "center",
        gap: 4 
    }

})