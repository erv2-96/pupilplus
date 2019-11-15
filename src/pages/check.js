import React from "react";
import PropTypes from 'prop-types';

import SiteLayout from '../components/SiteLayout';

import CheckPage from '../pageComponents/CheckPage';

const Check = ({location}) => {
	return (
		<>
			<SiteLayout title="Title of site" pathname={location.pathname}>
				<CheckPage />
			</SiteLayout>
		</>
	
	);
};

Check.propTypes = {
	location: PropTypes.object,
};

export default Check;