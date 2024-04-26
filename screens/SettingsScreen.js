import { Text, View, StyleSheet } from "react-native";

function SettingsScreen () {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings Screen</Text>
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

export default SettingsScreen;