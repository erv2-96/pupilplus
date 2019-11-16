import React from "react";
import Accordion from './faqpage/accordion';

import styled from "styled-components";

const FaqWrap = styled.div`
	padding: 5%;
	width: 80%;
	margin: auto;
    font-size:20px;
`

const FAQPage = () => {
	return (
			<FaqWrap>
                <p>If your child is eligible for free school meals, they may also be entitled to a sum of money paid to their school to boost their learning. We explain the ins and outs of the pupil premium for parents.</p>
				<Accordion allowMultipleOpen>
                    <div label='What is the pupil premium?' isOpen>
                        <p>Introduced in 2011, the pupil premium is a sum of money given to schools each year by the Government to improve the attainment of disadvantaged children.
This is based on research showing that children from low income families perform less well at school than their peers. Often, children who are entitled to pupil premium face challenges such as poor language and communication skills, lack of confidence and issues with attendance and punctuality. The pupil premium is intended to directly benefit the children who are eligible, helping to narrow the gap between them and their classmates.
</p>
                    </div>
                    <div label='Is your child eligible?'>
                        <p>Primary schools are given a pupil premium for:
* Children in Reception to Year 6 who are, or have ever been, entitled to free school meals based on their family income: £1320 per pupil, per school year
* Children in care: £2300 per pupil, per school year
* Children previously in care who have been adopted, or who have a special guardianship order, a child arrangements order or a residence order: £2300 per pupil, per school year
* Children recorded as being from service families: £300 per pupil, per school year</p>
                    </div>
                    <div label="How is it spent?">
<p>Schools can choose how to spend their pupil premium money, as they are best placed to identify what would be of most benefit to the children who are eligible.
Common ways in which schools spend their pupil premium fund include:
* Extra one-to-one or small-group support for children within the classroom.
* Employing extra teaching assistants to work with classes.
* Running catch-up sessions before or after school, for example for children who need extra help with maths or literacy.
* Running a school breakfast club to improve attendance.
* Providing extra tuition for able children.
* Providing music lessons for children whose families would be unable to pay for them.
* Funding educational trips and visits.
* Paying for additional help such as speech and language therapy or family therapy.
* Funding English classes for children who speak another language at home.
* Investing in resources that boost children’s learning, such as laptops or tablets.
However, some schools use their pupil premium in more creative ways.
In the annual Pupil Premium Awards, recent winners spent their money on a bike for a child who was repeatedly late for school due to missing the bus, a nutritionist for a Year 5 child whose poor diet was causing behavioural and learning difficulties, and shoes and school uniform – including a PE kit – for a disadvantaged child in Year 3.
Often, all of the children in a class will reap some benefit from how the school spends its pupil premium: for example, if the money is used to fund an additional teaching assistant who works across the whole class, rather than providing one-to-one support.
But research shows that the fund does help to narrow gaps between disadvantaged children and their peers, particularly in English and maths.
Can you influence how the pupil premium is used?
There is no obligation for your school to consult you about how they use the money they claim for your child, although some schools may involve parents.
However, schools do have to show that they are using their pupil premium fund appropriately. This is measured through Ofsted inspections and annual performance tables showing the progress made by children who are eligible for pupil premium.
In addition, they have to publish details online, including how much money they have been allocated, how they intend to spend it, how they spent their previous year’s allocation and how it made a difference to the attainment of disadvantaged pupils.</p>
                    </div>
                    <div label="How to claim your child’s pupil premium">
                        <p>Children qualify for free school meals – and accordingly pupil premium – if you receive any of the following benefits:
* Universal credit (provided you have a net income of £7400 or less)
* Income support
* Income-based jobseekers’ allowance
* Income-related employment and support allowance
* Support under Part IV of the Immigration and Asylum Act 1999
* The guaranteed element of state pension credit
* Child tax credit, provided that you are not also entitled to working tax credit and have an annual gross income of £16,190 or less
These benefits have now been rolled into a single benefit, called Universal Credit. 
Universal Credit is being rolled out, with an expected completion date of March 2022. All pupils who were eligible for free school meals up to April 2018 will continue to receive free school meals during this period.
Once Universal Credit is fully rolled out, any existing claimants who no longer meet the eligiblilty criteria will still qualify for free school meals until the end of their current stage of education (i.e. primary or secondary).
Children who are or have been in care, and children who have a parent who is or was in the armed forces, are also entitled to pupil premium.
Schools are responsible for recording the children who are eligible for pupil premium in their annual school census - you don't have to do anything yourself, other than making sure you return any paperwork that relates to the benefits you receive or your child's entitlement to free school meals.
If your child qualifies for free school meals, it’s important that you tell their school – even if they're in Reception or KS1 and receive universal school meals for infant pupils, or are in KS2 and take a packed lunch – as this enables them to claim pupil premium.</p>
                    </div>
                
                </Accordion>
			</FaqWrap>
	);
}

export default FAQPage;