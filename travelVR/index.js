import React from "react";
import { AppRegistry, StyleSheet, Text, View, VrButton } from "react-360";

export default class travelVR extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <VrButton
            onClick={() => console.log("Hello1")}
            style={styles.greeting}
          >
            <Text></Text>
          </VrButton>
        </View>
        <View style={styles.greetingBox}>
          <VrButton
            onClick={() => console.log("Hello1")}
            style={styles.greeting}
          >
            <Text></Text>
          </VrButton>
        </View>
        <View style={(styles.greetingBox, styles.pr)}>
          <VrButton
            onClick={() => console.log("Hello2")}
            style={styles.greeting}
          >
            <Text></Text>
          </VrButton>
        </View>
        <View style={(styles.greetingBox, styles.prdos)}>
          <VrButton
            onClick={() => console.log("Hello2")}
            style={styles.greeting}
          >
            <Text></Text>
          </VrButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 800,
    //backgroundColor: "rgba(255, 255, 255, 0.4)",
    backgroundColor: "black",
  },
  greetingBox: {
    padding: 40,
    backgroundColor: "red",
    borderColor: "#639dda",
    borderWidth: 2,
  },
  pr: {
    position: "absolute",
    left: 0,
    backgroundColor: "black",
    padding: 40,
  },
  prdos: {
    position: "absolute",
    left: 50,
    backgroundColor: "blue",
    padding: 40,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent("travelVR", () => travelVR);
