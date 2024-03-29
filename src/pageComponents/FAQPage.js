import React from "react";
import Accordion from 'react-bootstrap/Accordion';

import styled from "styled-components";

const Welcome = styled.div`
	padding: 5%;
	width: 80%;
	margin: auto;
	font-size:30px;
	
`

const FAQPage = () => {
	return (
			<div className="faq-page">
				<Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
			</div>
	);
}

export default FAQPage;