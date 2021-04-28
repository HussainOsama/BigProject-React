import React from "react";
import { Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { observer } from "mobx-react";

//Hard data for testing
import reactStore from "../stores/reactStore";

//**** Defining responsive screen size ****//
// const screenWidth = Dimensions.get("window").width;

//**** Code ****//
const Chart = () => {
  const data = [
    {
      name: "Gym",
      population: reactStore.Gym,
      color: "green",
      legendFontColor: "white",
      legendFontSize: 15,
    },
    {
      name: "Supermarket",
      population: reactStore.Supermarket,
      color: "teal",
      legendFontColor: "white",
      legendFontSize: 15,
    },
    {
      name: "Telephone",
      population: reactStore.Telephone,
      color: "red",
      legendFontColor: "white",
      legendFontSize: 15,
    },
    {
      name: "Restaurants",
      population: reactStore.Resturaurants,
      color: "yellow",
      legendFontColor: "white",
      legendFontSize: 15,
    },
    {
      name: "Other",
      population: reactStore.Other,
      color: "grey",
      legendFontColor: "white",
      legendFontSize: 15,
    },
  ];

  return (
    <>
      <PieChart
        data={data}
        width={400}
        height={200}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 3,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
        // center={[10, 50]}
        // absolute /*<---- Uncomment this to get numbers instead of %*/
      />
    </>
  );
};

export default observer(Chart);
