import React from "react";
import PropTypes from 'prop-types';

import SiteLayout from '../components/SiteLayout';

// import ChatbotPage from '../pageComponents/ChatbotPage';

const Chatbot = ({location}) => {
	return (
		<>
			<SiteLayout title="Title of site" pathname={location.pathname}>
				{/* <ChatbotPage /> */}
			</SiteLayout>
		</>
	
	);
};

Chatbot.propTypes = {
	location: PropTypes.object,
};

export default Chatbot;