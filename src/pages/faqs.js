import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

import SiteLayout from '../components/SiteLayout';
import FAQPage from '../pageComponents/FAQPage';

const FAQs = ({location}) => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>My Pupil Premium</title>
			</Helmet>

			<script src='https://assistant-web.watsonplatform.net/loadWatsonAssistantChat.js'></script>
			<script>
				window.loadWatsonAssistantChat({
					integrationID: "39ab571e-b4a0-4699-b2e7-e0390ec4b923",
					region: "eu-gb"
				}).then(function(instance){
					instance.render();
				});
			</script>

			<SiteLayout title="My Pupil Premium FAQ" pathname={location.pathname}>
				<FAQPage />
			</SiteLayout>
		</>
	
	);
};

FAQs.propTypes = {
	location: PropTypes.object,
};

export default FAQs;