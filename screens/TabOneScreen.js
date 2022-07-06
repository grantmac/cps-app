import { StyleSheet, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { startCharge } from "../redux/chargeSlice";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  const app = useSelector((state) => state.app);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Text</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Pressable
        onPress={() => {
          dispatch(
            startCharge({
              chargerId: 50566,
              connector: 1,
              token: app.token,
              username: app.username,
            })
          );
        }}
      >
        <Text>I'm pressable!</Text>
      </Pressable>

      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
