import { View, Text, FlatList, Image } from "react-native";
import styles from "./style";
import RecipesCard from "../../cards/recipes";

const Popular = ({ items }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>

      <View>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <RecipesCard item={item} />
          )}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Popular;
