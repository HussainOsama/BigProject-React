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

function Signup({ navigation }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    salaryDate: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    await authStore.signup(user);
    if (authStore.user) {
      navigation.replace("App");
    } else {
      setMessage("Please choose another email");
    }
  };

  return (
    <AuthContainer>
      <AuthTitle>SignUp</AuthTitle>
      <AuthTextInput
        placeholder="Name"
        onChangeText={(name) => setUser({ ...user, name })}
      />
      <AuthTextInput
        placeholder="Salary"
        onChangeText={(salary) => setUser({ ...user, salary })}
      />
      <AuthTextInput
        placeholder="Salary Date"
        onChangeText={(salaryDate) => setUser({ ...user, salaryDate })}
      />
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
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.goBack()}>
        Click here to Log in!
      </AuthOther>
    </AuthContainer>
  );
}

export default Signup;
