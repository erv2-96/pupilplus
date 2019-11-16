import React from "react";
import PropTypes from 'prop-types';

import SiteLayout from '../components/SiteLayout';

const Confirmation = ({location}) => {
	return (
		<>
			<SiteLayout title="Confirmation" pathname={location.pathname}>
				<h1>Thank you!</h1>
				<h3>Application reference number: 365-892</h3>
				<p>Please remember your application reference number.</p>
				<p>A Norfolk County Council representative will be in touch in the next 2 weeks.</p>
			</SiteLayout>
		</>
	);
};

Confirmation.propTypes = {
	location: PropTypes.object,
};

export default Confirmation;