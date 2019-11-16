import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";


import SiteLayout from '../components/SiteLayout';

const BigWrapper = styled.div`
		margin: 50px 5%;
`;

const Confirmation = ({location}) => {
	return (		
		<SiteLayout title="Confirmation" pathname={location.pathname}>
			<BigWrapper>
				<h1>Thank you for submitting!</h1>
				<h3>Here is your application reference number: 365-892</h3>
				<p>Keep you application reference number safe.</p>
				<p>
					Norfolk County Council will have someone get in touch with you in the next 2 weeks to let you know how the application is getting on.
				</p>
			</BigWrapper>				
		</SiteLayout>
	);
};

Confirmation.propTypes = {
	location: PropTypes.object,
};

export default Confirmation;