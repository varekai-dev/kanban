import db from "../models/firebase";

export const createDesk = (name) => {
  return db
    .collection("desks")
    .add({ name })
    .then((docRef) => docRef.get());
};

export const getDesks = () => {
  return db
    .collection("desks")
    .get()
    .then((querySnapshot) => {
      const desks = [];
      querySnapshot.forEach((doc) => {
        desks.push({
          id: doc.id,
          name: doc.data().name,
        });
      });
      return desks;
    });
};

export const deleteDesk = (id) => {
  return db.collection("desks").doc(id).delete();
};

export const getColumns = (deskId) => {
  return db
    .collection("columns")
    .where("deskId", "==", deskId)
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
      return columns;
    });
};

export const deleteColumn = (id) => {
  return db.collection("columns").doc(id).delete();
};

export const getCards = (columnId) => {
  return db
    .collection("cards")
    .where("columnId", "==", columnId)
    .get()
    .then((querySnapshot) => {
      const cards = [];
      querySnapshot.forEach((doc) => {
        const { columnId, name } = doc.data();

        cards.push({
          id: doc.id,
          columnId,
          name,
        });
        return cards;
      });
    });
};

export const deleteCard = (id) => {
  return db.collection("cards").doc(id).delete();
};

export const createCard = (name, columnId) => {
  return db
    .collection("cards")
    .add({ name, columnId })
    .then((docRef) => docRef.get());
};
