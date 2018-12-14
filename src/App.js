import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

import HelloWorld from './components/HelloWorld'
import './App.css';

class App extends Component {
  render() {
    return (
    <p><HelloWorld /></p>
    );
  }
}

export default App;
