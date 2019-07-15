import React, { lazy, Suspense } from 'react';
import TopBarLoading from 'components/Loading/TopBarLoading';

const loadable = (importFunc, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc);

  return (props) => (
    <Suspense fallback={fallback || <TopBarLoading />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
