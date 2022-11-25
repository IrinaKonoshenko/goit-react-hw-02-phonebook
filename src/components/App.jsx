import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { FormCreate } from './FormCreate/FormCreate';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  addContact = contact => {
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  onChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filteredContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
  };

  onDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    return (
      <div>
        <FormCreate onSubmit={this.addContact} />
        <ContactList
          contacts={this.filteredContacts()}
          filter={this.state.filter}
          onChangeFilter={this.onChangeFilter}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}
