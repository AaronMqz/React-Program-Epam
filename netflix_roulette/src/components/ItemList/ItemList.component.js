import React, { useState } from "react";
import PropTypes from "prop-types";
import { Item } from "./ItemList.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { ContextMenuComponent as ContextMenu } from "../ContextMenu/ContextMenu.component";
import { useMovieContextDispatch } from "../../utils/context/context";
import { getYear } from "../../utils/utils";

const ItemComponent = React.memo(({ item }) => {
  const { id, poster_path, title, tagline, release_date } = item;
  const [itemHover, setItemHover] = useState(false);
  const [contextMenu, setContextMenu] = useState(false);
  const { setMovieDetail } = useMovieContextDispatch();

  return (
    <Item.Container
      onMouseEnter={() => setItemHover(true)}
      onMouseLeave={() => setItemHover(false)}
    >
      <Item.Poster
        alt={title}
        src={poster_path}
        onClick={() => setMovieDetail(id)}
      />
      {itemHover && (
        <Item.Menu
          onMouseEnter={() => setContextMenu(true)}
          onMouseLeave={() => setContextMenu(false)}
        >
          {contextMenu ? (
            <ContextMenu />
          ) : (
            <FontAwesomeIcon icon={faEllipsisV} />
          )}
        </Item.Menu>
      )}

      <Item.Content>
        <Item.TitleContent>
          <Item.Title onClick={() => setMovieDetail(id)}>{title}</Item.Title>
          <Item.Year>{getYear(release_date)}</Item.Year>
        </Item.TitleContent>
        <Item.Tagline>{tagline}</Item.Tagline>
      </Item.Content>
    </Item.Container>
  );
});

export const ItemListComponent = React.memo(({ items }) => {
  return (
    <>
      <Item.ListContainer>
        {items.map((item) => {
          return <ItemComponent key={item.id} item={item} />;
        })}
      </Item.ListContainer>
    </>
  );
});

ItemComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

ItemListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
