import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import Home from '../pages/Home.jsx';

//stateless function
export const App = (props) => (
  <main>
    {props.content}
  </main>
)

export default createContainer(() => {
  return {
  }
}, App);
