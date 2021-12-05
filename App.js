import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View>
        <TextInput
          placeholder="Course Goal"
          style={{ borderBottomColor: "black", borderBottomWidth: 1 }}
        />
        <Button title="Add" />
      </View>

      <View>
        <Text>This is a test</Text>
      </View>
    </View>
  );
};
