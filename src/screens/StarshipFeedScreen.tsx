import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  Image,
  View,
} from "react-native";
import { Card } from "react-native-paper";
import { Code } from "react-content-loader";
import { default as datajson } from "../../api/data.json";
import { fetchData, useStarships } from "../hooks/useStarships";
import { useImage } from "../hooks/useImages";

const dataArray = datajson.results.map((item) => ({
  name: item.name,
  model: item.model,
  crew: item.crew,
  hyperdrive_rating: item.hyperdrive_rating,
  cost_in_credits: item.cost_in_credits,
  url: item.url,
}));

type ItemProps = {
  name: string;
  model: string;
  crew: string;
  hyperdrive_rating: string;
  cost_in_credits: string;
};
//const source = useImage(name);
const Item = ({
  name,
  model,
  crew,
  hyperdrive_rating,
  cost_in_credits,
}: ItemProps) => {
  const source = useImage(name);
  console.log("🚀 ~ file: StarshipFeedScreen.tsx:42 ~ source", source)

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Image style={styles.img} source={source} />
        <Text style={styles.container}>Name: {name}</Text>
        <Text style={styles.container}>Model: {model}</Text>
        <Text style={styles.container}>Crew: {crew}</Text>
        <Text style={styles.container}>
          Hyperdrive Rating: {hyperdrive_rating}
        </Text>
        <Text style={styles.container}>Cost in Credits: {cost_in_credits}</Text>
        <Text style={styles.container}></Text>
      </Card>
    </View>
  );
};

export const StarshipFeedScreen = () => {
  const { isInitialLoading, isError, data } = useStarships();

  if (isInitialLoading) {
    return (
      <Card style={styles.cardquerry}>
        <Text> Loading ...</Text>
      </Card>
    );
  }

  if (isError) {
    return (
      <Card style={styles.cardquerryred}>
        <Text> Erreur</Text>
      </Card>
    );
  }

  if (datajson.results === undefined) {
    return (
      <Card style={styles.cardquerryorange}>
        <Text>Nous n'avons pas trouver la liste</Text>
      </Card>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataArray}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            model={item.model}
            crew={item.crew}
            hyperdrive_rating={item.hyperdrive_rating}
            cost_in_credits={item.cost_in_credits}
          />
        )}
        keyExtractor={(item) => item.url}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  card: {
    paddingHorizontal: 20,
    marginTop: 20,
    paddingTop: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  cardquerry: {
    margin: 125,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    paddingHorizontal: 20,
    marginTop: 300,
    backgroundColor: "green",
  },
  cardquerryred: {
    margin: 125,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    paddingHorizontal: 20,
    marginTop: 300,
    backgroundColor: "red",
  },
  img: {
    maxWidth: "100%",
    maxHeight: 200,
    resizeMode: "center",
    borderRadius: 100,
    borderWidth: 1,
  },
  cardquerryorange: {
    margin: 125,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    paddingHorizontal: 20,
    marginTop: 300,
    backgroundColor: "red",
  },
});
