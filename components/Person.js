import React from 'react';
import { Card, CardItem, View, Text, Thumbnail } from 'native-base';
import { Button } from 'react-native';


function echo(Name) {
    console.log(name)
}

const Person = (props) => {
    const { name, phone, city, firstname = 'touch' } = props;

    return(
        <View>
            {
            city === 'McKenziehaven' ? (
            <Card>
            <CardItem header bordered>
                <View style={{flexDirection: 'column'}}>
                    <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv69fRIyvs2AEG6gpLkkzOdWJ7ddzg9GAlP8gjTjGrWlVYsl2p' }} />
                    <Text>{`Name: ${name}`}</Text>
                    <Text>{`phone: ${phone}`}</Text>
                    <Text>{`city: ${city}`}</Text>
                    <Text>{`firstname: ${firstname}`}</Text>
                    <Button title='dwdwdw' onPress={() => echo('name')} />
                </View>
            </CardItem>
        </Card>
        )
    : <Text>dsdsd</Text>}
        </View>
    );
}

export default Person;