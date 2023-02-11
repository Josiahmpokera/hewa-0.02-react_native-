import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Button,
  ProgressBarAndroid,
  ActivityIndicator,
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";
import App from "../../App";

function SearchScreen() {
  const [data, setData] = useState({
    Location: "",
    Temp: "",
    Wind: "",
    Humidity: "",
    Weather: "",
  });
  const [isLoading, setLoading] = useState(true);
  const [text, setText] = useState();
  const navigation = useNavigation();

  let fetchInfo = async () => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        text +
        "&appid=6b001fddfe49ffa138a990cb1a06fe96"
    );
    const json = await response.json();
    console.log(json);
    setLoading(false);

    function kToc(ketl) {
      let celcius = ketl - 273.15;
      return celcius;
    }

    setData({
      Location: json.name,
      Temp: kToc(json.main.temp),
      Weather: json.weather[0].main,
    });

    useEffect(() => {});
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
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 3,
            padding: 8,
            width: "90%",
            height: "auto",
          }}
        >
          <TextInput
            style={{ color: "white" }}
            onChangeText={(nextText) => setText(nextText)}
            defaultValue={text}
            placeholder="Enter City name to Search"
            color="white"
          />
        </View>

        {/* Button to Search The Result */}

        <View
          style={{
            borderRadius: 3,
            width: "90%",
            top: 15,
            height: "auto",
          }}
        >
          <Button
            onPress={() => {
              fetchInfo();
            }}
            style={{ borderRadius: 8 }}
            color={"orange"}
            title="Search"
          />

          {/* Make the Space to fill Result */}

          <View style={{ marginTop: 34 }} />

          {isLoading ? (
            <ActivityIndicator color={"orange"} size={40} />
          ) : (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 75, fontWeight: "800", color: "white" }}>
                {Math.ceil(data.Temp)}
              </Text>
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 50, color: "white" }}>°</Text>
              </View>
            </View>
          )}

          {/* Data here */}

          <Text style={{ textAlign: "center", fontSize: 25, color: "orange" }}>
            {data.Weather}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 13, color: "white" }}>
            {data.Location}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default SearchScreen;
