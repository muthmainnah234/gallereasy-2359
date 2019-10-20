import React, {Component} from 'react';
import {
  Container, Row, Col,
  Input
} from 'reactstrap';

class Favourites extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Input placeholder="Start searching for images!"></Input>
          </Col>
        </Row>  
      </Container>   
    );
  }
}

export default Favourites;
