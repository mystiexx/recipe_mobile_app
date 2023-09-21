import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./style";
import { categories } from "../../../constants";
import { useState } from "react";

const Category = () => {
  const [selected, setSelected] = useState(categories[0].category);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <View>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card(selected, item)}
              onPress={() => setSelected(item.category)}
            >
              <Text style={styles.card_text(selected, item)}>
                {item.category}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item?.id}
          horizontal
          contentContainerStyle={{ columnGap: 20 }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Category;
