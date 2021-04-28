import React from "react";
import { Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { observer } from "mobx-react";
import { reactStore } from "../stores/reactStore";

//Hard data for testing
const data = [
  {
    name: "Rent Collection",
    population: 70,
    color: "green",
    legendFontColor: "white",
    legendFontSize: 15,
  },
  {
    name: "Freelance",
    population: 30,
    color: "teal",
    legendFontColor: "white",
    legendFontSize: 15,
  },
];

//**** Defining responsive screen size ****//
// const screenWidth = Dimensions.get("window").width;

//**** Code ****//
const Chart = () => {
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
