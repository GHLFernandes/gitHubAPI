import React, { useState } from 'react';
import './App.css';
import { SearchUser } from './components/SearchUser';
import { InfoUser } from './components/InfoUser';

export const App = () => {
  const [userData, setUserData] = useState<IUser>();

  const handleUserData = (userData: IUser | undefined) =>{
    setUserData(userData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchUser getUserData={handleUserData}/>
        <InfoUser user={userData}/>
      </header>
    </div>
  );
};

export default App;