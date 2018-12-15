import React, { Component } from 'react';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';

import styled from 'styled-components';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';


const MenuWrapper = styled.div`
	height: 90px;
	padding-top:21px;
`


const HeadWrapper = styled.header`
	width: 100%;
	height: 48px;
	background-color: #242424;
	opacity: 0.8;
`




class App extends Component {
  render() {
    return (

	    <div className="App">
			<HeadWrapper>
				<Grid>
					<Header/>
				</Grid>
			</HeadWrapper>
			<MenuWrapper>
				<Grid>
					<Menu/>
				</Grid>
			</MenuWrapper>
		</div>

    );
  }
}

export default App;
