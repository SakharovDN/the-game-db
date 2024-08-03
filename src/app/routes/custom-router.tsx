import { useLayoutEffect, useState } from 'react';
import { Router, RouterProps } from 'react-router-dom';

import { environment } from '@src/environment';
import { BrowserHistory } from 'history';

interface CustomRouterProps extends Partial<RouterProps> {
  history: BrowserHistory;
}

export const CustomRouter = ({ history, ...props }: CustomRouterProps) => {
  const { action, location } = history;
  const [state, setState] = useState({ action, location });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      basename={environment.baseUrl}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};
