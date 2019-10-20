import React, {Component} from 'react';
import {
  Container, Row, Col,
  Input
} from 'reactstrap';
import { throwStatement } from '@babel/types';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: ''
    }
  }

  handleFormSubmit = (e) => {
    this.setState({searchKey: e.target.value});
  }

  handleKeyPress = (e) => {
    if(e.keyCode == 13){
      console.log('value', e.target.value);
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Input className="search-form" placeholder="Start searching for images!" bsSize="lg" name="search" value={this.state.searchKey} onChange={this.handleFormChange} onKeyDown={this.handleKeyPress}></Input>
          </Col>
        </Row>  
      </Container>   
    );
  }
}

export default Search;
