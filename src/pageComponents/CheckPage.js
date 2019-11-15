import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import VerticalSpacing from '../components/VerticalSpacing';
import Paragraph from "antd/lib/typography/Paragraph";
import { OmitProps } from "antd/lib/transfer/renderListBody";

const Label = styled.label`
	margin-bottom: 1rem; 
`;

const CheckboxLabel = styled(Label)`
	display: block;
	position: relative;
	padding-left: 5%;
	margin-bottom: 1rem;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	> input {
		position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
		width: 0; 	
	}
`;

const LabelParagraph = styled.p`
	font-size: 20px;
	font-weight: 500;
`

const Input = styled.input`
	:hover, :focus {
		outline: 1px yellow solid;
	}
`;

const BlockInput = styled(Input)`
	display: block;
	width: 100%;
	border: 2px solid #606060;
	padding: 5px;
`;

const Textarea = styled.textarea`
	display: block;
	width: 100%;
	border: 2px solid #606060;
	padding: 5px;

	:hover, :focus {
		outline: 1px yellow solid;
	}
`;

const Heading = styled.h2`

`;

const List = styled.ul`
	margin: 0;

	/* desktop */
	@media (min-width:1050px)  {
		margin: 1px;
	} 
`;

const Button = styled.button`
  border: 2px solid #2196F3;
  background: none;
  padding: 5px 15px;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;

	:hover {
    background: #2196F3;
		color: white; 
	}
`;

const Wrapper = styled.div`	
`;

const EligibilityWrapper = styled.div`
	display: flex;
	flex-direction: column;
	
`;

const LabelForTextInput = styled(Label)`
	display: flex;
	flex-direction: row;
`;

const FieldParagraph = styled(Paragraph)`
	margin-right: 1rem;
`;

const ListWrapper = styled.div``;

const RadioButtonWrapper = styled.div``;

const CheckPage = () => {

	const [radioValue, setRadioValue] = React.useState(null);


	return (
		<React.Fragment>
		
			<Formik
				initialValues={{ 
					//email: '',
					listConditions: '',
				}}
				validate={values => {
					const errors = {};
					
					if (!values.listConditions) {
						errors.listConditions = 'Required';
					}
					
					// if (!values.email) {
					// 	errors.email = 'Required';
					// } else if (
					// 	!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					// ) {
					// 	errors.email = 'Invalid email address';
					// }
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({ 
					values,
					handleSubmit,
					isSubmitting,
					isValid,
					errors,
					setFieldValue,
				}) => {	
					const setListConditionsField = value => {
						setFieldValue('listConditions', value);
					};
					
					return (
						<Form>

							<Wrapper>

								<ListWrapper>
								
									<Heading>Do you receive any of the following?</Heading>

									<List>
										<li>Income Support</li>
										<li>Income-based Job Seeker Allowance (JSA)</li>
										<li>Income-related Employment and Support Allowance (ESA)</li>
										<li>Support under Part 6 of the Immigration and Asylum Act 1999</li>
										<li>The guarantee element of Pension Credit</li>
										<li>Working Tax Credit run-on (paid for the four weeks after you stop qualifying for Working Tax Credit)</li>
										<li>Universal Credit where the yearly combined awarded amount for your household is less than £7,400</li>
										<li>Child Tax Credit (with no Working Tax Credit) with an annual income of no more than £16,190</li>
									</List>

									<Field
										name="listConditions"
									>
										{({ field }) => (
											<>
												<RadioButtonWrapper>
													<input
														{...field}
														id="yes"
														value="yes"
														checked={field.value === 'yes'}
														name="type"
														type="radio"
														onChange={() => setListConditionsField('yes')}
													/>
													<label htmlFor="yes">Yes</label>
												</RadioButtonWrapper>

												<RadioButtonWrapper>
													<input
														{...field}
														id="maybe"
														value="maybe"
														name="type"
														checked={field.value === 'maybe'}
														type="radio"
														onChange={() => setListConditionsField('maybe')}
													/>
													<label htmlFor="maybe">Maybe</label>
												</RadioButtonWrapper>

												<RadioButtonWrapper>
													<input
														{...field}
														id="no"
														value="no"
														name="type"
														checked={field.value === 'no'}
														type="radio"
														onChange={() => setListConditionsField('no')}
													/>
													<label htmlFor="no">No</label>
												</RadioButtonWrapper>
											</>
										)}
									</Field>

									{errors.listConditions && <div>EVERYTHING IS WRONG</div>}
							</ListWrapper>									
							{/*
							<Field type="email" name="email" />
							<ErrorMessage name="email" component="div" />
							*/}
							<button type="submit" disabled={isSubmitting}>
								Submit
							</button>
						</Wrapper>
					</Form>
				)}}
			</Formik>			
		</React.Fragment>			
	);
}

export default CheckPage;