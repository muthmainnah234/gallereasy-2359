import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './components/Search';
import Favourites from './components/Favourites';

class App extends Component {
  static likedItems = [];

  constructor(props) {
    super(props);
  }

  addLikedItem = (item) => {
    App.likedItems = [...App.likedItems, item];
  }

  removeLikedItem = (id) => {
    App.likedItems = App.likedItems.filter(item => item.id != id);
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to={'/'} className="navbar-brand"><big>Galler<b>easy</b></big></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link"><big>Search</big></Link>
                </li>
                <li className="nav-item">
                  <Link to={'/favourites'} className="nav-link"><big>Favourites</big></Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Switch>
            <Route exact path='/' component={() => <Search addLikedItem={this.addLikedItem} removeLikedItem={this.removeLikedItem}/>} />
            <Route path='/favourites' component={() => <Favourites />} />
          </Switch>
          <div className="footer">
            <span>Gallereasy POC web app</span>
            <span className="float-right">2359 Media</span>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
