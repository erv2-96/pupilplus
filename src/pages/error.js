import React from "react";
import PropTypes from 'prop-types';

import SiteLayout from '../components/SiteLayout';

const Error = ({location}) => {
	return (
		<SiteLayout title="Error" pathname={location.pathname}>
			{/* <ErrorPage /> */}
			Error
		</SiteLayout>	
	);
};

Error.propTypes = {
	location: PropTypes.object,
};

export default Error;