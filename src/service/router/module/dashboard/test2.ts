import { lazy } from 'react';
// import { lazyLoad } from '@packages/components/index';
export default [
  {
    path: 'page2',
    element: lazy(() => import('@pages/Dashboard/page2'))
  }
];
