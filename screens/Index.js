import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native'


export default function Index() {

    const [response, setResponse] = useState(null);

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((data) => data.json())
        .then((data) => {
            setResponse(data);
        })
        .catch((err) => {
            console.log(err);
        })
    // console.log(response);


    return (
        <View style={{ flex: 1,alignItems: 'center',flexDirection: 'column',backgroundColor: 'red'}}>
            <Text style={{alignSelf: 'center'}}>fgfds</Text>
            {/* <FlatList
                data={response}
                keyExtractor={(item) => item.id}
                renderItem={(item) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )}

            /> */}
        </View>
    )
}
