import React, { useState } from "react";
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  AuthOther,
  Message,
} from "../../Styled/styled";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

function Signin({ navigation }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) {
      navigation.navigate("App");
    } else {
      setMessage("Wrong email or password");
    }
  };

  return (
    <AuthContainer>
      <AuthTitle>Signin</AuthTitle>
      <AuthTextInput
        placeholder="Email"
        onChangeText={(email) => setUser({ ...user, email })}
      />
      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <Message>{message}</Message>
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        Click here to Sign up!
      </AuthOther>
      <AuthOther onPress={() => navigation.navigate("ScanQrCode")}>
        Scan QR code for Child Sign in
      </AuthOther>
    </AuthContainer>
  );
}

export default observer(Signin);
