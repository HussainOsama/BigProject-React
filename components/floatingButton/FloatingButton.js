import React, { useState } from "react";
import { FloatingAction } from "react-native-floating-action";
import { Text, TextInput, View } from "react-native";
import { Alert, Modal, StyleSheet, Pressable } from "react-native";
import { RadioButton } from "react-native-paper";
import { observer } from "mobx-react";
import reactstore from "../../stores/reactStore";

function FloatingButton() {
  const actions = [
    {
      text: "Transaction",
      icon: require("../../assets/add.png"),
      name: "print",
      position: 2,
      color: "#517501",
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState("");
  const [checked, setChecked] = React.useState("Income");
  const [Category, setCategory] = React.useState("");

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        presentationStyle="overFullScreen"
        transparent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text style={styles.modalText}>Hello World!</Text> */}
            <TextInput
              placeholder="Value"
              onChangeText={(value) => setValue(value)}
            />
            <TextInput
              placeholder="Category"
              onChangeText={(Category) => setCategory(Category)}
            />
            <View>
              <Text>Income</Text>

              <RadioButton
                value="Income"
                color="green"
                status={checked === "Income" ? "checked" : "unchecked"}
                onPress={() => setChecked("Income")}
              />
              <Text>Expense</Text>
              <RadioButton
                value="expense"
                color="red"
                status={checked === "expense" ? "checked" : "unchecked"}
                onPress={() => setChecked("expense")}
              />
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                // console.log(checked);
                // console.log(Category);
                // console.log(value);
                console.log("befor " + reactstore.Other);
                if (checked == "Income") {
                  reactstore.addIncome(parseInt(value));
                } else if (checked == "expense") {
                  reactstore.addExpenses(parseInt(value));
                  reactstore.catExpense(Category, parseInt(value));
                  console.log("After " + reactstore.Other);
                }
                // console.log(value);
                // console.log(reactstore.Other);

                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <FloatingAction
        actions={actions}
        color={"#87E4FF"}
        onPressItem={() => setModalVisible(true)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default observer(FloatingButton);
