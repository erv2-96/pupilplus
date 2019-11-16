import React from 'react';
import styled from "styled-components";

import LogoSvg from '../../images/logo-white.svg'
import LogoPng from '../../images/logo-white.png'


import { render } from 'react-dom'
import ReactSVG from 'react-svg'


const HeaderWrap = styled.header`
	background: #067B8D; 
	display: flex;
	justify-content: space-between;
	padding: 15px 5%;
	color: #fff;
`

const LogoWrap = styled.div`
img {
	width: 40%;
	height: auto;
}

@media (max-width: 500px){
img {
	width: 60%;
}
}
`
const Menu = styled.div`
	a {
		color: #fff;
		margin-right: 15px;
		text-transform: uppercase;
		text-decoration: none;
		letter-spacing: 1px;
		transition: 0.3s ease;
	}

	a:hover {
		color: #FFC108;
	}
`

const Header = ({pathname}) => {
	return (
		<>
			<HeaderWrap>

				<LogoWrap>
					<a href="/">
					<img src={LogoPng} alt='' />
					</a>
				</LogoWrap>
				<Menu>
					<a href="/faqs">FAQs</a>
					<a href="/check">Form</a>
					<a href="http://localhost/chatbot">Chatbot</a>
				</Menu>

			</HeaderWrap>

		</>
	);
}

export default Header;