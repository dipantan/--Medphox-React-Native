import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginNumber() {

    const [number, onChangeNumber] = useState('');
    return (
        <View style={styles.container}>
            {/* <Text>dsfsfs</Text> */}
            <View style={styles.oval}>
                <View style={{ backgroundColor: '#e6e6fa', width: '30%', height: '60%', position: 'absolute', borderBottomRightRadius: 50 }}>


                </View>

                <Text style={{ marginTop: 50, fontSize: 21, marginStart: 30 }}>Enter your mobile number</Text>
                <View style={styles.inputContainer}>
                    <Text style={{ margin: 15 }}>+91</Text>
                    <View style={styles.verticleLine}></View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Phone Number (10 digits)"
                        keyboardType="numeric"
                        maxLength={10}
                    // onFocus={onFocus}
                    />
                </View>

                <Text style={{ color: 'grey', alignSelf: 'flex-start', marginStart: 30, marginTop: '40%', marginBottom: '1%' }}>By continuing, you agree to our</Text>
                <TouchableOpacity style={{}}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, textDecorationLine: 'underline', alignSelf: 'flex-start', marginStart: 30, marginBottom: '20%' }}>Terms & conditions</Text>
                </TouchableOpacity>


            </View>

            <View style={{ margin: 50, backgroundColor: 'red' }}>
                <TouchableOpacity style={{ backgroundColor: '#63368a', alignItems: 'flex-end', justifyContent: 'center', height: 50, borderRadius: 10 }}>
                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 24 }}>Login</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    oval: {
        // height: 100,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: 'white', 
        
    },
    input: {

        height: 50,
        padding: 10,

    },
    inputContainer: {
        flexDirection: 'row',
        margin: 30,
        marginBottom: 0,
        backgroundColor: 'white',
        borderRadius: 15,
        borderStyle: 'solid',
        borderWidth: 1
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