import { Container, Row, Col, } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import MainBanner from 'components/MainBanner';
import CardItem from 'components/CardItem';

import { getAllBlogs } from 'lib/api';
import { useGetBlogs } from 'actions';


export default function Home({blogs: initialData}) {

  const { data: blogs, error } = useGetBlogs(initialData);

    return (
    <PageLayout>
      <MainBanner />
        <hr/>
          { blogs.map(blog =>
            <Container fluid key={blog.slug}>
              <CardItem
                number={blog.number}
                title={blog.title}
                date={blog.date}
                subtitle={blog.subtitle}
                projectIntro={blog.projectIntro}
                projectRole={blog.projectRole}
                text={blog.text}
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
  const blogs = await getAllBlogs({offset: 0});
  return {
    props: {
      blogs
    }
  }
}
