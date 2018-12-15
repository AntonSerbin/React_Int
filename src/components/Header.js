import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Link from "./Link"


const List = styled.ul`
	display: flex;
	justify-content: space-between;
	padding: 0;
		align-items: center;

	height: 49px;
`




class Header extends React.Component {
  render() {
    return (
    	<div>
    		<Row>
    			<Col lg={12}>

    				<nav> 
    					<List>
    						<Link link="#1" text="Вызов мастера"> </Link>
    						<Link link="#2" text="Прайс на ремонт"></Link>
    						<Link link="#3" text="Наши преимущества"></Link>
    						<Link link="#4" text="Схема работы"></Link>
    						<Link link="#5" text="Отзывы клиентов"></Link>
    						<Link link="#6" text="Примеры работ"></Link>
    						<Link link="#7" text="Контакты"></Link>
    					</List>
    				</nav>

    			</Col>

    		</Row>
    	</div>
    );
  }
}

export default Header;