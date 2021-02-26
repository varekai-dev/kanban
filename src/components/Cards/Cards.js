import { CardGrid } from "@vkontakte/vkui";
import React, { useState, useEffect } from "react";
import ColumnCard from "../ColumnCard/ColumnCard";
import CardCreate from "../CardCreate/CardCreate";
import PropTypes from "prop-types";
import { getCards } from "../../actions";

function Cards({ columnId }) {
  const [cards, setCards] = useState([]);
  const addCard = (card) => setCards([...cards, card]);

  const removeCard = (id) => {
    const result = cards.filter((item) => item.id !== id);
    setCards(result);
  };
  useEffect(() => {
    getCards(columnId).then(setCards);
    // eslint-disable-next-line
  }, []);
  return (
    <CardGrid>
      {cards &&
        cards.map(({ id, name }) => (
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
