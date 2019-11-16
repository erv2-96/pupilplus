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
	font-size: 18px; 
	font-weight: bold;
`;

const MyParagraph = styled(Paragraph)`
	font-size: 18px; 
`;

const BlockInputField = styled(Field)`
	display: block;
	width: 100%;
	border: 2px solid #606060;
	padding: 5px;
	font-size: 16px;

	:hover {
		outline: 2px #FFC108 solid;
	} 

	:focus {
		outline: 2px #067B8D solid;
	}
`;

const Heading = styled.h2`
	margin: 2rem 0 0 0;
`;

const List = styled.ul`
	margin: 10px 0 20px 0;
	font-size: 18px;

	/* desktop */
	@media (min-width:1050px)  {
		margin: 1px;
	} 
`;

const SubmitButton = styled.button`
	/* disabled */
	background: lightgrey;
	
  padding: 5px 15px;
  -webkit-transition: 0.3s ease;
	transition: 0.5s ease;
	font-size: 20px;

	${props => !props.disabled && `
		background: green;
		color: white;
		font-weight: 700;
			
		:hover {
			border: solid 2px #FFC108;
		}
	`}
`;

const Button = styled.button`
	/* disabled */
	background: lightgrey;
	border: 2px solid lightgrey;
	
  padding: 5px 15px;
  -webkit-transition: 0.3s ease;
	transition: 0.5s ease;
	font-size: 20px;
	
	${props => !props.disabled && `
		border: 2px solid #FFC108;
		background: #FFC108;
		opacity: 0.75;
		cursor: pointer;
		
		:hover {
			background: #067B8D;
			opacity: 1;
			color: white; 
		}
	`}	

	${props => props.showAllForm && `
		background: #067B8D;
		border: 2px solid #067B8D;
		opacity: 1;
		color: white;
		font-weight: 700;
		display: inline-block;
		position: relative;
		padding: 15px 0;
		text-align: center;
		
		:after {
			content: '';
			display: block;  
			position: absolute;
			left: calc(50% - 100px);
			top: 100%;
			width: 0;
			height: 0;
			border-top: 20px solid #067B8D;
			border-right: 100px solid transparent;
			border-bottom: 0 solid transparent;
			border-left: 100px solid transparent;
		}
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

const BigWrapper = styled.div`
		margin: 50px 5%;
`;

const CheckPage = () => {

	const [showAllForm, setShowAllForm] = React.useState(false);
	const [isSecondParent, setIsSecondParent] = React.useState(true);


	return (
		<BigWrapper>

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
						
						return 'Click to check your status! If you may be eligible a form will appear below to complete!';
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
								<MyParagraph>Do you receive Universal Credit where the yearly combined awarded amount for your household is less than £7,400?</MyParagraph>

								<Field
									name="universalCredit"
									options={["Yes", "No", "Maybe"]}
									component={FormikRadioGroup}
								/>


							</QuestionWrapper>

							<QuestionWrapper>
							
								<Heading>Child Tax Credit*</Heading>
								<RequiredParagraph>(*This field is required.)</RequiredParagraph>
								<MyParagraph>
									Do you receive Child Tax Credit (with no Working Tax Credit) with an annual income of less than £16,190?	
								</MyParagraph>

								<Field
									name="childTaxCredit"
									options={["Yes", "No", "Maybe"]}
									component={FormikRadioGroup}
								/>

							</QuestionWrapper>		
							

							<StatusBox>
	
								<MyParagraph>{getInitialFormStatusString()}</MyParagraph>

								<VerticalSpacing size={20} />
								
								<Button 
									onClick={() => setShowAllForm(true)} 
									disabled={
										!isEmpty(errors) || !values.universalCredit || !values.childTaxCredit || showAllForm
									}
									showAllForm={showAllForm}
								>
									{showAllForm ? 'You may be eligible! Apply easily by continuing below...' : 'Check'}
								</Button>
							</StatusBox>
						</Wrapper>

						{showAllForm && (
							
							
								<>

									<VerticalSpacing size={10} />

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
									
									<SubmitButton 
										type="submit" 
										disabled={
											!isEmpty(errors) || !values.declaration
										}
									>
										Submit
									</SubmitButton>

								</>
							)
						}

					</Form>
				)}}
			</Formik>			
		</BigWrapper>			
	);
}

export default CheckPage;
