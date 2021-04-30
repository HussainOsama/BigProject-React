import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Block, theme } from "galio-framework";
import FloatingButton from "../components/floatingButton/FloatingButton";
import Cards from "../components/progressCard/Card";
import Expense from "../components/Expense";
import Income from "../components/Income";
import { observer } from "mobx-react";
import { ImageBackground } from "react-native";
const { width } = Dimensions.get("screen");
import { ExpenseTitle, IncomeTitle } from "../Styled/styled";

function Home() {
  return (
    <Block flex style={styles.home}>
      <ImageBackground
        style={{ flex: 1, width: "100%", height: "100%" }}
        source={require("../assets/imgs/bg.png")}
      >
        <Cards />
        <ExpenseTitle>Expenses</ExpenseTitle>
        <Expense />
        <IncomeTitle>Extra Income</IncomeTitle>
        <Income />

        <FloatingButton />
      </ImageBackground>
    </Block>
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
