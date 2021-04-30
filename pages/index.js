import { Container, Row, Col, } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';

import { getAllBlogs } from 'lib/api';

export default function Home({blogs}) {
  return (
    <PageLayout>
      <AuthorIntro />
        <hr/>
          { blogs.map(blog =>
            <Container fluid key={blog.slug}>
              <CardItem
                number={blog.number}
                title={blog.title}
                date={blog.date}
                subtitle={blog.subtitle}
                image={blog.featuredImage}
                slug={blog.slug}
                link={{
                  href: '/blogs/[slug]',
                  as:`/blogs/${blog.slug}`
                }}
              />
            </Container>
            )
          }
    </PageLayout>
  )
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    }
  }
}
