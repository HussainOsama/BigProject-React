import React from "react";
import { Caption } from "react-native-paper";
import { Text } from "react-native";
import { ListItem } from "native-base";

const ChildItem = ({ child }) => {
  // console.log(child);
  return (
    <ListItem
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text style={{ marginRight: 10 }}>{child.name}</Text>
      <Caption style={{ paddingRight: 50, paddingLeft: 50 }}>Allowance</Caption>
      <Text style={{ marginLeft: 10 }}>KD {child.allowance}</Text>
    </ListItem>
  );
};

export default ChildItem;
