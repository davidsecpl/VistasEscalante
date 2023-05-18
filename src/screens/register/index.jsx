import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Register = ({navigation})=>{
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Registro de nuevo usuario</Text>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Login')}}>
                <Text style={styles.textButton}>Aceptar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Register;