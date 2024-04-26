import { View, Text, StyleSheet } from "react-native";

function CourseList() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Course List Screen</Text>
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
        fontSize: 20,
        fontWeight: 'normal'
    }
});

export default CourseList;