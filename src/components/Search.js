import React, {Component} from 'react';
import {
  Container, Row, Col,
  Input
} from 'reactstrap';
import { stringify } from 'querystring';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: '',
      results: [],
      limit: 8,
      offset: 0,
      isLoading: false,
    }
  }

  handleFormChange = (e) => {
    this.setState({searchKey: e.target.value});
  }

  handleKeyPress = (e) => {
    if(e.keyCode == 13){
      this.setState({isLoading: true});

      let params = {
        api_key: 'a8xS4NZ33JTx6h0kQ4wYtg6zrcJWNGrY',
        q: this.state.searchKey,
        limit: 8,
        offset: 0
      }

      fetch('http://api.giphy.com/v1/gifs/search?'+stringify(params),{method:'GET'})
      .then(response => response.json())
      .then(result => {
        console.log(result);
        let data = result.data.map(item => {
          return({
            url: item.images.fixed_width ? item.images.fixed_width.url : '',
            title: item.title ? item.title : 'untitled',
            liked: false,
            hovered: false
          });
        })
        this.setState({
          results: data, 
          isLoading:false
        });
      })
      .catch((err) => {
        console.log(err)
      });
    }
  }

  handleToggleLike = (idx) => {
    let newResults = this.state.results;

    newResults[idx].liked = !newResults[idx].liked;

    this.setState({results:newResults});
  }

  handleHoverResult = (idx) => {
    let newResults = this.state.results;

    newResults[idx].hovered = !newResults[idx].hovered;

    this.setState({results:newResults});
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Input placeholder="Start searching for images!" bsSize="lg" name="search" value={this.state.searchKey} onChange={this.handleFormChange} onKeyDown={this.handleKeyPress}></Input>
          </Col>
        </Row>
        <br/>
        {
          this.state.isLoading
          ?
            <Row className="justify-content-center">
              <Col xs="auto">
                <div className="loader"></div>
              </Col>
            </Row>
          :
            <Row>
              {
                this.state.results.map((item, idx) => {
                  return(
                    <Col md={3} key={idx}>
                      <img onClick={e => this.handleToggleLike(idx)} onMouseOver={e => this.handleHoverResult(idx)} onMouseOut={e => this.handleHoverResult(idx)} src={item.url} alt={item.title} className="img-result"></img>
                      <div className={'icon-like'+(item.liked?' liked':'')+(item.hovered?' hovered':'')}><FontAwesomeIcon icon={faHeart} size="2x"/></div>
                    </Col>
                  );
                })
              }
            </Row>
        }
      </Container>   
    );
  }
}

export default Search;
