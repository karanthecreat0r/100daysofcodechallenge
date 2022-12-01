import React from "react";
import Card from "./Card";
import Contacts from "../contacts";

function createCard(Contacts) {
  return (
    <Card
      key={Contacts.id}
      name={Contacts.name}
      img={Contacts.imgURL}
      tel={Contacts.phone}
      email={Contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {Contacts.map(createCard)}
      {/* <Card
        name={Contacts[0].name}
        img={Contacts[0].imgURL}
        tel={Contacts[0].phone}
        email={Contacts[0].email}
      />
      <Card
        name={Contacts[1].name}
        img={Contacts[1].imgURL}
        tel={Contacts[1].phone}
        email={Contacts[1].email}
      />
      <Card
        name={Contacts[2].name}
        img={Contacts[2].imgURL}
        tel={Contacts[2].phone}
        email={Contacts[2].email} */}
      />
    </div>
  );
}

export default App;
