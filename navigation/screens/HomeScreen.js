import * as React from "react";
import { View, Text, ImageBackground } from "react-native";
import Ionicons from "react-native-vector-icons/Entypo";

function HomeScreen(navigation) {
  let getWeather = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=-6.8160837&lon=39.2803583&appid=acece3914bff7be493968d98f6a4420e"
    )
      .then((res) => {
        console.log(res.status);
        console.log(res.json);
        return res.json();
      })
      .then(
        ((result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        })
      );
  };

  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      source={require("../../assets/logo.png")}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Ionicons name="location-pin" size={34} color="orange" />

          <Text
            onPress={getWeather}
            style={{
              marginLeft: 6,
              fontSize: 18,
              fontWeight: "400",
              color: "white",
            }}
          >
            Dar es salaam
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;
