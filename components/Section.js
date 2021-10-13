import React from "react";
import styled from "styled-components";

const Section = ({ children }) => {
	return <Container>{children}</Container>;
};

export default Section;

const Container = styled.div`
	width: 575px;
	padding-left: 2rem;
`;
