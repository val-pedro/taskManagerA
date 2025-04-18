import { Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

export default function AddTask(props){
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
    }
})