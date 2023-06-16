import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import books from "./Books/scifi.json";
import SingleCard from "./SingleCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class LatestRelease extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col className="d-flex flex-wrap gap-3">
            {books.map((book) => {
              return (
                <SingleCard
                  key={book.asin}
                  img={book.img}
                  title={book.title}
                  price={book.price}
                  btnTitle="Vai al prodotto"
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;
