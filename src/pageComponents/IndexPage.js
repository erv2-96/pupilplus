import React from "react";

import Landing from './indexPage/Landing';
import Benefits from './indexPage/Benefits';
import styled from "styled-components";

const Welcome = styled.div`
	padding: 5%;
	margin: auto;
	font-size:18px;

	h2 {
		font-size: 36px;
			letter-spacing: 1.5px
			line-height: 1.5;
			margin-bottom: 3rem;
	}

	p {
		font-size: 26px;
	}

	@media (max-width: 500px){
		
	}
	
`

const IndexPage = () => {
	return (

			<div className="home-page">
				<Landing />
				<Welcome>
					<h2>Welcome to my pupil premium.</h2>
                    <p>We are here to help you claim goverment funding for your childs education.</p>
				</Welcome>
				<Benefits />
			</div>
	);
}

export default IndexPage;