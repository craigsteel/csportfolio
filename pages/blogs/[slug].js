import { Container, Row, Col, } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import { getBlogBySlug, getAllBlogs, urlFor } from 'lib/api';
import BlogHeader from 'components/BlogHeader';
import BlogContent from 'components/BlogContent';
import PreviewAlert from 'components/PreviewAlert';

const BlogDetail = ({blog, preview}) => {
  return (
    <PageLayout className="blog-detail-page">
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            { preview && <PreviewAlert /> }
            <BlogHeader
              title={blog.title}
              subtitle={blog.subtitle}
              featuredImage={urlFor(blog.featuredImage).url()}
              date={blog.date}
              projectRole={blog.projectRole}
              blogMainIntro={blog.blogMainIntro}
            />
          </Col>
        </Row>
      </Container>
      <hr/>
        <Row>
          <Col md={{ span: 10, offset: 1}}>
            <BlogContent
              content={blog.content}
            />
          </Col>
        </Row>
    </PageLayout>
  )
}

export async function getStaticProps({params, preview = false, previewData}) {
  const blog = await getBlogBySlug(params.slug, preview);
  return {
    props: { blog, preview },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs?.map(b => ({params: {slug: b.slug}}));
  return {
    paths,
    fallback: false
  }
}

export default BlogDetail;
