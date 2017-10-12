import React, { Component } from 'react';
import './App.css';
import DogList from './pages/DogList';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class App extends Component {
  render () {
    // TODO Add routing, don't hardcode page use
    return (
      <div className='App'>
        <AppBar position='static' color='default'>
          <Toolbar>
            <Typography type='title' color='inherit'>
              Dog Dating App
            </Typography>
          </Toolbar>
        </AppBar>
        <DogList />
      </div>
    );
  }
}

export default App;
