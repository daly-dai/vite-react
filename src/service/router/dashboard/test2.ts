import { lazy } from 'react';
import { LazyLoad } from '@packages/components/index';
export default [
  {
    path: 'page2',
    element: LazyLoad(lazy(() => import('@pages/Dashboard/page2')))
  }
];
