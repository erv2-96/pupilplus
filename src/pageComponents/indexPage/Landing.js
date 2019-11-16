import React from "react";
import styled from "styled-components";
import kids from '../../images/kids.jpg';


const LandingWrapper = styled.div`
	position: relative;
	max-width: 100vw;
`;

const Overlay = styled.div`
	clip-path: polygon(0 0, 100% 0, 100% 28%, 0% 100%);
	min-height: 70vh;
	padding: 0 5%;
	display: flex;
	background: #067B8D;
	z-index: 5;
	color: white;

	div {
		display: flex;
		align-items:flex-start;
		justify-content: center;
		flex-direction: column;
		margin-top: -10%;
		width: 50%;

		h1 {
			font-weight: 40px;
			line-height: 1.5;
			margin-bottom: 3rem;
		}
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
		color: #fff;
	}
`;

const ImageBubble = styled.div`
	position:absolute;
	right: 10%;
	bottom: 5%;
	z-index: 100;

	img {
		width: 30vw;
		height: 30vw;
		border-radius: 100%;
		object-fit: cover;
		object-position: left;
	}
`


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

					<ImageBubble>
							<img src={kids} alt="" />
						</ImageBubble>
				</LandingWrapper>
	);
};

export default Landing;