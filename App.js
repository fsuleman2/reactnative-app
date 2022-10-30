import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        {/* inline style */}
        <Text
          style={{
            margin: 50,
            borderWidth: 1,
            borderColor: "red",
            padding: 16,
          }}
        >
          Hello inline styling
        </Text>
      </View>
      <Text style={styles.dummyStyle}>I am object type styling</Text>
      <Button title="Submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textShadowColor: "red",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyStyle: {
    margin: 50,
    borderWidth: 5,
    borderColor: "blue",
    padding: 16,
  },
});
