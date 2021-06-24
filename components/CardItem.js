import { Card } from 'react-bootstrap';
import BlockContent from '@sanity/block-content-to-react';
import Link from 'next/link';
import { urlFor } from 'lib/api';

const CardItem = ({number, title, subtitle, projectIntro, projectRole, image, link}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Text className="card-main-number"> {number} </Card.Text>
        <Card.Title className="card-main-title"> {title} </Card.Title>
          <Card.Text className="card-main-text"> {subtitle} </Card.Text>
        <BlockContent className="card-project-role" blocks={projectRole}> </BlockContent>
        <Card.Text className="card-project-text"> {projectIntro} </Card.Text>
        { link &&
          <Link {...link}>
          <a className="card-button">
            Read the full story >
          </a>
        </Link>
        }
        </Card.Body>
          <Card.Img
            src={
              urlFor(image)
                .height(1050)
                .crop('center')
                .fit('clip')
                .url()}
            alt="Card image cap"
          />
    </Card>
  )
}

export default CardItem;
