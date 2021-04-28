import React from "react";
import { Text } from "react-native";
import {
  ProgressCard,
  MainCard,
  MainView,
  RightPart,
  LeftPart,
  Income,
  Expenses,
  Salary,
  CardSection,
} from "../../Styled/styled";
import Donut from "./Donut";
import reactStore from "../../stores/reactStore";
import { observer } from "mobx-react";

function Card() {
  let income = reactStore.income;
  let expenses = reactStore.expenses;
  let salary = reactStore.salary;
  return (
    <MainView>
      <ProgressCard
        source={require("../../assets/progressImg.png")}
        imageStyle={{ borderRadius: 40 }}
      >
        <MainCard>
          <LeftPart>
            <CardSection>
              <Income>{income} KD</Income>
              <Text style={{ color: "#517501" }}>Extra Income</Text>
            </CardSection>
            <CardSection>
              <Expenses>{expenses} KD</Expenses>
              <Text style={{ color: "#fb0f5a" }}>Expenses</Text>
            </CardSection>
            <CardSection>
              <Salary>{salary} KD</Salary>
              <Text style={{ color: "white" }}>Salary</Text>
            </CardSection>
          </LeftPart>
          <RightPart>
            <Donut />
            <Text style={{ color: "tomato" }}>May </Text>
            <Text style={{ color: "tomato" }}>Days left : 17 </Text>
          </RightPart>
        </MainCard>
      </ProgressCard>
    </MainView>
  );
}

export default observer(Card);
