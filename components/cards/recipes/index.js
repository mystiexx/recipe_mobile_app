import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import { useRouter } from "expo-router";

const RecipesCard = ({ item }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/recipe/${item.id}`)}
    >
      <Image
        source={item.image}
        style={{ width: 150, height: 150, resizeMode: "center" }}
      />
      <Text>{item.name}</Text>
      <View style={styles.info}>
        <Text>{item.time}</Text>
        <Text> | </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginRight: 4 }}>{item.rating}</Text>
          <Ionicons name="star" size={16} color={COLORS.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipesCard;
