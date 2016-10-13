
var CONTACT_TEMPLATE = {name: "", email: "", description: "", errors: null}

// The app's complete current state
var state = {};

// Make the given changes to the state and perform any required housekeeping
function setState(changes) {
  Object.assign(state, changes);
  
  ReactDOM.render(
    React.createElement(ContactsView, Object.assign({}, state, {
      onNewContactChange: updateNewContact,
      onNewContactSubmit: submitNewContact,
    })),
    document.getElementById('react-app')
  );
}

// Set initial data
setState({
  contacts: [
    {key: 1, name: "Puneet", email: "puneet@gmail.com", description: "Soft Skills Training Consultant, Corporate Training "},
    {key: 2, name: "Miley", email: "miley@example.com"},
  ],
  newContact: Object.assign({}, CONTACT_TEMPLATE),
});

function updateNewContact(contact) {
  setState({ newContact: contact });
}

function submitNewContact() {
  var contact = Object.assign({}, state.newContact, {key: state.contacts.length + 1, errors: {}});
  
  if (!contact.name) {
    contact.errors.name = ["Please enter your new contact's name"]
  }
  if (contact.email && !/.+@.+\..+/.test(contact.email)) {
//  if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(contact.email)) {
    contact.errors.email = ["Please enter valid contact's email"]
  }

  setState(
    Object.keys(contact.errors).length === 0
    ? {
        newContact: Object.assign({}, CONTACT_TEMPLATE),
        contacts: state.contacts.slice(0).concat(contact),
      }
    : { newContact: contact }
  )
}
