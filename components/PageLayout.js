import { Row } from 'react-bootstrap';
import Head from 'next/head';
import BlogNavbar from './BlogNavbar';
import PageFooter from './PageFooter';
import { motion } from "framer-motion";

export default function PageLayout({children, className}) {
  return (
    <>
      <motion.div exit={{opacity: 0}}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <BlogNavbar />

        <Row className={`page-wrapper ${className}`}>
          {children}
        </Row>

        <PageFooter />
      </motion.div>
    </>
  )
}
