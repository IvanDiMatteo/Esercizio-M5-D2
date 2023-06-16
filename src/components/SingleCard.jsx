import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SingleCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>€{this.props.price}</Card.Text>
            <Button variant="primary">{this.props.btnTitle}</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleCard;
