export const ContactList = ({ contacts, onChangeFilter, filter, onDelete }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <div>
        <label>Find contacts by name</label>
        <input type="text" value={filter} onChange={onChangeFilter} />
      </div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => onDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
