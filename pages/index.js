import styled from "styled-components";
import SectionHero from "../components/SectionHero";
import H1 from "../components/shared/typography/H1";
import BodyText from "../components/shared/typography/BodyText";

export default function Home() {
	return (
		<Container>
			<LeftWrapper>
				<SectionHero>
					<H1 mbtm="1rem">Meet the Checkout</H1>
					<BodyText>
						Paddle offers a customisable checkout that allows you to display
						your unique billing model to customers in a user friendly way. Play
						around with the customisation options below to explore what's
						possible with Paddle.
					</BodyText>
				</SectionHero>
			</LeftWrapper>
			<RightWrapper></RightWrapper>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	display: flex;
`;

const RightWrapper = styled.div`
	width: 50%;
	height: 100vh;
	position: sticky;
	top: 0;
	background-color: #f6f6f6;
`;

const LeftWrapper = styled.div`
	width: 50%;
	background-color: white;
	padding: 3rem 1rem;
	display: flex;
	margin-top: 6rem;
	justify-content: center;
`;
