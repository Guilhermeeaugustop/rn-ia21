import { StyleSheet } from "react-native";
import { THEME } from "../../styles/constants";

export const styles = StyleSheet.create({
    
    formGroup:{
        flexDirection: "column",
        gap: 4,
        
    },
    formLabel: {
        color: "#6e6565ff",
        fontWeight: "bold",

    },
    formInput: {
        borderRadius: THEME.border.radius.md,
        borderWidth: 1,
        borderColor: "#686868",
        paddingHorizontal: 12,
        paddingVertical: 8,
        height: 50,
        backgroundColor: THEME.colors.primary_foreground,
    },
    formError: {
        color: "rgb(238, 47, 47)",
        fontWeight: "bold",
    },

})