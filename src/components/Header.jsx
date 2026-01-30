import { StyleSheet, Text, View } from "react-native";
import {ionicons} from '@expo/vector-icons' 
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
export default function Header () {
    return(
        <View style={styles.header}>
            <AntDesign style={styles.plus} name="plus"/>
        <View style={styles.subHeader}>
            <Entypo style={styles.lock} name="lock"/>
            <Text style={styles.title}>marcm_cb</Text>
                <Entypo style={styles.triangleDown} name="triangle-down"/>
            </View>
                <Feather style={styles.atSign} name="at-sign" />
                <Entypo style={styles.menu} name="menu"/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5,
        width: '100%',
        height: 'auto',
        border: '5px solid #fff',
        flexWrap: 'wrap'
    },
    subHeader: {
        flex:1,
        justifyContent:'center',
        flexDirection: 'row',
        marginLeft:30,
        gap: 10
    },
    title: {
        fontSize: 20,
        color: '#fff',
        marginTop: 5

    },
    lock: {
        fontSize: 18,
        marginTop: 9,
        color: '#fff'
    },
    plus: {
        fontSize: 18,
        marginTop: 8,
        marginLeft: 5,
        color: '#fff'
    },
    atSign: {
        fontSize: 18,
        marginTop: 8,
        color: '#fff'
    },
    menu: {
        fontSize: 25,
        marginTop: 5,
        marginRight: 5,
        color: '#fff'
    },
    triangleDown: {
        fontSize: 15,
        marginTop: 12,
        color: '#fff',
        marginTop: 10
    }


    
})