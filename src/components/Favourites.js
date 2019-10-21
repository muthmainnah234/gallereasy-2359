import React, {Component} from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';
import App from '../App';

class Favourites extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          {
            App.likedItems.map((item, idx) => {
              return(
                <Col md={3} key={idx}>
                  <img src={item.url} alt={item.title} className="img-result"></img>
                </Col>
              );
            })
          }
        </Row>
      </Container>   
    );
  }
}

export default Favourites;
