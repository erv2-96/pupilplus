import React from "react";
import styled from "styled-components";

const BenefitsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 5%;

    div {
        max-width: 25%;
        flex-basis:25%;
        border-bottom: 2px solid #067B8D;
        border-left: 2px solid #067B8D;
    }

    div:nth-of-type(5, 6, 7, 8){
        border-bottom: none;
    }

    p {
        text-transform: uppercase;
    }
`


const Benefits = () => {
	return (
			<BenefitsWrapper>
					<div>img</div>
                    <div>
                        <p>Nutritous food</p>
                        </div>
                    <div>
                        <p>img</p>
                        </div>
                    <div>
                        <p>New skills</p>
                        </div>
                    <div>
                        <p>Enhanced learning</p>
                        </div>
                    <div>
                        <p>img</p>
                        </div>
                    <div>
                        <p>New experiances</p>
                        </div>
                    <div>
                        <p>img</p>
                        </div>
			</BenefitsWrapper>
	);
};

export default Benefits;