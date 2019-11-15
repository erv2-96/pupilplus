import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Label = styled.label`
	display: block;
	margin-bottom: 1rem; 
	cursor: pointer;
	width: -webkit-fit-content;
	width: -moz-fit-content;
	width: fit-content; 
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
	margin: 5% 0;
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

const Fieldset = styled.fieldset`
	margin-bottom: 5%;
`;

const Wrapper = styled.div`
	display: flex;
`;

const CheckPage = () => {
	return (
		<React.Fragment>
	
	
	{/* 
			<Formik
				initialValues={{ email: '', password: '' }}
				validate={values => {
					const errors = {};
					if (!values.email) {
						errors.email = 'Required';
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Invalid email address';
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<Field
							name="with_car"
							component={Checkbox}
							layout="inline-icon-center"
							iconActive={<checkboxIcons.IconActive />}
							iconInactive={<checkboxIcons.IconInactive />}
							automationHook={FLIGHT_SEARCH_WITH_CAR.hook}
						>
							<LabelText>{flightAndCarLabel}</LabelText>
						</Field>

						<Label>
							<Field type="checkbox" name="isAwesome" />
							Are you awesome?
         		 </Label>
						
						
						
						<Field type="email" name="email" />
						<ErrorMessage name="email" component="div" />
						<Field type="password" name="password" />
						<ErrorMessage name="password" component="div" />
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
	*/}
	
		<form>
				<Wrapper>
					<Fieldset>
						<Heading>Do you qualify for any of the following?</Heading>

						<Label id="incomeSupport">
							<Input type="checkbox" />
							Income support
						</Label>
						<Label id="jobSeeker">
							<Input type="checkbox" />
							Income based job seeker allowance
						</Label>
						<Label id="employmentSupportAllowance">
							<Input type="checkbox" />
							Income related employment and support allowance
						</Label>
						<Label id="NAsupport">
							<Input type="checkbox" />
							National Asylum support
						</Label>
						<Label id="statePension">
							<Input type="checkbox" />
							State pension credit
						</Label>
						<Label id="childTaxCredit">
							<Input type="checkbox" />
							Child tax credit
						</Label>
						<Label id="childTaxCreditAmount">
							<p>Child tax credit Amount:</p>
							<Input type="text" />
						</Label>
						<Label id="workingTaxCredit">
							<Input type="checkbox" />
							Working tax credit
						</Label>
						<Label id="universalCredit">
							<Input type="checkbox" />
							Universial credit of more than £7,400
						</Label>
						<Label id="universalCreditAmount">
							<LabelParagraph>Universial Credit Amount:</LabelParagraph>
							<Input type="text" />
						</Label>
					</Fieldset>
				
					<div>
						<Fieldset>
							<h2>Parents/Gurdians</h2>
							<Label id="parent-name">
								<LabelParagraph>Name</LabelParagraph>
								<BlockInput type="text" />
							</Label>
							<Label id="parent-DoB">
								<LabelParagraph>Date of Birth</LabelParagraph>
								<BlockInput type="text" />
							</Label>
							<Label id="NI-NA-no">
								<LabelParagraph>NI Number or National Asylum number</LabelParagraph>
								<BlockInput type="number" />
							</Label>
							<Label id="phone">
								<LabelParagraph>Daytime phone number</LabelParagraph>
								<BlockInput type="number" />
							</Label>
							<Label id="address">
								<LabelParagraph>Address</LabelParagraph>
								<Textarea name="address"></Textarea>
							</Label>
							<Label id="postcode">
								<LabelParagraph>Postcode</LabelParagraph>
								<BlockInput type="text" />
							</Label>
						</Fieldset>

						<Fieldset>
							<h2>Pupil</h2>
							<Label id="pupil-name">
								<LabelParagraph>Name</LabelParagraph>
								<BlockInput type="text" />
							</Label>
							<Label id="pupil-DoB">
								<LabelParagraph>Date of Birth</LabelParagraph>
								<BlockInput type="text" />
							</Label>
							<Label id="school">
								<LabelParagraph>Name of School</LabelParagraph>
								<BlockInput type="text" />
							</Label>
						</Fieldset>

						<Fieldset>
							<h2>Declaration</h2>
							<Label id="declaration">
								<Input type="checkbox" />
								By ticking this box, you are agreeing to our terms of use.
								</Label>
						</Fieldset>

						<Button type="submit">Submit</Button>					
					</div>
				</Wrapper>			
			</form>
			
		</React.Fragment>			
	);
}

export default CheckPage;