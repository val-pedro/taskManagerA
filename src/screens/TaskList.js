import { useEffect, useState } from "react"
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, FlatList } from "react-native"

import Icon from "react-native-vector-icons/FontAwesome"

import moment from "moment-timezone"
import 'moment/locale/pt-br'

import todayImage from '../../assets/imgs/today.jpg'
import Task from "../components/Task"
import AddTask from "./AddTask"

const taskDB = [
    {
        id: Math.random(),
        desc: 'Elaborar o MER do TCC',
        estimateAt: new Date(),
        doneAt: new Date()
    },
    {
        id: Math.random(),
        desc: 'Ajustar o FIGMA',
        estimateAt: new Date(),
        doneAt: new Date()
    },
    {
        id: Math.random(),
        desc: 'Desenvolver o Backend do sistema',
        estimateAt: new Date(),
        doneAt: null
    }
]

export default function TaskList() {

    const [tasks, setTasks] = useState([...taskDB])
    const [showDoneTasks, setShowDoneTasks] = useState(true)
    const [visibleTasks, setVisibleTasks] = useState([...tasks])
    const [showAddTask, setShowAddTask] = useState(true)
    
    const userTimeZone = moment.tz.guess(); // Detecta o fuso horario do dispositivo
    const today = moment().tz('America/Sao_Paulo').locale('pt-br').format('ddd, D [de] MMMM')

    useEffect(() => {
        filterTasks()
    }, [showDoneTasks])

    const toggleTask = taskId => {
        const taskList = [...tasks]
        taskList.forEach(task => {
            if (task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date()
            }
        });

        setTasks(taskList)
        filterTasks()
    }

    const toggleFilter = () => {
        setShowDoneTasks(!showDoneTasks)
    }

    const filterTasks = () => {
        let visibleTasks = null

        if(showDoneTasks){
            visibleTasks = [...tasks]

        } else {
            const pending = task => task.doneAt === null
            visibleTasks = tasks.filter(pending)
        }

        setVisibleTasks(visibleTasks)
    }

    return (
        <View style={styles.container}>

            <AddTask isVisible={showAddTask} 
                onCancel={() => setShowAddTask(false)}/>

            <ImageBackground source={todayImage} style={styles.background}>
                <View style={styles.iconBar}>
                    <TouchableOpacity onPress={toggleFilter}>
                        <Icon name={showDoneTasks ? 'eye' : 'eye-slash'} size={20} color={'#fff'} />
                    </TouchableOpacity>
                </View>

                <View style={styles.titleBar}>
                    <Text style={styles.title}>Hoje</Text>
                    <Text style={styles.subtitle}>{today}</Text>
                </View>
            </ImageBackground>

            <View style={styles.taskList}>
                <FlatList
                    data={visibleTasks}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Task {...item} onToggleTask={toggleTask} />}
                />
            </View>

            <TouchableOpacity
                style={styles.addButton}
                activeOpacity={0.7}
                onPress={() => setShowAddTask(true)}
            >
                <Icon name="plus" size={20} color={'#fff'} />

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        color: 'white',
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        color: 'white',
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
        marginTop: 25
    },
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#B13B44',
        justifyContent: 'center',
        alignItems: 'center'
    }
})