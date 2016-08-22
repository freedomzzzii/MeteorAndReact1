import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import FormLogin from '../pages/FormLogin.jsx';

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
