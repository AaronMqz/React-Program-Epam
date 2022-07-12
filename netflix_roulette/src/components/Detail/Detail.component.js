import React from "react";
import PropTypes from "prop-types";
import { Detail } from "./Detail.styled";
import { LogoComponent as Logo } from "../Logo/Logo.component";
import { ButtonComponent as Button } from "../Button/Button.component";
import { ButtonType } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const DetailComponent = React.memo(({ item, handleClick }) => {
  const {
    poster_path,
    title,
    vote_average,
    genres,
    release_date,
    runtime,
    overview,
  } = item;

  return (
    <>
      <Detail.Container>
        <Detail.Top>
          <Logo />
          <Button
            type={ButtonType.Icon}
            onClick={() => handleClick(0)}
            icon={<FontAwesomeIcon icon={faMagnifyingGlass} rotation={90} />}
          />
        </Detail.Top>
        <Detail.Content>
          <Detail.Poster src={poster_path} />
          <Detail.Description>
            <Detail.Group>
              <Detail.Title>{title}</Detail.Title>
              <Detail.Rating>{vote_average}</Detail.Rating>
            </Detail.Group>
            <Detail.SubTilte>
              {genres.toString().replace(",", " & ")}
            </Detail.SubTilte>
            <Detail.Group>
              <Detail.DateAndTime>{release_date}</Detail.DateAndTime>
              <Detail.DateAndTime>{runtime}</Detail.DateAndTime>
            </Detail.Group>
            <Detail.Overview>{overview}</Detail.Overview>
          </Detail.Description>
        </Detail.Content>
      </Detail.Container>
    </>
  );
});

DetailComponent.propTypes = {
  item: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
