import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

//Component or comtainer
import App from '../layouts/App.jsx';

//Component pages
import Home from '../pages/Home.jsx';

FlowRouter.route('/', {
  name: 'root',
  action()
  {
    mount(App, {
      content: <Home/>,
    });
  },
});
