import { PanelHeaderSimple } from "@vkontakte/vkui";
import React, { Fragment, useState } from "react";
import DeskList from "../../components/DeskList/DeskList";
import DeskCreate from "../../components/DeskCreate/DeskCreate";

function Desks() {
  const [hasError, setError] = useState(false);
  const onClick = () => {
    setError(true);
  };
  if (hasError) {
    throw Error("err");
  }
  return (
    <Fragment>
      <PanelHeaderSimple>My desks</PanelHeaderSimple>
      <DeskCreate />
      <DeskList />
      <button onClick={onClick}>click</button>
    </Fragment>
  );
}

export default Desks;
