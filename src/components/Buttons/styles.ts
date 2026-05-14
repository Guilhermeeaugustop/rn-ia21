import { StyleSheet } from "react-native";
import { THEME } from "../../styles/constants";

 const stylesPrimary = StyleSheet.create({
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
        fontWeight: "400",
        fontSize: 24,
    },
})

const stylesSecondary = StyleSheet.create({
    buttonContainer: {
        ...stylesPrimary.buttonContainer,
        backgroundColor: "transparent",
    },
    buttonText: {
        ...stylesPrimary.buttonText,
        color: THEME.colors.primary,
    },
})

const stylesOutline = StyleSheet.create({
    buttonContainer: {
        ...stylesPrimary.buttonContainer,
        backgroundColor: "transparent",
        borderColor: THEME.colors.primary,
        borderWidth: 2
    },
    buttonText: {
        ...stylesPrimary.buttonText,
        color: THEME.colors.primary,
    },
})

export const styles = {
    primary: stylesPrimary,
    secondary: stylesSecondary,
    outline: stylesOutline,
}as const