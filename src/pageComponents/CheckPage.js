import React from "react";
import styled from "styled-components";
import { Formik, Form, Field/*, ErrorMessage */ } from 'formik';
import isEmpty from 'lodash/isEmpty';

import VerticalSpacing from '../components/VerticalSpacing';
import Paragraph from "antd/lib/typography/Paragraph";

import FormikRadioGroup from './checkPage/FormikRadioGroup';

// import { OmitProps } from "antd/lib/transfer/renderListBody";

const Label = styled.label`
	margin-bottom: 1rem; 
`;

const Input = styled.input`
	:hover, :focus {
		outline: 1px yellow solid;
	}
`;

// const BlockInput = styled(Input)`
// 	display: block;
// 	width: 100%;
// 	border: 2px solid #606060;
// 	padding: 5px;
// `;

// const Textarea = styled.textarea`
// 	display: block;
// 	width: 100%;
// 	border: 2px solid #606060;
// 	padding: 5px;

// 	:hover, :focus {
// 		outline: 1px yellow solid;
// 	}
// `;

const Heading = styled.h2`
	margin: 2rem 0 0 0;
`;

const List = styled.ul`
	margin: 0;
	font-size: 18px;

	/* desktop */
	@media (min-width:1050px)  {
		margin: 1px;
	} 
`;

const Button = styled.button`
  background: none;
  padding: 5px 15px;
  -webkit-transition: 0.3s ease;
	transition: 0.3s ease;
	font-size: 20px;
	
	${props => !props.disabled && `
		border: 2px solid #2196F3;
		
		:hover {
			background: #2196F3;
			color: white; 
		}
	`}	

	${props => props.showAllForm && `
		background: green;
		color: white;
		font-weight: 700;
	`}	


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

const QuestionWrapper = styled.div``;

const RadioButtonWrapper = styled.div``;

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
`;

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const StatusBox = styled.div`
	background-color: 'white';
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin: 3rem 1rem;
`;

const ErrorText = styled.div`
	color: red;
	margin-bottom: 1rem;
`;

const RequiredParagraph = styled(Paragraph)`
	margin-bottom: 0.75rem;
`; 

const LargeText = styled.p`
		font-size: 26px;
`;

const Option = styled.option`
	font-size: 16px;
`;

const CheckPage = () => {

	const [showAllForm, setShowAllForm] = React.useState(false);


	return (
		<React.Fragment>

			<h1>Eligibility checker</h1>

			<LargeText>
				Use this form separately for each child you are parent/guardian of.
			</LargeText>

			<LargeText>
				The first part of this form helps determine if you are potentially eligible.
			</LargeText>

			<LargeText>
				If you are eligible, you can fill out the second part of the form and send off the application!
			</LargeText>


			<VerticalSpacing size={50}	/>
		
			<Formik
				initialValues={{ 
					//email: '',
					listConditions: '',
					universalCredit: '',
					childTaxCredit: '',
				}}
				validate={values => {
					const errors = {};
					
					// TODO remove error if sufficient condition has been met
					if (!values.universalCredit) {
						errors.universalCredit = 'Please answer all questions';
					}

					if (!values.childTaxCredit) {
						errors.childTaxCredit = 'Please answer all questions';
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
						setFieldValue('universalCredit', values.universalCredit)
						setFieldValue('childTaxCredit', values.childTaxCredit)
					};
					const setUniversalCreditField = value => {
						setFieldValue('listConditions', values.listConditions);
						setFieldValue('universalCredit', value)
						setFieldValue('childTaxCredit', values.childTaxCredit)
					};
					const setChildTaxCreditField = value => {
						setFieldValue('listConditions', values.listConditions);
						setFieldValue('universalCredit', values.universalCredit)
						setFieldValue('childTaxCredit', value)
					};

					const getInitialFormStatusString = () => {
						if (
							values.universalCredit === ''
							||
							values.childTaxCredit === ''
						) {
							return 'Please complete all required fields before clicking the \'check\' button.';
						}
						
						return 'Click to check your status!';
					} 

					return (
						<Form>

							<Wrapper>

								<QuestionWrapper>
								
									<Heading>Do you receive any of the following?</Heading>

									<FlexColumn>
										<List>
											<li><Paragraph>Income Support</Paragraph></li>
											<li><Paragraph>Income-based Job Seeker Allowance (JSA)</Paragraph></li>
											<li><Paragraph>Income-related Employment and Support Allowance (ESA)</Paragraph></li>
											<li><Paragraph>Support under Part 6 of the Immigration and Asylum Act 1999</Paragraph></li>
											<li><Paragraph>The guarantee element of Pension Credit</Paragraph></li>
											<li><Paragraph>Working Tax Credit run-on (paid for the four weeks after you stop qualifying for Working Tax Credit)</Paragraph></li>
										</List>

										<Field
											name="listConditions"
											options={["Yes", "No", "Maybe"]}
											component={FormikRadioGroup}
										/>
									</FlexColumn>									
							</QuestionWrapper>						

							<QuestionWrapper>
							
								<Heading>Universal Credit*</Heading>
								<RequiredParagraph>(*This field is required.)</RequiredParagraph>
								<Paragraph>Do you receive Universal Credit where the yearly combined awarded amount for your household is less than £7,400?</Paragraph>

								<Field
									name="universalCredit"
									options={["Yes", "No", "Maybe"]}
									component={FormikRadioGroup}
								/>


							</QuestionWrapper>

							<QuestionWrapper>
							
								<Heading>Child Tax Credit*</Heading>
								<RequiredParagraph>(*This field is required.)</RequiredParagraph>
								<Paragraph>
									Do you receive Child Tax Credit (with no Working Tax Credit) with an annual income of less than £16,190?	
								</Paragraph>

								<Field
									name="childTaxCredit"
									options={["Yes", "No", "Maybe"]}
									component={FormikRadioGroup}
								/>

							</QuestionWrapper>		
							

							<StatusBox>
	
								<div>{getInitialFormStatusString()}</div>
								
								<Button 
									onClick={() => setShowAllForm(true)} 
									disabled={
										!isEmpty(errors) || !values.universalCredit || !values.childTaxCredit || showAllForm
									}
									showAllForm={showAllForm}
								>
									{showAllForm ? 'You may be eligible! Continue below' : 'Check'}
								</Button>
							</StatusBox>
						</Wrapper>

						{showAllForm && (
							<>

								<VerticalSpacing size={50} />

								<Label htmlFor="guardianNumber">
									<FlexColumn>
										<Paragraph>
											Please select whether there are 1 or 2 parents/guardians for this child:
										</Paragraph>
										<Field as="select" name="guardianNumber">
											<Option value="1">1 Parent/Guardian</Option>
											<Option value="2">2 Parents/Guardians</Option>
										</Field>
									</FlexColumn>									
								</Label>

								<VerticalSpacing size={50} />

								


								<div>IGNORE BELOW</div>

								<Button 
									type="submit" 
									disabled={
										!isEmpty(errors) || isSubmitting
									}
								>
									Check
								</Button>

							</>
						)}

					</Form>
				)}}
			</Formik>			
		</React.Fragment>			
	);
}

export default CheckPage;