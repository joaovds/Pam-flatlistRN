import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import Home from "./src/screens/Home";

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Home />
      <StatusBar style="light" backgroundColor="#121116" translucent />
    </View>
  );
};

export default App;
