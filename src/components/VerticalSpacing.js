import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledVerticalSpacing = styled.div`
	height: ${props => props.size ? props.size : 1}px;
`;

const VerticalSpacing = ({size}) => {
	return (
		<StyledVerticalSpacing size={size} />
	);
};

VerticalSpacing.propTypes = {
	size: PropTypes.number.isRequired,
};

export default VerticalSpacing;
	