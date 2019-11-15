import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledHeading = styled.h2`
	margin: 0 0 50px 0;
`;

const Heading = ({children}) => {
	return (
		<StyledHeading>
			{children}
		</StyledHeading>
	);
};

Heading.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Heading;
	