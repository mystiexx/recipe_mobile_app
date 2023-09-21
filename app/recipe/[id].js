import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import styles from "./style";
import { Stack, useSearchParams } from "expo-router";
import RecipeHeader from "../../components/recipe/header";
import { recipeList } from "../../constants";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import ExtraDetails from "../../components/recipe/extra";
import Ingredients from "../../components/recipe/ingredients";
import Steps from "../../components/recipe/steps";

const RecipeList = () => {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const params = useSearchParams();
  const [recipe, setRecipe] = useState({});

  const toggle = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    const result = recipeList.filter((data) => data.id === params.id);
    setRecipe(result[0]);
  }, [params]);

  return (
    <View style={styles.container(recipe?.color)}>
      <SafeAreaView>
        <Stack.Screen
          options={{
            headerTitle: "",
            headerBackVisible: false,
            headerShadowVisible: false,
            headerStyle: { backgroundColor: recipe?.color },
            headerLeft: () => (
              <RecipeHeader
                iconLeft={"arrow-back-circle-outline"}
                link={() => router.push("/recipes")}
              />
            ),
            headerRight: () => (
              <RecipeHeader
                iconRight={"heart"}
                isLiked={liked}
                onLike={toggle}
              />
            ),
          }}
        />
      </SafeAreaView>
      <View style={styles.card}>
        <View style={styles.image_box}>
          <Image
            source={recipe?.image}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
        <Text style={styles.name}>{recipe?.name}</Text>
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.description}>{recipe?.description}</Text>

            <ExtraDetails item={recipe} />
            <Ingredients item={recipe} />
            <Steps item={recipe} />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RecipeList;
