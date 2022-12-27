import React from 'react';

import logo from './logo.svg';
import './App.css';

const CuePrompter = React.lazy(() => import('./pages'));

function App() {
  return <CuePrompter />;
}

export default App;
