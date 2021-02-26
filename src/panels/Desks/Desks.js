import { PanelHeaderSimple } from "@vkontakte/vkui";
import React, { Fragment } from "react";
import DeskList from "../../components/DeskList/DeskList";
import DeskCreate from "../../components/DeskCreate/DeskCreate";

function Desks() {
  return (
    <Fragment>
      <PanelHeaderSimple>My desks</PanelHeaderSimple>
      <DeskCreate />
      <DeskList />
    </Fragment>
  );
}

export default Desks;
