import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";

const HomeScreen = () => {
  const [currentTIme, setTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [data, setData] = useState({
    Location: "",
    Temp: "",
    Wind: "",
    Humidity: "",
  });
  const [loading, setLoading] = useState(true);

  let getWeather = async () => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=-6.8160837&lon=39.2803583&appid=6b001fddfe49ffa138a990cb1a06fe96"
    );
    const json = await response.json();
    console.log(json);
    console.log(json.clouds.all);

    function kToc(ketl) {
      let celcius = ketl - 273.15;
      return celcius;
    }

    setData({
      Location: json.name,
      Temp: kToc(json.main.temp),
      Wind: json.wind.speed,
      Humidity: json.main.humidity,
    });
  };

  useEffect(() => {
    getWeather();
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var time = new Date().getHours();
    var monitus = new Date().getMinutes();
    var second = new Date().getSeconds();

    setTime(time + ":" + monitus + ":" + second);
    setCurrentDate(date + "/" + month + "/" + year);
  }, []);

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
            {data.Location}
          </Text>
        </View>
        {/* End of Location area Element here */}
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
              {Math.ceil(data.Temp)}
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
        {/* New Botton View Weather Informations Containers */}

        <View style={{ height: 50 }} />

        <View
          style={{
            paddingTop: 20,
            paddingLeft: 25,
            paddingRight: 25,
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Fontisto name="snowflake" size={30} color="white" />

            <Text style={{ left: 20, fontSize: 16, color: "white" }}>
              Windspeed
            </Text>
          </View>

          <View>
            <Text style={{ color: "white", top: 10 }}>
              {data.Wind + " km/h"}
            </Text>
          </View>
        </View>
        {/* New Bottom View Weather Incormation Containers */}

        {/* Next One */}
        <View
          style={{
            paddingTop: 20,
            paddingLeft: 25,
            paddingRight: 25,
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Fontisto name="calendar" size={24} color="white" />

            <Text style={{ left: 20, fontSize: 16, color: "white" }}>
              {currentDate}
            </Text>
          </View>

          <View>
            <Text style={{ color: "white", top: 10 }}>{currentTIme}</Text>
          </View>
        </View>

        {/* Next One */}

        <View
          style={{
            paddingTop: 20,
            paddingLeft: 25,
            paddingRight: 25,
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Fontisto name="cloudy" size={25} color="white" />

            <Text style={{ left: 20, fontSize: 16, color: "white" }}>
              Humidity
            </Text>
          </View>

          <View>
            <Text style={{ color: "white", top: 10 }}>83</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
