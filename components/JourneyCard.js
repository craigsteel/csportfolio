import { Container, Col, Row } from 'react-bootstrap';


const JourneyCard = ({link}) => {
  return (
		<Container>
			<div className="journey">
				<h2>MY JOURNEY</h2>
				<Row>
					<Col md={{ span: 4 }}>
						<h3>CRAIG STEEL DESIGN</h3>
						<p>UI UX SENIOR DESIGNER - 2010 - Present</p>
						<li>Creative Output</li>
						<li>Branding</li>
						<li>Design / Build of Website Applications</li>
						<li>Ecommerce Websites / Wordpress Themes</li>
						<li>UI/UX Design</li>
						<li>Photographic art direction</li>
						<li>Commissioning Photographers</li>
						<li>Commissioning illustrators</li>
						<li>Taking client briefs</li>
						<li>Creating client briefs</li>
						<li>Presenting to clients</li>
						<li>Creative team management</li>
						<li>Project management</li>
						<li>Final print</li>
					</Col>
					<Col md={{ span: 4 }}>
						<h3>THE FUSION EFFECT</h3>
						<p>Senior Designer - 2003-10</p>
						<li>Creative output</li>
						<li>Branding</li>
						<li>Annual Reports</li>
						<li>Presenting to clients</li>
						<li>Creative team management</li>
						<li>Project management</li>
						<li>Final print</li>
					</Col>
					<Col md={{ span: 4 }}>
						<h3>CAIRNES DESIGN</h3>
						<p>Senior Designer - 1994-03</p>

						<h3>CLOCKWORK</h3>
						<p>Design Project Manager - 1992-94</p>

						<h3>LONDON CREATIVE DESIGN</h3>
						<p>Senior Designer - 1988-92</p>
					</Col>
				</Row>
				<div className="journey__pdf-download">
					<a href="/craigParfittCV.pdf" target='_blank' download>Download My CV </a>
				</div>
			</div>
		</Container>
	);
}

export default JourneyCard
