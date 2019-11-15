import React from "react";
import PropTypes from 'prop-types';

import SiteLayout from '../components/SiteLayout';

import CheckPage from '../pageComponents/chatbot';

const Chatbot = ({location}) => {
	return (
		<>
			<SiteLayout title="Title of site" pathname={location.pathname}>
				<Chatbot />
			</SiteLayout>
		</>
	
	);
};

Check.propTypes = {
	location: PropTypes.object,
};

export default Check;