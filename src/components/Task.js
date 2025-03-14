import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import moment from 'moment-timezone'
import 'moment/locale/pt-br'

import commonStyles from '../commonStyles'

export default props => {

    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formattedDate = moment(date).tz('America/Sao_Paulo').locale('pt-br').format('ddd, D [de] MMMM')

    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => console.log('oi')}>
                <View style={styles.checkContainer}>
                    <View style={styles.pending}></View>
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={styles.desc}>{props.desc}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#FFF' 
    },
    checkContainer: {
        width: '20%',
        alignContent: 'center',
        alignItems: 'center'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },
    desc: {
        color: commonStyles.colors.mainText,
        fontSize: 15
    },
    date: {
        color: '#555',
        fontSize: 12
    }
})
