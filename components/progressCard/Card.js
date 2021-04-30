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

//date dependency
import { differenceInCalendarDays, addMonths, endOfToday } from "date-fns";

//**** Live date calculation ****//
const salaryDate = new Date(2021, 3, 1, 3, 0); //user salary date

const dateToday = endOfToday(); //date for the end of the day
const increment = addMonths(salaryDate, 1); //user salary date + increment every time it resets

var daysLeft = differenceInCalendarDays(increment, dateToday); //calculation of days between today and next salary cycle

var month = dateToday.getMonth(); //get current month

//indentify month as name
switch (month) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December";
    break;
}

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
            <Text style={{ color: "tomato" }}> {month} </Text>
            <Text style={{ color: "tomato" }}>Days left : {daysLeft} </Text>
          </RightPart>
        </MainCard>
      </ProgressCard>
    </MainView>
  );
}

export default observer(Card);
