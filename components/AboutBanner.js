import { Col, Media, Image, } from 'react-bootstrap';

const AboutBanner = () =>
  <div className="banner banner__about">
    <h1 className="banner__about--heading mb-3">
      Hi, I'm Craig and thanks for visiting my portfolio which focuses on UI/UX Design.
    </h1>
      <h2 className="banner__about--intro">
        My passion for design has enabled me to pursue a career that I love, whether in  advertising with its dynamic pace of the studio, deadlines and creative teams, to the corporate world of annual reporting, strategic marketing of brands to UX/UI Design and Development of web applications.
      </h2>
        {'\n'}
      <h2 className="banner__about--intro mb-5">
        Over the years I have gained a vast amount of knowledge in leading teams, presenting, pitching to clients, working alongside developers, managing budgets and working to tight deadlines.
      </h2>
    </div>

export default AboutBanner;
