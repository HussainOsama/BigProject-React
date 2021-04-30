import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";

import { Block, Text } from "galio-framework";
import QRCode from "react-native-qrcode-svg";
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { set } from "mobx";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

function Register() {
  const [name, setName] = useState("");
  const [allowance, setAllowance] = useState(0);
  const [goal, setGoal] = useState(0);
  const [url, setUrl] = useState("");
  const [display, setDisplay] = useState(false);

  let QR;
  if (!display) {
    QR = <></>;
  } else if (display) {
    QR = (
      <Block middle style={styles.QRCode}>
        <QRCode size={250} value={url} style={{ display: "none" }} />
      </Block>
    );
  }

  return (
    <Block flex middle>
      <StatusBar hidden />
      <ImageBackground
        source={Images.RegisterBackground}
        style={{ width, height, zIndex: 1 }}
      >
        <Block safe flex middle>
          <Block style={styles.registerContainer}>
            <Block flex>
              <Block bold flex={0.17} middle>
                <Text color="#8898AA" size={20}>
                  Enter Child Details
                </Text>
              </Block>
              <Block flex center>
                <KeyboardAvoidingView
                  style={{ flex: 1 }}
                  behavior="padding"
                  enabled
                >
                  <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                    <Input
                      borderless
                      placeholder="Name"
                      iconContent={
                        <MaterialCommunityIcons
                          size={16}
                          color={argonTheme.COLORS.ICON}
                          name="human-male-child"
                          family="MaterialCommunityIcons"
                          style={styles.inputIcons}
                        />
                      }
                      onChangeText={(n) => setName(n)}
                    />
                  </Block>
                  <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                    <Input
                      borderless
                      placeholder="Allowance"
                      iconContent={
                        <MaterialIcons
                          size={16}
                          color={argonTheme.COLORS.ICON}
                          name="attach-money"
                          family="MaterialIcons"
                          style={styles.inputIcons}
                        />
                      }
                      onChangeText={(a) => setAllowance(a)}
                    />
                  </Block>
                  <Block width={width * 0.8}>
                    <Input
                      borderless
                      placeholder="Goal"
                      iconContent={
                        <Icon
                          size={16}
                          color={argonTheme.COLORS.ICON}
                          name="padlock-unlocked"
                          family="ArgonExtra"
                          style={styles.inputIcons}
                        />
                      }
                      onChangeText={(g) => setGoal(g)}
                    />
                  </Block>
                  <Block middle>
                    <Button
                      color="primary"
                      style={styles.createButton}
                      onPress={() => {
                        setUrl(
                          `/child?name=${name}&allowance=${allowance}$goal=${goal}`
                        );
                        setDisplay(true);
                        console.log(url);
                      }}
                    >
                      <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        CREATE ACCOUNT
                      </Text>
                    </Button>
                  </Block>

                  {QR}
                </KeyboardAvoidingView>
              </Block>
            </Block>
          </Block>
        </Block>
      </ImageBackground>
    </Block>
  );
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.875,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden",
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA",
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14,
  },
  inputIcons: {
    marginRight: 12,
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
  },
  QRCode: {
    marginTop: 60,
  },
});

export default Register;
