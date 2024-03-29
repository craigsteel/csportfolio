import { Row } from 'react-bootstrap';
import Head from 'next/head';
import BlogNavbar from './BlogNavbar';
import PageFooter from './PageFooter';
import { motion } from "framer-motion";

export default function PageLayout({children, className}) {
  return (
    <>
      <motion.div
        initial={{
          x: 0,
          opacity: 0,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="google-site-verification"
            content="rOQryTT28MDXzXvLfrJjWTa3GX16RkyJqPhFJEkVis0"
          />
        </Head>

        <BlogNavbar />

        <Row className={`page-wrapper ${className}`}>{children}</Row>

        <PageFooter />
      </motion.div>
    </>
  );
}
