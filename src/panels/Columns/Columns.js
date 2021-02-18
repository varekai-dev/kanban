import React, { Fragment, useEffect } from "react";
import {
  Div,
  Gallery,
  PanelHeaderSimple,
  PanelHeaderBack,
} from "@vkontakte/vkui";
import "./Columns.css";
import Column from "../../components/Column/Column";
import db from "../../models/firebase";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";
import PropTypes from "prop-types";

function Columns({
  goBack,
  setColumns,
  columns,
  removeColumn,
  addColumn,
  desk,
}) {
  useEffect(() => {
    if (!desk) {
      return;
    }
    db.collection("columns")
      .where("deskId", "==", desk.id)
      .get()
      .then((querySnapshot) => {
        const columns = [];
        querySnapshot.forEach((doc) => {
          const { deskId, name } = doc.data();

          columns.push({
            id: doc.id,
            deskId,
            name,
          });
        });
        setColumns(columns);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <PanelHeaderSimple left={<PanelHeaderBack onClick={goBack} />}>
        Desk {desk.name}
      </PanelHeaderSimple>

      {columns.length ? (
        <Gallery className="Columns__list" slideWidth="90%" align="center">
          {columns.map(({ id, name }) => (
            <Column key={id} id={id} onDelete={removeColumn}>
              {name}
            </Column>
          ))}
          <ColumnCreate deskId={desk.id} onCreate={addColumn} />
        </Gallery>
      ) : (
        <ColumnCreate deskId={desk.id} onCreate={addColumn} />
      )}

      <Div></Div>
    </Fragment>
  );
}
Columns.propTypes = {
  goBack: PropTypes.func.isRequired,
  setColumns: PropTypes.func.isRequired,
  columns: PropTypes.func.isRequired,
  removeColumn: PropTypes.func.isRequired,
  addColumn: PropTypes.func.isRequired,
  desk: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default Columns;
