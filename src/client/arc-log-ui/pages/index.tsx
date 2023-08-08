import React, { useEffect, useState } from 'react';
import os from 'os';

function Index() {
  const [message, setMessage] = useState('Loading...');
  const [appRoles, setAppRoles] = useState([]);

  // our API runs on 8080, swap the port for the server URL 
  // shown here for demo - use getServerSideProps in real use 
  const serverURL = 'https://' + os.hostname().replace('-3000', '-8080')
  
  console.log(serverURL)
  useEffect(() => {    
    fetch(serverURL + '/api/home')
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, [serverURL]);

  useEffect(() => {
    fetch(serverURL + '/api/roles')
      .then((response) => response.json())
      .then((data) => {
        setAppRoles(data.app_roles);
      });
  }, [serverURL]);

  return (
    <div>
      <div>{message}</div>
      <div>App Roles:</div>
      {appRoles.map((role, index) => (
        <div key={index}>{role}</div>
      ))}
    </div>
  );
}

export default Index;
