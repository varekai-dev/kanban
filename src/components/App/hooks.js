import { useState } from "react";
import { panel } from "./constants";

const useColumnsState = () => {
  const [columns, setColumns] = useState([]);
  const addColumn = (column) => setColumns([...columns, column]);
  const removeColumn = (removeId) =>
    setColumns(columns.filter(({ id }) => id !== removeId));

  return { columns, addColumn, removeColumn, setColumns };
};

const useDesksState = () => {
  const addDesk = (desk) => setDesks([...desks, desk]);
  const removeDesk = (removeId) =>
    setDesks(desks.filter(({ id }) => id !== removeId));
  const [desks, setDesks] = useState([]);

  return { desks, addDesk, removeDesk, setDesks };
};

const useNavState = (desks) => {
  const [activePanel, setActivePanel] = useState(panel.desks);
  const [activeDesk, setActiveDesk] = useState(null);
  const goToColumns = (deskId) => {
    setActiveDesk(desks.find(({ id }) => id === deskId));
    setActivePanel(panel.columns);
  };
  const goToDesks = () => setActivePanel(panel.desks);
  return { activePanel, activeDesk, goToColumns, goToDesks };
};

export const useAppState = () => {
  const desksState = useDesksState();
  const columnsState = useColumnsState();
  const navState = useNavState(desksState.desks);

  return {
    ...desksState,
    ...columnsState,
    ...navState,
  };
};
