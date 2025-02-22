import React, { useEffect, useState } from 'react';

import UserList from '../components/UsersList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedusers] = useState();

  useEffect(() => {
    const sendRquest = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('http://localhost:5000/api/users');
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedusers(responseData.users);
        setIsLoading(false);
      } catch (error) {
        setError(error.message || 'Oops... something broke, please try again');
      }
      setIsLoading(false);
    };
    sendRquest();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className='center'>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UserList items={loadedUsers} />}
    </React.Fragment>
  );
};

export default Users;
