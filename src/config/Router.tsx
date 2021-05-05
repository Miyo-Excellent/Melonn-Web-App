import type { ReactChild } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Authorization } from './';

export default ({ children }: { children: ReactChild }) => (
  <Router>
    <Authorization />

    {children}
  </Router>
);
