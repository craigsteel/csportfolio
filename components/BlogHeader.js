import { urlFor } from 'lib/api';
import { Card } from 'react-bootstrap';


export default function BlogHeader({author, title, subtitle, date, featuredImage}) {
  return (
    <div className="blog-detail-header">
      <p className="lead mb-0">
        {/* <img
          src={'https://via.placeholder.com/150'}
          className="rounded-circle mr-3"
          height="50px"
          width="50px"
          alt="avatar"/> */}
        {author?.name}
        {', '} {date}
      </p>
      <h1 className="font-weight-bold blog-detail-header-title mb-0">{title}</h1>
      <h2 className="blog-detail-header-subtitle mb-3">{subtitle}</h2>
        {/* Check if contains cover image */}
          <Card.Img
            src={urlFor(featuredImage).height(1050).url()}
            alt="Card image cap"
          />
    </div>
  )
}
