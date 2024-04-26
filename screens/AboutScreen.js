import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function AboutScreen({navigation, route}) {
    const name = route.params.name;
    const age = route.params.age;

    useLayoutEffect(() => {
       navigation.setOptions({
         title: name,
       });
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>ABOUT {name} having age {age} years.</Text>
            <View style={styles.buttonContainer}>
                <Button 
                title="Update the parameters" 
                onPress={() => navigation.setParams({
                    name: 'Shubham',
                    age: 25
                })} 
                />
            </View>
            <View>
                <Button 
                title="Send Data to home" 
                onPress={() => navigation.navigate("Home", {
                    homeData: "Hello from ABOUT"
                })} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'normal',
        marginBottom: 5
    },
    buttonContainer: {
        margin: 10
    }
});

export default AboutScreen;