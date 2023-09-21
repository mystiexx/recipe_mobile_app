import { View, SafeAreaView } from "react-native";
import { COLORS, recipeList } from "../../constants";
import { Stack } from "expo-router";
import Header from "../../components/header";
import SearchFilter from "../../components/search";
import Category from "../../components/recipes/category";
import Popular from "../../components/recipes/popular";
import { useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState(recipeList)

  const handleChange = (text) => {
    const term = text?.toLowerCase();
    const result = recipeList.filter((data) => (
      data.name.toLowerCase().includes(term)
    ))
    setRecipes(result)
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => <Header headerText={"Hi, John"} />,
          headerRight: () => <Header headerIcon={"notifications-outline"} />,
        }}
      />
      <View style={{ marginVertical: 16, marginHorizontal: 16 }}>
        <SearchFilter handleChange={handleChange} />
        <Category />
        <Popular items={recipes} />
      </View>
    </SafeAreaView>
  );
};

export default Recipes;
