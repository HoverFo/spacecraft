import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import Constants from "expo-constants";

// or any pure javascript modules available in npm
import { useNavigation } from "@react-navigation/native";
import { Card } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";

import { Routes } from "../navigation/Routes";

export const LoginScreen = () => {
  const navigation = useNavigation<any>();

  const [text, setText] = React.useState("");
  const [textpass, setTextpass] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const navigateToTerms = () => {
    navigation.navigate(Routes.TERMS_SCREEN);
  };

  const navigateToStarships = () => {
    navigation.navigate(Routes.STARSHIP_FEED_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.paragraph}>SpaceCraft</Text>
      </Card>
      <TextInput
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        label="Password"
        value={textpass}
        onChangeText={(text) => setTextpass(text)}
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon
            onPress={() => setShowPassword(!showPassword)}
            icon={showPassword ? "eye-off" : "eye"}
          />
        }
      />

      <Button mode="contained" onPress={navigateToStarships}>
        Login
      </Button>

      <Text style={styles.text} onPress={navigateToTerms}>Read Terms and conditions</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    color: "white",
    justifyContent: "center",
    margin: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "black",
    justifyContent: "center",
    margin: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "purple",
  },
});
