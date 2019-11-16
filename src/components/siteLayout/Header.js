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
`

const Header = ({pathname}) => {
	return (
		<>
			<HeaderWrap>

				<LogoWrap>
					<img src={LogoPng} alt='' />
				</LogoWrap>
				<div>
					menu
				</div>

			</HeaderWrap>

		</>
	);
}

export default Header;