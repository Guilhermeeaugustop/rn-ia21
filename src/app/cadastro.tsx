import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { THEME } from "../styles/constants";
import { Botao } from "../components/Buttons";
import { TextInput } from "react-native";
import { Input } from "../components/input";
import { KeyboardAvoidingView } from "react-native";
import { ButtonGroupColors } from "../components/ButtonGroupColors";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";


const CARD_COLORS = [
    {
        id: "c1",
        name: "azul",
        colorCode: "#4a80ff"
    },
    {
        id: "c2",
        name: "verde",
        colorCode: "#1cf32e"
    },
    {
        id: "c3",
        name: "roxo",
        colorCode: "#a700f5"
    }

]

export type Form = {
    fullName: string,
    role: string,
    company?: string,
    experience: number,
    cardColor: string,
    technology: string,
}

type Error = {
    fullName?: string,
    role?: string,
    company?: string,
    experience?: string,
    cardColor?: string,
    technology?: string,
}

export default function cadastroScreen() {

    const router = useRouter()

    const [form, setForm] = useState<{ data: Form, errors: Error }>({
        data: {
            fullName: "",
            role: "",
            company: "",
            experience: 0,
            cardColor: "",
            technology: "",
        },
        errors: {}
    })

    function handleSubmit() {
        router.push({
            pathname: '/preview',
            params: form.data
        })
    }

    function handleInputChange(fieldName: keyof Form, value: string|number) {
        if(!value) return
        setForm((currentForm) => {
            return {
                ...currentForm,
                data: {
                    ...currentForm.data,
                    [fieldName]: value
                }
            }
        })


        handleInputValidation(fieldName)

    }

    function handleSetOrRemoveInputError(fieldName: keyof Form, error: string | undefined) {

        setForm((currentForm) => {
            return {
                ...currentForm,
                errors: {
                    ...currentForm.errors,
                    [fieldName]: error
                }




            }
        })

        //handleInputValidation(name)
    }

    function handleInputValidation(field: keyof Form) {
        //fullName: ""
        const { fullName, role, cardColor, technology, experience, } = form.data

        switch (field) {
            case "fullName":
                if (fullName.length === 0) {
                    handleSetOrRemoveInputError("fullName", "Informe nome completo")
                }
                if (fullName.length < 3) {
                    handleSetOrRemoveInputError("fullName", "Informe pelo menos 3 caracteres")
                }
                if (fullName.length >= 3) {
                    handleSetOrRemoveInputError("fullName", undefined)
                }
                break

            case "role":
                if (role.length === 0 ) {
                    handleSetOrRemoveInputError("role", "Informe seu cargo")
                } else {
                    handleSetOrRemoveInputError("role", undefined)
                }
                break


            case "experience":
                if (experience < 1) {
                    handleSetOrRemoveInputError("experience", "Deve ter pelo menos 1 ano de experiencia")
                } else {
                    handleSetOrRemoveInputError("experience", undefined)
                }
                break
            case "cardColor":
               {/* if (cardColor.length === 0) {
                    handleSetOrRemoveInputError("cardColor", "Informe pelo menos uma cor")
                } else {
                    handleSetOrRemoveInputError("cardColor", undefined)
                }*/}
                break

            case "technology":
                if (technology.length === 0) {
                    handleSetOrRemoveInputError("technology", "Informe sua tecnologia favorita")
                } else {
                    handleSetOrRemoveInputError("technology", undefined)
                }
                break
        }
    }



    return (
        <SafeAreaView>
            <KeyboardAvoidingView>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>Cadastro</Text>

                        <Text style={styles.subtutle}>
                            Preeencha seus dados de dev
                        </Text>
                    </View>

                    <View style={{ height: 550 }}>
                        <View style={{ gap: 12, marginBottom: 12 }}>
                            <Input
                                onChange={() => handleInputValidation("fullName")}
                                onChangeText={(text) => handleInputChange('fullName', text)}
                                onBlur={() => {
                                    handleInputValidation("fullName")
                                }}
                                defaultValue={form.data.fullName}
                                label="Nome completo" placeholder="João andraede" errorMessage={form.errors["fullName"]}
                            />
                            <Input
                                onChange={() => handleInputValidation("role")}
                                defaultValue={form.data.role}
                                onChangeText={(text) => handleInputChange('role', text)} 
                                onBlur={() => {
                                    handleInputValidation("role")
                                }}
                                label="Cargo" placeholder="Eng. de Software" errorMessage={form.errors["role"]}
                            />
                            <Input
                                onChange={() => handleInputValidation("company")}
                                defaultValue={form.data.company}
                                onChangeText={(text) => handleInputChange('company', text)} 
                                onBlur={() => {
                                    handleInputValidation("company")
                                }}
                                label="Empresa(opcional)" placeholder="UNIVAG" errorMessage={form.errors["company"]}
                            />
                            <Input
                                onChange={() => handleInputValidation("experience")}
                                defaultValue={form.data.experience.toString()}
                                onChangeText={(text) => handleInputChange('experience', parseInt(text))}
                                onBlur={() => {
                                    handleInputValidation("experience")
                                }}
                                label="Anos de experiencia" placeholder="12" errorMessage={form.errors["experience"]}
                            />
                            <Input
                                onChange={() => handleInputValidation("technology")}
                                defaultValue={form.data.technology}
                                onChangeText={(text) => handleInputChange('technology', text)}
                                onBlur={() => {
                                    handleInputValidation("technology")
                                }}
                                label="Tecnologia favorita" placeholder="Java" errorMessage={form.errors["technology"]}
                            />

                        </View>

                        <ButtonGroupColors
                            onSelect={(colorCode) => handleInputChange('cardColor', colorCode)} group={CARD_COLORS}
                        />
                    </View>

                    <Text>Cor selecionada: {form.data.cardColor}</Text>

                    <View style={styles.footerContainer}>
                        <Botao onPress={handleSubmit}
                            label="Cadastrar cartão" 
                            disable={Object.entries(form.errors).filter(([KeyboardAvoidingView, value]) => !!value).length > 0}
                            />
                    </View>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
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
        gap: 4,
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
    subtutle: {
        color: THEME.colors.subtitle,
        fontWeight: "400",
        fontSize: 16,
        textAlign: "center",
    },
    footerContainer: {
        flexDirection: "column",
        gap: 12,
    },



})
