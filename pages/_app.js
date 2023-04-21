import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/darcula.css';
import 'styles/styles.scss';
import { AnimatePresence } from 'framer-motion';

const MyBlog = ({ Component, pageProps }) =>
<AnimatePresence exitBeforeEnter>
    <Component
    {...pageProps}
  />;
</AnimatePresence>


  export default MyBlog;
