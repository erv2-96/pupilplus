import React from "react";
import styled from "styled-components";
import threeChildren from '../../images/three-children.jpg';


const LandingWrapper = styled.div`
	position: relative;
	max-width: 100vw;
`;

const Overlay = styled.div`
	clip-path: polygon(0 0, 100% 0, 100% 63%, 0% 100%);
	height: 100vh;
	padding: 0 5%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: #067B8D;
	z-index: 5;
	color: white;

	p {
		margin-bottom:2rem;
	}
`;

const FormButton = styled.div`
	background: #fff;
	padding: 15px;
	color: #05182A;
`;


const Landing = () => {
	return (
			<LandingWrapper >
					<Overlay>
						<div>
							<h1>Realising opportunity and realising mindset</h1>
							<p>Tagline tagline tagline</p>
							<FormButton >
								Apply Now
							</FormButton>
						</div>
					
					</Overlay>
				</LandingWrapper>
	);
};

export default Landing;