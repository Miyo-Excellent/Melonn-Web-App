import { useMemo } from 'react';
import { Provider } from 'react-redux';

import { Redux } from '.';
import { ReduxProviderPropTypes } from 'types';

export default function ReduxProvider({ children }: ReduxProviderPropTypes) {
  const redux = useMemo(() => new Redux(), []);

  return <Provider store={redux.store}>{children}</Provider>;
}
