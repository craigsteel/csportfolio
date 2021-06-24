import { Col, Media, Image, } from 'react-bootstrap';

const MainBanner = () =>
  <div className="banner">
        <Media>
          <Media.Body>
            <h1 className="banner__heading mb-3">
              Hi, I'm Craig and thanks for visiting my portfolio which focuses on UI/UX Design.
            </h1>
            <h2 className="banner__intro">
              I am a multidisciplinary UI/UX creative based UK.
              With a background of over 20 years in branding, corporate and web design. I bring a wealth of Experience knowledge that I can alongside clients identify problems, solve them and create a better and more enjoyable online user experience.
            </h2>
            <div className="banner__projects">
              <h3>Featured Projects</h3>
            </div>
          </Media.Body>
        </Media>
    </div>

export default MainBanner;
