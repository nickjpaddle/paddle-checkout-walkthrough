import React from "react";
import styled from "styled-components";

const SectionHero = ({ children }) => {
	return <Container>{children}</Container>;
};

export default SectionHero;

const Container = styled.div`
	width: 575px;
`;
