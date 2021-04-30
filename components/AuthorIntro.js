import { Col, Media, Image, } from 'react-bootstrap';

const AuthorIntro = () =>
    <div className="banner">
        <Media className="admin-intro">
          {/* <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src="https://avatars1.githubusercontent.com/u/9482724?s=460&u=69a6acab13fd5547a4e316e496b573271077147f&v=4"
            alt="Generic placeholder"
          /> */}
          <Media.Body>
            <h1 className="mb-3">
            Hello, I'm Craig Parfitt
            an UX/UI, Multi-disciplined designer
            </h1>
            <p className="welcome-text">
              As a Multi-disciplined designer, with over 20 years experiance in Webb Applications, Branding and Corporate design. I bring a wealth of knowledge that I can alongside my clients, identify problems, solve them and create a better and enjoyable online experience for the user.
            </p>
          </Media.Body>
        </Media>
    </div>

export default AuthorIntro;
