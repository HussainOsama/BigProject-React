import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  View,
  CameraRoll,
} from "react-native";
import { Block, theme } from "galio-framework";
import FloatingButton from "../components/floatingButton/FloatingButton";
import Cards from "../components/progressCard/Card";
import Expense from "../components/Expense";
import Income from "../components/Income";
import { Card } from "../components";
import articles from "../constants/articles";
import reactstore from "../stores/reactStore";
import { observer } from "mobx-react";
import { ImageBackground } from "react-native";
const { width } = Dimensions.get("screen");
import bg from "../assets/imgs/bg.png";
import { ExpenseTitle, IncomeTitle } from "../Styled/styled";
import QRCode from "react-native-qrcode-svg";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as Permissions from "expo-permissions";
import ScanQrCode from "./authentication/ScanQrCode";
function Home() {
  const [cameraPermission, setCameraPermission] = useState(false);
  const [count, setCount] = useState(0);

  requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setCameraPermission(status === "granted");
  };
  useEffect(() => {
    requestCameraPermission();
  }, []);
  return (
    <ImageBackground
      style={{ flex: 1, width: "100%", height: "100%" }}
      source={require("../assets/imgs/bg.png")}
    >
      <QRCode value="http://google.com" />

      <Block flex style={styles.home}>
        <Cards />
        <ExpenseTitle>Expenses</ExpenseTitle>
        <Expense />
        <IncomeTitle>Extra Income</IncomeTitle>
        <Income />

        <FloatingButton />
      </Block>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default observer(Home);

//-----------------
// import React from "react";
// import { StyleSheet, Dimensions, ScrollView } from "react-native";
// import { Block, theme } from "galio-framework";

// import { Card } from "../components";
// import articles from "../constants/articles";
// const { width } = Dimensions.get("screen");

// class Home extends React.Component {
//   renderArticles = () => {
//     return (
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.articles}
//       >
//         <Block flex>
//           <Card item={articles[0]} horizontal />
//           <Block flex row>
//             <Card
//               item={articles[1]}
//               style={{ marginRight: theme.SIZES.BASE }}
//             />
//             <Card item={articles[2]} />
//           </Block>
//           <Card item={articles[3]} horizontal />
//           <Card item={articles[4]} full />
//         </Block>
//       </ScrollView>
//     );
//   };

//   render() {
//     return (
//       <Block flex center style={styles.home}>
//         {this.renderArticles()}
//       </Block>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   home: {
//     width: width,
//   },
//   articles: {
//     width: width - theme.SIZES.BASE * 2,
//     paddingVertical: theme.SIZES.BASE,
//   },
// });

// export default Home;
//--------------------
