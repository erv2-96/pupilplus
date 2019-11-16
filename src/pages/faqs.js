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