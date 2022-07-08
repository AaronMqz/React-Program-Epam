import React from "react";
import PropTypes from "prop-types";
import { Form } from "./Form.styled";
import { TitleComponent as Title } from "../Title/Title.component";
import { LabelComponent as Label } from "../Label/Label.component";
import { InputComponent as Input } from "../Input/Input.component";
import { TextAreaComponent as TextArea } from "../TextArea/TextArea.component";
import { ButtonComponent as Button } from "../Button/Button.component";
import { ButtonType } from "../../utils/constants";

const Add = () => {
  return <FormWrapper title={"ADD MOVIE"} />;
};

const Edit = () => {
  return <FormWrapper title={"EDIT MOVIE"} />;
};

const FormWrapper = (props) => {
  const { title } = props;
  return (
    <Form.Content>
      <Title>{title}</Title>
      <Form.Row>
        <Form.RowItem>
          <Label>TITLE</Label>
          <Input.Text placeholder={"Title"} />
        </Form.RowItem>
        <Form.RowItem>
          <Label>RELEASE DATE</Label>
          <Input.Date placeholder={"Release Date"} />
        </Form.RowItem>
      </Form.Row>
      <Form.Row>
        <Form.RowItem>
          <Label>MOVIE URL</Label>
          <Input.Text placeholder={"https://"} />
        </Form.RowItem>
        <Form.RowItem>
          <Label>RATING</Label>
          <Input.Text placeholder={"Rating"} />
        </Form.RowItem>
      </Form.Row>
      <Form.Row>
        <Form.RowItem>
          <Label>GENRE</Label>
          <Input.Text placeholder={"Select Genre"} />
        </Form.RowItem>
        <Form.RowItem>
          <Label>RUNTIME</Label>
          <Input.Text placeholder={"Minutes"} />
        </Form.RowItem>
      </Form.Row>
      <Form.Row>
        <Form.RowItem>
          <Label>OVERVIEW</Label>
          <TextArea placeholder={"Movie Description"} />
        </Form.RowItem>
      </Form.Row>
      <Form.Footer>
        <Button
          type={ButtonType.Secondary}
          text={"RESET"}
          onClick={() => console.log("reset function")}
        />
        <Button
          type={ButtonType.Normal}
          text={"SUBMIT"}
          onClick={() => console.log("submit function")}
        />
      </Form.Footer>
    </Form.Content>
  );
};

FormWrapper.propTypes = {
  title: PropTypes.string.isRequired,
};

export const FormComponent = {
  Add,
  Edit,
};
