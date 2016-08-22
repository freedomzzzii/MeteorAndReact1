import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {FlowRouter} from 'meteor/kadira:flow-router';

class FormLogin extends Component
{
  render()
  {
    return (
      <section>
        <h3>Login</h3>
        <button>hey</button>
      </section>
    )
  }
}


export default createContainer(() => {
  return {

  }
}, FormLogin);
