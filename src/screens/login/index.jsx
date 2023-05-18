import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Login = ({navigation})=>{
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            {/* <TouchableOpacity onPress={()=>{}}>
                <Text>Ingresar</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('RecoveryPassword')}}>
                <Text style={styles.textButton}>Olvide mi contraseña</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Register')}}>
                <Text style={styles.textButton}>Registrarme</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;