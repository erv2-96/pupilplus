import React from "react";
import styled from "styled-components";
import { Formik, Form, Field/*, ErrorMessage */ } from 'formik';
import isEmpty from 'lodash/isEmpty';

import VerticalSpacing from '../components/VerticalSpacing';
import Paragraph from "antd/lib/typography/Paragraph";

import FormikRadioGroup from './checkPage/FormikRadioGroup';
//import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';


// import { OmitProps } from "antd/lib/transfer/renderListBody";

const Label = styled.label`
	margin-bottom: 1rem; 
`;

const LabelParagraph = styled.p`
	margin-bottom: 1rem; 
`;

// const Input = styled.input`
// 	:hover, :focus {
// 		outline: 1px yellow solid;
// 	}
// `;

const BlockInputField = styled(Field)`
	display: block;
	width: 100%;
	border: 2px solid #606060;
	padding: 5px;

	:hover, :focus {
		outline: 1px yellow solid;
	}
`;

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

// const EligibilityWrapper = styled.div`
// 	display: flex;
// 	flex-direction: column;
	
// `;

// const LabelForTextInput = styled(Label)`
// 	display: flex;
// 	flex-direction: row;
// `;

// const FieldParagraph = styled(Paragraph)`
// 	margin-right: 1rem;
// `;

const QuestionWrapper = styled.div``;

// const RadioButtonWrapper = styled.div``;

// const FlexRow = styled.div`
// 	display: flex;
// 	flex-direction: row;
// `;

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

// const ErrorText = styled.div`
// 	color: red;
// 	margin-bottom: 1rem;
// `;

const RequiredParagraph = styled(Paragraph)`
	margin-bottom: 0.75rem;
`; 

const LargeText = styled.p`
		font-size: 26px;
`;

// const Option = styled.option`
// 	font-size: 16px;
// `;

const CheckPage = () => {

	const [showAllForm, setShowAllForm] = React.useState(false);
	const [isSecondParent, setIsSecondParent] = React.useState(true);


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
					listConditions: '',
					universalCredit: '',
					childTaxCredit: '',
					declaration: false,
					parentName1: "",
					parentDob1: "",
					parentNiNo1: "",
					parentPhone1: "",
					parentAddress1: "",
					parentPostcode1: "",
					parentName2: "",
					parentDob2: "",
					parentNiNo2: "",
					parentPhone2: "",
					parentAddress2: "",
					parentPostcode2: "",
					pupilName: "",
					pupilDob: "",
					schoolName: ""
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
						window.location.href = "/confirmation";
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

					const toggleIsSecondParent = () => {
						setIsSecondParent(!isSecondParent);
					}

					const setDeclarationField = value => {
						setFieldValue('declaration', value);
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
									{showAllForm ? 'You may be eligible! Continue below...' : 'Check'}
								</Button>
							</StatusBox>
						</Wrapper>

						{showAllForm && (
							
							
								<>

									<VerticalSpacing size={50} />

									<QuestionWrapper>
										<h2>{isSecondParent ? 'First Parent/Guardian details' : 'Single Parent/Guardian details'}</h2>
										<Label htmlFor="parent-name">
											<LabelParagraph>Name</LabelParagraph>
											<BlockInputField type="text" name="parentName1" />
										</Label>
										<Label htmlFor="parent-DoB">
											<LabelParagraph>Date of Birth</LabelParagraph>
											<BlockInputField type="text" name="parentDob1" />
										</Label>
										<Label htmlFor="NI-NA-no">
											<LabelParagraph>NI Number or National Asylum number</LabelParagraph>
											<BlockInputField type="text" name="parentNiNo1" />
										</Label>
										<Label htmlFor="phone">
											<LabelParagraph>Daytime phone number</LabelParagraph>
											<BlockInputField type="text" name="parentPhone1" />
										</Label>
										<Label htmlFor="address">
											<LabelParagraph>Address</LabelParagraph>
											<BlockInputField type="text" name="parentAddress1" />
										</Label>
										<Label htmlFor="postcode">
											<LabelParagraph>Postcode</LabelParagraph>
											<BlockInputField type="text" name="parentPostcode1" />
										</Label>
									</QuestionWrapper>

									<VerticalSpacing size={30} />

									<Field
											name="isSecondParent"											
									>
										{({field}) => {
											return (
												<Checkbox
													value="checkedA"
													inputProps={{ 'aria-label': 'Checkbox A' }}
													onChange={() => toggleIsSecondParent()}
													checked={isSecondParent}
												/>
											);
										}}
									</Field>
									
									<Label>There is a second parent/guardian for the child I am currently applying for.</Label>

									{isSecondParent && (
										<QuestionWrapper>
										<h2>Second Parent/Guardian details</h2>
										<Label htmlFor="parent-name">
											<LabelParagraph>Name</LabelParagraph>
											<BlockInputField type="text" name="parentName2" />
										</Label>
										<Label htmlFor="parent-DoB">
											<LabelParagraph>Date of Birth</LabelParagraph>
											<BlockInputField type="text" name="parentDob2" />
										</Label>
										<Label htmlFor="NI-NA-no">
											<LabelParagraph>NI Number or National Asylum number</LabelParagraph>
											<BlockInputField type="text" name="parentNiNo2" />
										</Label>
										<Label htmlFor="phone">
											<LabelParagraph>Daytime phone number</LabelParagraph>
											<BlockInputField type="text" name="parentPhone2" />
										</Label>
										<Label htmlFor="address">
											<LabelParagraph>Address</LabelParagraph>
											<BlockInputField type="text" name="parentAddress2" />
										</Label>
										<Label htmlFor="postcode">
											<LabelParagraph>Postcode</LabelParagraph>
											<BlockInputField type="text" name="parentPostcode2" />
										</Label>
									</QuestionWrapper>
									)}

									<QuestionWrapper>
										<h2>Pupil</h2>
										<Label htmlFor="pupil-name">
											<LabelParagraph>Name</LabelParagraph>
											<BlockInputField type="text" name="pupilName" />
										</Label>
										<Label htmlFor="pupil-DoB">
											<LabelParagraph>Date of Birth</LabelParagraph>
											<BlockInputField type="text" name="pupilDob" />
										</Label>
										<Label htmlFor="school">
											<LabelParagraph>Name of School</LabelParagraph>
											<BlockInputField type="text" name="schoolName" />
										</Label>
									</QuestionWrapper>

									<QuestionWrapper>
										<h2>Declaration</h2>
										<Label htmlFor="declaration">
											<Field
												name="declaration"											
											>
												{({field, form}) => {
													return (
														<Checkbox
															value="checkedA"
															inputProps={{ 'aria-label': 'Checkbox A' }}
															onChange={() => setDeclarationField(!form.values.declaration)}
															checked={form.values.declaration}
														/>
													);
												}}
											</Field>
											By ticking this box, you are agreeing to our terms of use.
										</Label>
										
									</QuestionWrapper>

									<VerticalSpacing size={50} />
									
									<Button 
										type="submit" 
										disabled={
											!isEmpty(errors) || isSubmitting || !values.declaration
										}
									>
										Submit
									</Button>

								</>
							)
						}

					</Form>
				)}}
			</Formik>			
		</React.Fragment>			
	);
}

export default CheckPage;