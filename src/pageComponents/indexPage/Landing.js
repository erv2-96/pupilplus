import React from "react";
import styled from "styled-components";
import threeChildren from '../../images/three-children.jpg';


const LandingWrapper = styled.div`
	position: relative;
`;

const Image = styled.img`
	width: 50%;
	height: auto;
	object-fit: cover;
	object-position:center;
`;

const Overlay = styled.div`
padding: 5%;
	width: 100%;
	height: 100%;
	max-height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: rgba(5,24,42, 0.5);
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
						<Image src={threeChildren} alt="" />
					</Overlay>
				</LandingWrapper>
	);
};

export default Landing;