import styled from "styled-components";
import SectionHero from "../components/SectionHero";
import Section from "../components/Section";
import H1 from "../components/shared/typography/H1";
import H2 from "../components/shared/typography/H2";
import BodyText from "../components/shared/typography/BodyText";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Home() {
	const { scrollYProgress } = useViewportScroll();
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
				<ExplanationWrapper>
					<ProgressBarContainer>
						<ProgressBarActive
							style={{
								scaleY: scrollYProgress,
							}}
						/>
					</ProgressBarContainer>
					<Section>
						<H2 mbtm={"1rem"}>Currencies</H2>
						<BodyText>
							Paddle supports payments in over 22 currencies and 16 languages.
							Even better, it takes care of all your tax obligations in those
							territories, so you can just focus on your product and leave the
							pain of tax compliance to us.
						</BodyText>
					</Section>
				</ExplanationWrapper>
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
	flex-direction: column;
`;

const ExplanationWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	margin-top: 3rem;
`;

const ProgressBarContainer = styled(motion.div)`
	width: 5px;
	height: 800px;
	overflow: hidden;
	background: #f1f1f1;
	border-radius: 6px;
`;

const ProgressBarActive = styled(motion.div)`
	width: inherit;
	height: inherit;
	background: #000000;
	transform-origin: top;
`;
