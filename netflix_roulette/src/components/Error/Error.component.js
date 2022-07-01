import React from "react";
import { Error } from "./Error.styled";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Error.Container>
            <Error.Text>Ups... Something went wrong.</Error.Text>
            <Error.ErrorImage />
          </Error.Container>
        </>
      );
    }
    return this.props.children;
  }
}
