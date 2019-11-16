import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledHeading = styled.div`
	background: #067B8D;
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