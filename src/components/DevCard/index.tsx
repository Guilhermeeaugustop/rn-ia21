import { Text, View } from "react-native";
import { styles } from "./styles";

export function DevCard() {
    return (
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

            <View style={[styles.cardBadgeContainer, { marginTop: 8 }]}>
                <Text style={styles.cardBadgeText}>
                    Especialista
                </Text>
            </View>

            <Text style={styles.cardSubtitle}>12 anos de experiencia</Text>
        </View>
    )
}
