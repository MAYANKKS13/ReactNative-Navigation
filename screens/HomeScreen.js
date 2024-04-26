import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function HomeScreen ({route}) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HOME SCREEN!!</Text>
            <Text style={styles.text}>{route.params?.homeData}</Text>
            <Button 
               title="Go to ABOUT" 
               onPress={() => navigation.navigate("About", {
                name: 'Mayank',
                age: 20
               })} 
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10
    }
});

export default HomeScreen;