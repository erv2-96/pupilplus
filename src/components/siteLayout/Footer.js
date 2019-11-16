import React from "react";
import styled from "styled-components";

const NativeFooter = styled.footer`
  	width: 100%;
	overflow: hidden;
	background: #067B8D;
	padding: 15px 5%;
	p {
		color: white;
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