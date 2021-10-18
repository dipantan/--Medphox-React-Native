import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Input, { getCountries, getCountryCallingCode } from 'react-phone-number-input/input'
import countryNames from 'react-phone-number-input/locale/en.json'
// Import
// import TextInput from "react-native-input-validator";

// import DropDownPicker from 'react-native-dropdown-picker';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function Login({ navigation }) {

    const [number, onChangeNumber] = React.useState('');
    const [error, setError] = React.useState(false);

    const onFocus = () => {
        navigation.navigate('LoginNumber');
        // setError(true);
        // console.log('onFocus');
    }

    const onPress = () => {
        navigation.navigate('LoginNumber');

    }


    // console.log(error);

    return (
        <View style={{ flex: 1 }}>

            <View style={style.oval}>
                <Image style={style.image} resizeMode={'contain'} source={require('./../assets/LOGOMEDPHO.png')} />
                <Text style={style.text}>------ MEDPHOX</Text>
                <Text style={style.text1}>Medphox Online Pharmacy</Text>
                <Text style={style.text3}>Lorem ipsum dummy text</Text>
            </View>

            <View style={{ marginTop: 20, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center' }}>Let's get started! Enter your mobile number</Text>
            </View>

            <View style={error ? style.inputContainerError : style.inputContainer}>
                <Text style={{ margin: 15 }}>+91</Text>
                <View style={style.verticleLine}></View>
                <TextInput
                    style={style.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Phone Number (10 digits)"
                    keyboardType="numeric"
                    maxLength={10}
                    onFocus={onFocus}
                />
            </View>

            <View style={{ margin: 50, backgroundColor: 'red' }}>
                <TouchableOpacity style={{ backgroundColor: '#63368a', alignItems: 'flex-end', justifyContent: 'center', height: 50, borderRadius: 10 }} onPress={onPress}>
                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 24 }}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const style = StyleSheet.create({
    image: {
        // height: 200,
        width: 200,
        marginStart: 20,
        marginTop: 45

    },
    text: {
        // marginTop: 20,
        fontSize: 20,
        marginStart: 20,
    },
    text1: {
        marginTop: 20,
        fontSize: 35,
        marginStart: 20,
    },
    text3: {
        marginTop: 20,
        marginBottom: 50,
        fontSize: 20,
        marginStart: 20,
    },
    oval: {
        // height: 100,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: 'white'
    },
    input: {

        height: 50,
        padding: 10,

    },
    inputContainer: {
        flexDirection: 'row',
        margin: 30,
        backgroundColor: 'white',
        borderRadius: 15,
    },
    inputContainerError: {
        flexDirection: 'row',
        margin: 30,
        backgroundColor: 'white',
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 1,
    },
    verticleLine: {
        // height: '100%',
        width: .5,
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: '#909090',
    }
})