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
				<h1>Thank you!</h1>
				<h3>Application reference number: 365-892</h3>
				<p>Please remember your application reference number.</p>
				<p>A Norfolk County Council representative will be in touch in the next 2 weeks.</p>
			</BigWrapper>				
		</SiteLayout>
	);
};

Confirmation.propTypes = {
	location: PropTypes.object,
};

export default Confirmation;