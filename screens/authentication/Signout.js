import React from "react";
import { AuthButton, AuthButtonText } from "../../Styled/styled";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

function Signout() {
  const navigation = useNavigation();
  const handleSubmit = async () => {
    await authStore.signout();
    navigation.replace("Signin");
  };

  return (
    authStore.user && (
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign out</AuthButtonText>
      </AuthButton>
    )
  );
}

export default observer(Signout);
