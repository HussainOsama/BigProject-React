import React, { Component, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

function Modals() {
  const [ModalVisible, isModalVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {/* <TouchableOpacity onPress={isModalVisible(!ModalVisible)}> */}
      <Text>Show Modal</Text>
      {/* </TouchableOpacity> */}
      {/* <Modal isVisible={ModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
          <TouchableOpacity onPress={isModalVisible(!ModalVisible)}>
            <Text>Hide me!</Text>
          </TouchableOpacity>
        </View>
      </Modal> */}
    </View>
  );
}

export default Modals;
