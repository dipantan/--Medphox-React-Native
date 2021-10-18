import React, { useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const App = ({ navigation }) => {
    const [showRealApp, setShowRealApp] = useState(false);


    const onDone = () => {
        // setShowRealApp(true);
        navigation.navigate('Login');
    };


    const RenderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Text style={{ backgroundColor: 'transparent', color: 'white' }}>Next</Text>
            </View>
        );
    };

    const RenderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Text style={{ backgroundColor: 'transparent', color: 'white' }}>Done</Text>
            </View>
        );
    };

    const RenderItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingBottom: 100,
                }}>
                <Text style={styles.introTitleStyle}>
                    {item.title}
                </Text>
                <Image
                    style={styles.introImageStyle}
                    source={item.image} />
                <Text style={styles.introTextStyle}>
                    {item.text}
                </Text>
            </View>
        );
    };

    return (
        <>
            {showRealApp ? (



                <SafeAreaView style={styles.container}>
                    <View style={styles.container}>
                        <Text style={styles.titleStyle}>
                            React Native App Intro Slider using AppIntroSlider
                        </Text>
                        <Text style={styles.paragraphStyle}>
                            This will be your screen when you click Skip
                            from any slide or Done button at last
                        </Text>
                        <Button
                            title="Show Intro Slider again"
                            onPress={() => setShowRealApp(false)}
                        />
                    </View>
                </SafeAreaView>



            ) : (
                <AppIntroSlider
                    data={slides}
                    renderItem={RenderItem}
                    onDone={onDone}
                    renderDoneButton={RenderDoneButton}
                    renderNextButton={RenderNextButton}
                />
            )}
        </>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    titleStyle: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    paragraphStyle: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
    },
    introImageStyle: {
        width: 300,
        height: 300,
    },
    introTextStyle: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 20,
    },
    introTitleStyle: {
        fontSize: 28,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
    },
    buttonCircle: {
        width: 70,
        height: 45,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const slides = [
    {
        key: 's1',
        text: 'Doctor online Consultation & Appointment with top doctors',
        title: 'Top Doctors',
        image: require('./../assets/4.png'),
        backgroundColor: '#20d2bb',
    },
    {
        key: 's2',
        title: 'Lab test',
        text: 'Get upto 50% off on lab test',
        image: require('./../assets/2.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 's3',
        title: 'Buy Medicine',
        text: 'Enjoy Great offers on our all services',
        image: require('./../assets/3.png'),
        backgroundColor: '#f6437b',
    },
    {
        key: 's4',
        title: 'Hospitals Bed',
        text: ' Book Hospital Bed Online',
        image: require('./../assets/1.png'),
        backgroundColor: '#3395ff',
    },

];