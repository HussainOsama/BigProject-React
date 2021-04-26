
//import styled from "styled-components/native";
// import progressImg from "../assets/progressImg.png";

import styled from "styled-components";


export const AppView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: black;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: black;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: black;
  border-bottom-color: black;
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: black;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthOther = styled.Text`
  color: black;
  margin-top: 15px;
`;

export const Message = styled.Text`
  color: red;
  margin-top: 15px;
`;

//------------ Progress Card -----------------
export const MainView = styled.View`
  flex: 1;
  align-items: center;
  border-radius: 40px;
`;
export const ProgressCard = styled.ImageBackground`
  width: 376px;
  height: 250px;
  background-color: red;
  margin-top: 125px;
  border-radius: 40px;
`;

export const MainCard = styled.View`
  display: flex;
  width: 376px;
  height: 250px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const LeftPart = styled.View`
  width: 188px;
  height: 210px;
  align-items: center;
  justify-content: space-around;
`;
export const RightPart = styled.View`
  width: 188px;
  height: 210px;
  align-items: center;
  justify-content: space-around;
`;

export const Income = styled.Text`
  border: 2px solid #517501;
  color: #517501;
  text-align: center;
  width: 100px;
  padding: 6px;
  border-radius: 10px;
`;

export const Expenses = styled.Text`
  border: 2px solid #fb0f5a;
  color: #fb0f5a;
  text-align: center;
  width: 100px;
  padding: 6px;
  border-radius: 10px;
`;

export const Salary = styled.Text`
  border: 2px solid white;
  color: white;
  text-align: center;
  width: 100px;
  padding: 6px;
  border-radius: 10px;
`;

export const DateSection = styled.Text`
  border: 2px solid white;
  color: white;
  text-align: center;
  width: 100px;
  padding: 6px;
  border-radius: 10px;
`;

export const CardSection = styled.View`
  display: flex;
  align-items: center;
`;
//------------ Progress Card -----------------


export const InfoBoxWrapper = styled.View`
  border-bottom-color: #dddddd;
  border-bottom-width: 1;
  border-top-color: #dddddd;
  border-top-width: 1;
  flex-direction: row;
  height: 100;
`;

export const ChildinfoBox = styled.View`
  width: 50%;
  align-items: center;
  justify-content: center;
  border-right-color: #dddddd;
  border-right-width: 1;
  border-left-color: #dddddd;
  border-left-width: 1;
`;

export const ChildNameCaption = styled.Text`
  font-size: 14;
  line-height: 14;
  font-weight: 500;
  margin-top: 10;
`;
