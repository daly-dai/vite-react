import { lazy } from 'react';
// import { lazyLoad } from '@packages/components/index';

export default [
  {
    path: 'page1',
    element: lazy(() => import('@pages/Dashboard/page1'))
  }
];
