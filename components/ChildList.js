import React, { useEffect } from "react";
import ChildItem from "./ChildItem";
import childStore from "../stores/childStore";
import { observer } from "mobx-react";
import { Spinner, Content, List } from "native-base";

const ChildList = () => {
  useEffect(() => {
    // console.log("We are here");
    // childStore.fetchChilds();
  }, []);
  const childlist = childStore.childs.map((child) => (
    <ChildItem child={child} key={child.id} />
  ));
  if (childStore.loading) return <Spinner />;
  return (
    <Content>
      <List>{childlist}</List>
    </Content>
  );
};

export default observer(ChildList);
