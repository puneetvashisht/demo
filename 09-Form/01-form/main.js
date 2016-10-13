
var contacts = [
    {key: 1, name: "Puneet", email: "puneet@gmail.com", description: "Soft Skills Training Consultant, Corporate Training "},
    {key: 2, name: "Miley", email: "miley@example.com"},
    {key: 3, name: "Tom"},
//  {key: 4, email: 'abc@xyz.com'},
    {key: 5, name: "Ram", email: 'ram@fb.com'}
]

var newContact = {name: "", email: "", description: ""}

ReactDOM.render(
  React.createElement(ContactView, {
    contacts: contacts,
    newContact: newContact
  }),
  document.getElementById('my-app')
)
