import { Text, View, StyleSheet, Button } from "react-native";

function DashboardScreen ({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard Screen</Text>
            <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
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
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default DashboardScreen;