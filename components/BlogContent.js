import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from 'components/HighlightCode';
import { urlFor } from 'lib/api';

const serializers = {
  types: {
    code: ({node: {language, code, filename}}) => {
      return (
        <HighlightCode language={language}>
          {code}
          <div className="code-filename">
            {filename}
          </div>
        </HighlightCode>
      )
    },
    image: ({node: {asset, alt, position = 'center'}}) => {
      return (
        <div className={`blog-image blog-image-${position}`}>
<<<<<<< HEAD
          <img src={urlFor(asset).fit("max").url()} />
          <div className="image-alt">{alt}</div>
        </div>
      );
    },
=======
          <img src={urlFor(asset).fit('max').url()} />
          <div className="image-alt">
            {alt}
          </div>
        </div>
      )
    }
>>>>>>> f8c36bfed569c0bfc00591b8e2d1e54aa385fbe8
  }
}

const BlogContent = ({content}) =>
  <BlockContent
    serializers={serializers}
    blocks={content}
  />

export default BlogContent;
