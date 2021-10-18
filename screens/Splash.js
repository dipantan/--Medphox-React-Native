import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';




export default function App({ navigation }) {

    const gotToLoader = () => {
        setTimeout(() => {
            navigation.replace('Loader');
        }, 5000);
    };

    gotToLoader();





    return (
        <View style={{ backgroundColor: '#63368a', flex: 1 }}>

            <View style={styles.container}>
                <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={require('./../images/logo.png')}
                />
            </View>

            <View style={{ alignSelf: 'center' }}>
                <Text style={styles.txt}>Medphox Online Pharmacy</Text>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '50%',
        marginBottom: '20%'
    },
    txt: {
        alignItems: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 50
    },
    image: {
        alignSelf: 'center',
        height: 200,
        width: 200,

        // justifyContent: 'center',
    }
    ,
    progress: {
        alignSelf: 'center',
        marginTop: '80%',
        marginBottom: 20,

    }

});
