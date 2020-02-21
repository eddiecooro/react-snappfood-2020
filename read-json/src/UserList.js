import React from 'react';
import AverageAge from './AverageAge';
import UserItem from './UserItem';
import users from './users.json';

const UserList = () => {
  const admins = users.filter(user => user.role === 'admin');
  console.log(admins);
  console.log();
  return (
    <div>
      {users.map((user, i) =>
        user.role === 'user' ? <UserItem key={i} name={user.name} /> : null
      )}
      <AverageAge
        average={
          admins.reduce((current, next) => current + next.age, 0) /
          admins.length
        }
      />
    </div>
  );
};

export default UserList;
