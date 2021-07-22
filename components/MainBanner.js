import { Col, Media, Image, } from 'react-bootstrap';
import  { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MainBanner = () => {
  return (
    <div className="banner banner__main">
      <h1 className="banner__main--heading mb-3">
        Hi, I'm Craig and thanks for visiting my portfolio which focuses on UI/UX Design.
      </h1>
      <h2 className="banner__main--intro">
        I am a multidisciplinary UI/UX creative based in the UK.
        With a background of over 20 years in branding, corporate and web design, I bring a wealth of experience and knowledge to each project that can help clients to identify and solve their communication problems, creating a better and more enjoyable online user experience.
      </h2>
      <div className="banner__main--projects">
        <h3>Featured Projects  <FontAwesomeIcon icon={faAngleDown}/></h3>
      </div>
    </div>
  )
}

export default MainBanner;
