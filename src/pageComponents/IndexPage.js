import React from "react";

import Landing from './indexPage/Landing';
import Benefits from './indexPage/Benefits';
import styled from "styled-components";

const Welcome = styled.div`
	padding: 5%;
	width: 80%;
	margin: auto;
	font-size:30px;
	
`

const IndexPage = () => {
	return (

			<div className="home-page">
				<Landing />
				<Welcome>
					<p>Welcome to my pupil premium.</p>
                    <p>We are here to help you claim goverment funding for your childs education.</p>
				</Welcome>
				<Benefits />
			</div>
	);
}

export default IndexPage;