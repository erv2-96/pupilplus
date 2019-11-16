import React from "react";
import styled from "styled-components";

const NativeFooter = styled.footer`
  	max-width: 100vw;
	overflow: hidden;
	background: #067B8D;
	padding: 15px 5%;
	p, a {
		color: white;
		text-decoration: none;
	}

`;

const Footer = () => {
	return (
		<NativeFooter>
			<p>Contact us at: <a href="#">info@mypupilpremium.com</a></p>
		</NativeFooter>
	);
};

export default Footer;