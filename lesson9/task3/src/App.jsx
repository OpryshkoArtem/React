import React from 'react';
import UserForm from './UserForm.jsx';

class App extends React.Component {
  createUser = obj => {
    console.log(obj);
  };
  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}
export default App;
