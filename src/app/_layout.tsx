import { Stack } from "expo-router";

export default function RootLayout(){
    return(
        <Stack initialRouteName="index" screenOptions={{headerShown: false}}>
            <Stack.Screen name="index"></Stack.Screen>
            <Stack.Screen name="cadastro"></Stack.Screen>
            <Stack.Screen name="preview"></Stack.Screen>
            <Stack.Screen name="sucesso"></Stack.Screen>
        </Stack>
    )
}