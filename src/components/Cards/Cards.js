import { CardGrid } from "@vkontakte/vkui";
import React, { useState, useEffect } from "react";
import ColumnCard from "../ColumnCard/ColumnCard";
import db from "../../models/firebase";
import CardCreate from "../CardCreate/CardCreate";
import PropTypes from "prop-types";

function Cards({ columnId }) {
  const [cards, setCards] = useState([]);
  const addCard = (card) => setCards([...cards, card]);

  const removeCard = (id) => {
    const result = cards.filter((item) => item.id !== id);
    setCards(result);
  };
  useEffect(() => {
    db.collection("cards")
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
        });
        setCards(cards);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <CardGrid>
      {cards.map(({ id, name }) => (
        <ColumnCard id={id} key={id} onDelete={removeCard}>
          {name}
        </ColumnCard>
      ))}
      <CardCreate onCreate={addCard} columnId={columnId} />
    </CardGrid>
  );
}

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
};
export default Cards;
