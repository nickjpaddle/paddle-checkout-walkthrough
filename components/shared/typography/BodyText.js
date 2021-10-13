import styled from "styled-components";
import React from "react";

const BodyText = ({ mbtm, mtop, ml, mr, pbtm, ptop, pl, pr, children }) => {
	return (
		<StyledText
			mbtm={mbtm}
			mtop={mtop}
			ml={ml}
			mr={mr}
			pbtm={pbtm}
			btop={ptop}
			pl={pl}
			pr={pr}>
			{children}
		</StyledText>
	);
};

const StyledText = styled.p`
	font-size: 18px;
	color: black;
	margin-bottom: ${(props) => (props.mbtm ? props.mbtm : 0)};
	margin-top: ${(props) => (props.mtop ? props.mtop : 0)};
	margin-left: ${(props) => (props.ml ? props.ml : 0)};
	margin-right: ${(props) => (props.mr ? props.mr : 0)};
	padding-bottom: ${(props) => (props.pbtm ? props.pbtm : 0)};
	padding-top: ${(props) => (props.ptop ? props.mtop : 0)};
	padding-left: ${(props) => (props.pl ? props.pl : 0)};
	padding-right: ${(props) => (props.pr ? props.pr : 0)};
`;

export default BodyText;
