import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

const Ingredients = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingredients:</Text>

            {item?.ingredients?.map((data, idx) => (
                <View style={styles.card} key={idx}>
                    <View style={styles.circle}></View>
                    <Text style={styles.ingredient}>{data}</Text>
                </View>
            ))}
        </View>
    );
};

export default Ingredients;

const styles = StyleSheet.create({
    container: {
        alignSelf: "flex-start",
        marginVertical: 22,
    },

    title: {
        fontSize: 22,
        fontWeight: "600",
        marginBottom: 6,
    },

    card: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 4,
    },

    circle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: "red",
    },

    ingredient: {
        fontSize: 18,
        marginLeft: 6,
    },
});
