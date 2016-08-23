import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {FlowRouter} from 'meteor/kadira:flow-router';

//component
import Navbar from '../ui/Navbar.jsx';
import Header from '../ui/Header.jsx';
import Contract from '../ui/Contract.jsx';
import Test from '../ui/Test.jsx';

class Home extends Component
{
  render()
  {
    return (
      <div id="page-top">
        <section>
          <Contract/>
        </section>
      </div>
    )
  }
}


export default createContainer(() => {
  return {

  }
}, Home);
