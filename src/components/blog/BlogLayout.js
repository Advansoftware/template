import { Outlet } from 'react-router-dom';
import BlogNavbar from './BlogNavbar';
import Footer from '../Footer';
import { experimentalStyled } from '@mui/material';

const BlogLayoutRoot = experimentalStyled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
  paddingTop: 64
}));

const BlogLayout = () => (
  <BlogLayoutRoot>
    <BlogNavbar />
    <Outlet />
    <Footer />
  </BlogLayoutRoot>
);

export default BlogLayout;
