import React from 'react';
import { UserChildren, UserClass, UserFunction, Button } from './user';


export default class App extends React.Component {
  state = {
    users: [
      { name: 'Ivan', years: 30 },
      { name: 'Marko', years: 35 },
      { name: 'Ana', years: 25 },
    ],
    children: 'A hobi mi je plivanje.',
  };

  changeYear= () => {
   const { users } = this.state;
   function randomNbr(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

    const newUsers = users.map(user => {
      return { ...user, years: randomNbr(18,99) };
    });
    this.setState({ users: newUsers });
    };

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <UserFunction name={users[0].name} years={users[0].years} />
        <UserFunction name={users[1].name} years={users[1].years} />
        <UserClass name={users[2].name} years={users[2].years} />
        <UserChildren name={users[2].name} years={users[2].years}>
          A hobi mi je plivanje.
        </UserChildren>
        <Button name="Promijeni godine." onClick={this.changeYear}></Button>
      </div>
    );
  }
}
