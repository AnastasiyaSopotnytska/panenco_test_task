import React from 'react';
import { Team } from './components/Team';
import './style/App.scss';

export const App: React.FC = () => {
  return (
    <>
      <h1 className="heading">NBA profile</h1>
      <Team />
    </>
  );
};
