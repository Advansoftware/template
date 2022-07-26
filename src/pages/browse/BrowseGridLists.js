import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@mui/material';
import ImageList1 from '../../components/widgets/grid-lists/ImageList1';
import ImageList2 from '../../components/widgets/grid-lists/ImageList2';
import ImageList3 from '../../components/widgets/grid-lists/ImageList3';
import ImageList4 from '../../components/widgets/grid-lists/ImageList4';
import ImageList5 from '../../components/widgets/grid-lists/ImageList5';
import ImageList6 from '../../components/widgets/grid-lists/ImageList6';
import WidgetPreviewer from '../../components/WidgetPreviewer';
import gtm from '../../lib/gtm';

const BrowseGridLists = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Browse: Grid Lists | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Box>
            <WidgetPreviewer
              element={<ImageList1 />}
              name="Grid list with image"
            />
            <WidgetPreviewer
              element={<ImageList2 />}
              name="Mixed grid list"
            />
            <WidgetPreviewer
              element={<ImageList3 />}
              name="Grid list with bottom button"
            />
            <WidgetPreviewer
              element={<ImageList4 />}
              name="Grid list with avatar and cover picture "
            />
            <WidgetPreviewer
              element={<ImageList5 />}
              name="Grid list with picture and bottom buttons"
            />
            <WidgetPreviewer
              element={<ImageList6 />}
              name="Grid list with picture and bottom buttons"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BrowseGridLists;
