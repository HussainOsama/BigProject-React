import React from "react";
import { AuthButton, AuthButtonText } from "../../Styled/styled";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

function Signout({ navigation }) {
  const handleSubmit = async () => {
    await authStore.signout();
    navigation.replace("Signout");
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
