import * as React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
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
        {/* The Locaiton are Name here */}
        <View
          style={{
            width: "100%",
            padding: 10,
            height: "auto",
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

        {/* End of Locaiton area Element here */}

        {/* The Main View Wather Information Container */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: "auto",
              width: "auto",
            }}
          >
            <Text
              style={{
                fontSize: 85,
                fontWeight: "800",
                color: "white",
              }}
            >
              29
            </Text>
          </View>

          {/* Another View */}
          <View
            style={{
              height: 10,
              width: 10,
              top: -35,
              left: -18,
            }}
          >
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../../assets/snow.png")}
            />
          </View>

          {/* Cen Icon */}

          <Text style={{ fontSize: 20, color: "white", top: 25 }}>°C</Text>
        </View>

        <Text style={{ color: "white", padding: 6 }}>
          Feels like <Text style={{ color: "orange" }}>149</Text>{" "}
        </Text>
        <Text style={{ color: "white" }}>Cloud</Text>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;
