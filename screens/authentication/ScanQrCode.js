import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as Permissions from "expo-permissions";
import { Text, View } from "react-native";

function ScanQrCode() {
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
    <View>
      {cameraPermission ? (
        <BarCodeScanner
          onBarCodeScanned={() => {
            setCount(count + 1);
            console.log(count);
          }}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      ) : null}
    </View>
  );
}

export default ScanQrCode;
