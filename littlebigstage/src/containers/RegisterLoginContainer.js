import React, { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Register from '../components/Register';
import Login from '../components/Login';
import { useHistory, withRouter } from 'react-router-dom';

import { SearchMoviesContext } from '../App';

export const RegisterLoginContainer = ({ dispatch }) => {
  const [tab, setTab] = React.useState({
    tabIndex: 1,
  });
  return (
    <Tabs selectedIndex={tab.tabIndex} onSelect={(tabIndex) => setTab({ tabIndex })}>
      <TabList>
        <Tab>Register</Tab>
        <Tab>Login</Tab>
      </TabList>
      <div>
        <TabPanel>
          <Register setTab={setTab} />
        </TabPanel>
        <TabPanel>
          <Login dispatch={dispatch}/>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default RegisterLoginContainer;
