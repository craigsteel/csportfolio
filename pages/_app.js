import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/darcula.css';
import 'styles/styles.scss';
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from 'framer-motion';

const MyBlog = ({ Component, pageProps }) => (
  <AnimatePresence exitBeforeEnter>
    <Component {...pageProps} />
    <Analytics />
  </AnimatePresence>
);

export default MyBlog;
