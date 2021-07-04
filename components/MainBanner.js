import { Col, Media, Image, } from 'react-bootstrap';

const MainBanner = () => {
  return (
    <div className="banner banner__main">
      <h1 className="banner__main--heading mb-3">
        Hi, I'm Craig and thanks for visiting my portfolio which focuses on UI/UX Design.
      </h1>
      <h2 className="banner__main--intro">
        I am a multidisciplinary UI/UX creative based UK.
        With a background of over 20 years in branding, corporate and web design. I bring a wealth of Experience knowledge that I can alongside clients identify problems, solve them and create a better and more enjoyable online user experience.
      </h2>
      <div className="banner__main--projects">
        <h3>Featured Projects</h3>
      </div>
    </div>
  )
}

export default MainBanner;
