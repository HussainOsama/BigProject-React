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

function Card() {
  return (
    <MainView>
      <ProgressCard
        source={require("../../assets/progressImg.png")}
        imageStyle={{ borderRadius: 40 }}
      >
        <MainCard>
          <LeftPart>
            <CardSection>
              <Income>000000</Income>
              <Text style={{ color: "#517501" }}>Income</Text>
            </CardSection>
            <CardSection>
              <Expenses>00000000</Expenses>
              <Text style={{ color: "#fb0f5a" }}>Expenses</Text>
            </CardSection>
            <CardSection>
              <Salary>00000</Salary>
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

export default Card;
