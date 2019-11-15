import React from "react";
import styled from "styled-components";
import threeChildren from '../../images/three-children.jpg';


const LandingWrapper = styled.div`
	position: relative;
	max-width: 100vw;
`;

const Overlay = styled.div`
	clip-path: polygon(0 0, 100% 0, 100% 28%, 0% 100%);
	min-height: 70vh;
	padding: 0 5%;
	display: flex;
	justify-content: center;
	align-items: flex-start;

	background: #067B8D;
	z-index: 5;
	color: white;

	div {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		margin-top: 5%;
	}

	p {
		margin-bottom:2rem;
	}
`;

const FormButton = styled.a`
	background: #fff;
	padding: 15px;
	color: #000;
	border-radius: 30px;
	text-decoration: none;
	transition: 0.3s ease;

	&:hover {
		background: #000;
	}
`;


const Landing = () => {
	return (
			<LandingWrapper >
					<Overlay>
						<div>
							<h1>Realising opportunity and realising mindset</h1>
					
							<FormButton href="http://localhost/pupilpremiumchatbot">
								Apply Now
							</FormButton>
						</div>
					
					</Overlay>
				</LandingWrapper>
	);
};

export default Landing;