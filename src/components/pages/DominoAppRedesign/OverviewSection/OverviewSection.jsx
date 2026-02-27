import React from "react";

import { Grid, List, ListItem, Button } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Image from "components/shared/Image/Image";
import ProjectStepSection from "components/shared/ProjectStepSection/ProjectStepSection";
import Body1 from "components/shared/Body1/Body1";
import ProjectOverviewList from "components/shared/ProjectOverviewList/ProjectOverviewList";
import ProjectContentContainer from "components/shared/ProjectContentContainer/ProjectContentContainer";
import { useInView } from "react-intersection-observer";
import InViewContext from "components/context/InViewContext";
import H4 from "components/shared/H4/H4";

const OverviewSection = () => {
	const [ref1, inView1] = useInView({
		triggerOnce: false,
		threshold: 0.3,
	});

	const [ref2, inView2] = useInView({
		triggerOnce: false,
		threshold: 0.1,
	});

	const [ref3, inView3] = useInView({
		triggerOnce: false,
		threshold: 0.3,
	});

	const navItems = [
		{ to: "1", label: "overview" },
		{ to: "2", label: "design process" },
		{ to: "5", label: "deliverable" },
	];
	const listItems = [
		{ key: "TIMELINE", value: "JUL - AUG 2023" },
		{ key: "ROLE", value: "UI/UX Designer" },
		{ key: "Tools", value: "Figma, Illustrator, PhotoShop, Google Form" },
		{ key: "Skills", value: "User Research" },
	];
	return (
		<InViewContext.Provider value={[inView1, inView2, inView3]}>
			<ProjectContentContainer navItems={navItems}>
				<div ref={ref1}>
					<ProjectStepSection title="Overview" id="1">
						<ProjectOverviewList listItems={listItems} />
						<Grid container justifyContent="space-between">
							<Grid item xs={12}>
								<Body1>
									Domino's is an international pizza company that delivers and
									has takeout services all over the world, with stores in over
									90 countries. They are famous for getting your pizza to you
									fast and on time. Domino's keeps up with the latest
									technology, letting you order your pizza online or through
									their app.
								</Body1>
								<Body1>
									As the UX/UI Designer responsible for redesigning the app, my
									main tasks included improving the overall experience for
									users. This involved conducting user research to better
									understand our audience and developing solutions to make the
									app more user-friendly
								</Body1>
								<Image src="/images/domino-timeline.webp" alt="timeline" />
								<H4
									sx={{
										fontWeight: "bold",
										marginTop: "20px",
										fontFamily: "'Montserrat', sans-serif",
									}}
								>
									Why Domino’s?
								</H4>
								<Body1>
									I chose Domino's for my first approach into user research for
									a very personal reason: it's the pizza my family orders most
									often. We've always enjoyed Domino's for its affordability and
									reliable delivery times. However, we've also frequently found
									ourselves critiquing the app's usability. For instance, when I
									encouraged my friends to sign up for the free pizza rewards,
									they were discouraged by the complexity of the process. As
									casual users, we tend to overlook minor annoyances without
									seeking deeper issues. Now, stepping into the roles of a UX
									researcher and designer, I'm eager to explore these problems
									more thoroughly. My goal is to identify and address the
									current challenges within the app, aiming to enhance the
									experience for myself and fellow Domino's customers.
								</Body1>
								<H4
									sx={{
										fontWeight: "bold",
										marginTop: "20px",
										fontFamily: "'Montserrat', sans-serif",
									}}
								>
									Problem
								</H4>
								<Body1>
									The initial phase of the project revealed several key issues
									with the current Domino's App interface. My task was to
									identify these problems and start thinking of ways to fix
									them.
								</Body1>
								<List>
									<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
										1. Users must navigate through many steps to make a final
										decision, complicating what should be a straightforward
										process.
									</ListItem>
									<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
										2. The website's lack of a clear visual hierarchy makes it
										difficult for users to find the information they're looking
										for and to understand how to proceed, leading to confusion
										and inefficiency.
									</ListItem>
									<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
										3. The sign-in process is unnecessarily complex, introducing
										barriers and extra steps that frustrate users and
										potentially deter them from logging in.
									</ListItem>
									<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
										4. Poor aesthetics and design choices detract from the user
										experience, negatively affecting user engagement and
										satisfaction by making the app less appealing and harder to
										use.
									</ListItem>
								</List>
								<H4
									sx={{
										fontWeight: "bold",
										marginTop: "20px",
										fontFamily: "'Montserrat', sans-serif",
									}}
								>
									Solutions
								</H4>
								<List>
									<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
										1. Streamline user flows to facilitate quicker, more
										confident decisions.
									</ListItem>
									<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
										2. Optimize information hierarchy to improve navigation and
										clarity.
									</ListItem>
									<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
										3. Simplify the sign-up process by breaking it into clear
										steps, with non-essential actions requested post-sign-up.
									</ListItem>
									<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
										4. Update the interface to a more modern, user-friendly
										design.
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</ProjectStepSection>
				</div>
				<div ref={ref2}>
					<ProjectStepSection title="Discover" id="2">
						<Grid item xs={12}>
							<H4
								sx={{
									fontWeight: "bold",
									marginTop: "20px",
									fontFamily: "'Montserrat', sans-serif",
								}}
							>
								Evaluation
							</H4>
							<Body1>
								I began with an evaluation of the current app using Nielsen’s 10
								principles for interaction design. The assessment revealed
								issues with confusion, aesthetics, overwhelming interfaces, poor
								navigation, and overall ineffectiveness.
							</Body1>
							<Grid container justifyContent="space-between"  >
								<Grid xs={4}>
									<Body1
										sx={{
											fontWeight: "bold",
										}}
									>
										Outdated interface
									</Body1>
								</Grid>
								<Grid xs={7}>
									<Body1>
										The overall appearance is unappealing, lacking visual
										attractiveness and a modern feel.
									</Body1>
								</Grid>
							</Grid>
							<Grid container justifyContent="space-between"  >
								<Grid xs={4}>
									<Body1
										sx={{
											fontWeight: "bold",
										}}
									>
										Overwhelming Layout
									</Body1>
								</Grid>
								<Grid xs={7}>
									<Body1>
										The app is cluttered with text-heavy sections, making quick
										scanning and understanding difficult for users.
									</Body1>
								</Grid>
							</Grid>
							<Grid container justifyContent="space-between"  >
								<Grid xs={4}>
									<Body1
										sx={{
											marginTop: "20px",
											fontWeight: "bold",
										}}
									>
										Ineffective design elements
									</Body1>
								</Grid>
								<Grid xs={7}>
									<Body1>
										Inappropriate use of font sizes, spacing, and margins blurs
										the distinction between primary and secondary information.{" "}
									</Body1>
								</Grid>
							</Grid>
							<Grid container justifyContent="space-between"  >
								<Grid xs={4}>
									<Body1
										sx={{
											fontWeight: "bold",
										}}
									>
										Misleading CTA
									</Body1>
								</Grid>
								<Grid xs={7}>
									<Body1>
										Some CTAs are not adequately highlighted, while other
										elements misleadingly appear interactive, confusing users.
									</Body1>
								</Grid>
							</Grid>
							<Grid container justifyContent="space-between"  >
								<Grid xs={4}>
									<Body1
										sx={{
											fontWeight: "bold",
										}}
									>
										Non-intuitive Navigation
									</Body1>
								</Grid>
								<Grid xs={7}>
									<Body1>
										The reliance on a hamburger menu obscures access to key
										features, making navigation less intuitive.
									</Body1>
								</Grid>
								<Grid container justifyContent="center">
									<Image
										src="/images/domino-app.gif"
										sx={{
											width: {
												sm: "50%",
												md: "40%",
												lg: "30%",
											},
										}}
									/>
								</Grid>
							</Grid>
							<H4
								sx={{
									fontWeight: "bold",
									marginTop: "20px",
									fontFamily: "'Montserrat', sans-serif",
								}}
							>
								User Research
							</H4>
							<Body1>
								To pinpoint the exact problems users face with the app's user
								experience and interface, I conducted research with frequent
								online pizza orders, gathering deeper insights.
							</Body1>
							<H4
								sx={{
									fontWeight: "bold",
									marginTop: "20px",
									fontFamily: "'Montserrat', sans-serif",
								}}
							>
								User Interview
							</H4>
							<Body1>
								Initially, I surveyed 10 individuals to gain comprehensive
								insights into the target audience's needs, pain points and
								overall impressions.
							</Body1>
							<Image src="/images/domino-piechart.webp" alt="piechart" />
							<H4
								sx={{
									fontWeight: "bold",
									marginTop: "20px",
									fontFamily: "'Montserrat', sans-serif",
								}}
							>
								Survey
							</H4>
							<Body1>
								I conducted interviews with 4 participants to delve into their
								challenges, needs, and experiences with ordering through the
								Domino's App.
							</Body1>
							<Body1>Questions I asked were:</Body1>

							<List>
								<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
									<ListItemIcon>
										<FiberManualRecordIcon fontSize="10" />
									</ListItemIcon>
									Where do you encounter difficulties while making an order?
								</ListItem>
								<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
									<ListItemIcon>
										<FiberManualRecordIcon fontSize="10" />
									</ListItemIcon>
									What features do you find most and least useful on the
									Domino’s App?
								</ListItem>
								<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
									<ListItemIcon>
										<FiberManualRecordIcon fontSize="10" />
									</ListItemIcon>
									Have you ever started an order but then decided not to
									complete it?
								</ListItem>
								<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
									<ListItemIcon>
										<FiberManualRecordIcon fontSize="10" />
									</ListItemIcon>
									Are there any design that you find particularly appealing or
									not?
								</ListItem>
								<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
									<ListItemIcon>
										<FiberManualRecordIcon fontSize="10" />
									</ListItemIcon>
									If you could change one thing about the Domino’s App to
									improve your experience, what would it be?
								</ListItem>
							</List>
							<Body1>They said:</Body1>
							<Image src="/images/domino-review.webp" alt="user review" />
							<H4
								sx={{
									fontWeight: "bold",
									marginTop: "20px",
									fontFamily: "'Montserrat', sans-serif",
								}}
							>
								Competitive Analysis
							</H4>
							<Body1>
								Following initial research, a detailed competitive analysis was
								conducted, focusing on user experience aspects such as interface
								design and feature sets, comparing directly with key
								competitors.
							</Body1>
						</Grid>
						<Image src="/images/domino-competitor.webp" alt="competitor" />
					</ProjectStepSection>
					<ProjectStepSection title="Define" id="3">
						<Grid container justifyContent="space-between">
							<Body1>
								To inform our design choices, I created two personas: one
								representing a current user of the Domino's app and another
								depicting a prospective user looking to try the app for the
								first time.
							</Body1>
							<Image
								src="/images/domino-persona.webp"
								alt="persona"
								sx={{
									marginBottom: "10px",
								}}
							/>
						</Grid>
						<H4
							sx={{
								fontWeight: "bold",
								marginTop: "20px",
								fontFamily: "'Montserrat', sans-serif",
							}}
						>
							Problem Statement
						</H4>
						<Body1>
							Subsequently, a clear problem statement was established, and
							insights were transformed into areas of opportunity using the 'How
							might We” approach.
						</Body1>
						<Body1>
							Domino's app needs a more intuitive and enhance interface because
							users want to navigate and complete orders effortlessly through a
							seamless and engaging ordering experience.
						</Body1>
						<H4
							sx={{
								fontWeight: "bold",
								marginTop: "20px",
								fontFamily: "'Montserrat', sans-serif",
							}}
						>
							How might we ...?
						</H4>
						<List>
							<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
								<ListItemIcon>
									<FiberManualRecordIcon fontSize="10" />
								</ListItemIcon>
								simplify the app’s interface to enhance navigational ease and
								user efficiency
							</ListItem>
							<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
								<ListItemIcon>
									<FiberManualRecordIcon fontSize="10" />
								</ListItemIcon>
								modernize the visual design to increase user engagement and
								satisfaction
							</ListItem>
							<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
								<ListItemIcon>
									<FiberManualRecordIcon fontSize="10" />
								</ListItemIcon>
								streamline the ordering process to minimize steps and reduce
								user frustration
							</ListItem>
							<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
								<ListItemIcon>
									<FiberManualRecordIcon fontSize="10" />
								</ListItemIcon>
								improve the customization experience to be more intuitive and
								less overwhelming
							</ListItem>
							<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
								<ListItemIcon>
									<FiberManualRecordIcon fontSize="10" />
								</ListItemIcon>
								optimize the sign-up and sign-in process to be quicker for new
								users
							</ListItem>
						</List>
						<H4
							sx={{
								fontWeight: "bold",
								marginTop: "20px",
								fontFamily: "'Montserrat', sans-serif",
							}}
						>
							User Flow
						</H4>
						<Body1>Afterwards, I created the user flow.</Body1>
						<Image src="/images/domino-userflow.webp" alt="user flow" />
					</ProjectStepSection>
					<ProjectStepSection title="Design" id="4">
						<Grid container justifyContent="space-between">
							<Body1>
								Moving to the design phase with a solid understanding of our
								users, I initially sketched out hand-drawn wireframes to outline
								the envisioned changes. These sketches evolved into
								high-fidelity wireframes and prototypes, enriched with insights
								from user feedback and competitive analysis. To ensure these
								designs met user needs, they were thoroughly tested with our
								identified personas, focusing on intuitiveness and satisfaction.
							</Body1>
							<Body1>
								In maintaining Domino's original branding, I recognized the
								brand's established market presence and the users' familiarity
								with it.
							</Body1>
							<Image
								src="/images/domino-iteration.webp"
								sx={{
									marginBottom: "10px",
									width: { sm: "100%" },
								}}
							/>
							<H4
								sx={{
									fontWeight: "bold",
									marginTop: "20px",
									fontFamily: "'Montserrat', sans-serif",
								}}
							>
								Usability Test
							</H4>
							<Body1>
								Usability testing involved three participants, aimed at
								evaluating their ability to complete key tasks—signing in,
								finding products, and checking out. The successful navigation
								through these tasks by all testers affirmed the effectiveness of
								the design modifications.
							</Body1>
							<Image src="/images/domino-usability.webp" alt="usability test" />
							<Body1>Testing highlighted some improvements, include</Body1>
							<List>
								<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
									<ListItemIcon>
										<FiberManualRecordIcon fontSize="10" />
									</ListItemIcon>
									making icons larger for readability
								</ListItem>
								<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
									<ListItemIcon>
										<FiberManualRecordIcon fontSize="10" />
									</ListItemIcon>
									introducing a feature to suggest favorite orders for quick
									selection
								</ListItem>
								<ListItem sx={{ fontFamily: "'Montserrat', sans-serif" }}>
									<ListItemIcon>
										<FiberManualRecordIcon fontSize="10" />
									</ListItemIcon>
									simplifying the application of coupons and rewards for user
									convenience
								</ListItem>
							</List>
						</Grid>
					</ProjectStepSection>
				</div>
				<div ref={ref3}>
					<ProjectStepSection title="Delivery" id="5">
						<Grid container justifyContent="space-between">
							<H4
								sx={{
									fontWeight: "bold",
									marginTop: "20px",
									fontFamily: "'Montserrat', sans-serif",
								}}
							>
								Hi-Fi Prototype
							</H4>
							<Image
								src="/images/domino-prototype.webp"
								alt="prototype"
								sx={{
									marginBottom: "10px",
									width: "100%",
								}}
							/>
							<Grid container justifyContent="center">
								<Button
									variant="outlined"
									component="a"
									href="https://www.figma.com/proto/fQF5Uochvt75Ijt4J4oe2X/Domino-Redesign?page-id=1%3A2&type=design&node-id=1-691&viewport=404%2C496%2C0.24&t=79LYfgmeHTxLgGDn-1&scaling=scale-down&starting-point-node-id=1%3A619&mode=design"
									target="_blank"
									rel="noopener noreferrer"
									sx={{
										color: "black",
										borderColor: "black",
									}}
								>
									View Prototype
								</Button>
							</Grid>
						</Grid>
						<H4
							sx={{
								fontWeight: "bold",
								marginTop: "20px",
								fontFamily: "'Montserrat', sans-serif",
							}}
						>
							Reflection
						</H4>
						<Body1>
							It’s actually my first time to redesign a product on an existing
							product from user research to interface development. It was a
							meaningful experience to me and I'm proud of what I accomplished.
							This project taught me the critical importance of methodical
							research in UX, emphasizing that my personal opinions don't
							represent the entire user base. Listening to user and understand
							them. Be empathetic. This is the first step in UX world.
						</Body1>
						<H4
							sx={{
								fontWeight: "bold",
								marginTop: "20px",
								fontFamily: "'Montserrat', sans-serif",
							}}
						>
							If I have more time..
						</H4>
						<Body1>
							delve deeper into specific aspects, such as the ordering process,
							rather than focusing broadly on general issues.
						</Body1>
					</ProjectStepSection>
				</div>
			</ProjectContentContainer>
		</InViewContext.Provider>
	);
};

export default OverviewSection;
