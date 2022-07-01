import React, { useState } from "react";
import PropTypes from "prop-types";
import { Item } from "./ItemList.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const ItemComponent = ({
  item: { poster_path, title, tagline, release_date },
}) => {
  const [itemHover, setItemHover] = useState(false);

  const getYear = (release_date) => {
    try {
      return new Date(release_date).getFullYear();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Item.Container
      onMouseEnter={() => setItemHover(true)}
      onMouseLeave={() => setItemHover(false)}
    >
      <Item.Poster alt={title} src={poster_path} />
      <Item.Menu hover={itemHover}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </Item.Menu>
      <Item.Content>
        <Item.TitleContent>
          <Item.Title>{title}</Item.Title>
          <Item.Year>{getYear(release_date)}</Item.Year>
        </Item.TitleContent>
        <Item.Tagline>{tagline}</Item.Tagline>
      </Item.Content>
    </Item.Container>
  );
};

export const ItemListComponent = ({ items }) => {
  return (
    <>
      <Item.ListContainer>
        {items.map((item) => {
          //console.log(item);
          return <ItemComponent key={item.id} item={item} />;
        })}
      </Item.ListContainer>
    </>
  );
};

ItemListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
