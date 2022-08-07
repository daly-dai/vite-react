import { lazy } from 'react';
import { LazyLoad } from '@packages/components/index';

export default [
  {
    path: 'page1',
    element: LazyLoad(lazy(() => import('@pages/Dashboard/page1')))
  }
];
