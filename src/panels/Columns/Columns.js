import React, { Fragment, useEffect, useContext } from "react";
import {
  Div,
  Gallery,
  PanelHeaderSimple,
  PanelHeaderBack,
} from "@vkontakte/vkui";
import "./Columns.css";
import Column from "../../components/Column/Column";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";
import { getColumns } from "../../actions";
import Context from "../../components/App/context";

function Columns() {
  const { goToDesks, setColumns, columns, activeDesk } = useContext(Context);
  useEffect(() => {
    getColumns(activeDesk.id).then(setColumns);

    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <PanelHeaderSimple left={<PanelHeaderBack onClick={goToDesks} />}>
        Desk {activeDesk.name}
      </PanelHeaderSimple>

      {columns.length ? (
        <Gallery className="Columns__list" slideWidth="90%" align="center">
          {columns.map(({ id, name }) => (
            <Column key={id} id={id}>
              {name}
            </Column>
          ))}
          <ColumnCreate />
        </Gallery>
      ) : (
        <ColumnCreate />
      )}

      <Div></Div>
    </Fragment>
  );
}

export default Columns;
