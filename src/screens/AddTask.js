import { useState } from "react";
import { Modal, StyleSheet, TouchableWithoutFeedback, View, Text, TextInput, TouchableOpacity } from "react-native";
import commonStyles from "../commonStyles";

export default function AddTask(props){

    const [desc, setDesc] = useState("")

    return(
        <Modal transparent={true} 
            visible={props.isVisible} 
            onRequestClose={props.onCancel}
            animationType="slide">

            <TouchableWithoutFeedback 
                onPress={props.onCancel}>

                <View style={styles.background}></View>
            </TouchableWithoutFeedback>

            <View style={styles.container}>
                <Text style={styles.header}>Nova Tarefa</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Informe a Descrição"
                    onChangeText={setDesc}
                    value={desc} />
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={props.onCancel}>
                        <Text style={styles.button}>Cancelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={props.save}>
                        <Text style={styles.button}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableWithoutFeedback 
                onPress={props.onCancel}>
                    
                <View style={styles.background}></View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    header: {
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 18
    },
    input: {
        height: 40,
        margin: 15,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: commonStyles.colors.today
    }
})