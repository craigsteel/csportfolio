import { Row, Container } from 'react-bootstrap';
import Head from 'next/head';
import BlogNavbar from './BlogNavbar';
import PageFooter from './PageFooter';

export default function PageLayout({children, className}) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <BlogNavbar />

      <Row className={`page-wrapper ${className}`}>
        {children}
      </Row>

      <PageFooter />
    </>
  )
}
