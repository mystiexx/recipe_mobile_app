import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

const Steps = ({ item }) => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Steps:</Text>

    {item?.steps?.map((data, idx) => (
      <View style={styles.card} key={idx}>
        <Text style={styles.ingredient}>{`${idx+1}) ${data}`}</Text>
      </View>
    ))}
  </View>
  )
}

export default Steps

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