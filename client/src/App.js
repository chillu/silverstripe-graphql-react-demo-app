import React, { Component } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <AppBar position='static' color='default'>
          <Toolbar>
            <Typography type='title' color='inherit'>
              Dog Dating App
            </Typography>
          </Toolbar>
        </AppBar>
        <HomeScreen />
      </div>
    );
  }
}

export default App;
