import { CardGrid } from "@vkontakte/vkui";
import React, { useEffect, useContext } from "react";
import ColumnCard from "../ColumnCard/ColumnCard";
import CardCreate from "../CardCreate/CardCreate";
import PropTypes from "prop-types";
import { getCards } from "../../actions";
import Context from "../App/context";

function Cards({ columnId }) {
  const { cards, setCards } = useContext(Context);
  useEffect(() => {
    getCards(columnId).then(setCards);
    // eslint-disable-next-line
  }, []);
  return (
    <CardGrid>
      {cards &&
        cards.map(({ id, name }) => (
          <ColumnCard id={id} key={id}>
            {name}
          </ColumnCard>
        ))}
      <CardCreate columnId={columnId} />
    </CardGrid>
  );
}

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
};
export default Cards;
