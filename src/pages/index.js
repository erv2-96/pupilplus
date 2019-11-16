import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

import SiteLayout from '../components/SiteLayout';
import IndexPage from '../pageComponents/IndexPage';

const Index = ({location}) => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>My Pupil Premium</title>
			</Helmet>

			<SiteLayout title="My Pupil Premium" pathname={location.pathname}>
				<IndexPage />
			</SiteLayout>
		</>
	
	);
};

Index.propTypes = {
	location: PropTypes.object,
};

export default Index;