// Define variables
const appointmentForm = document.getElementById('appointment-form');
const appointmentName = document.getElementById('appointment-name');
const appointmentEmail = document.getElementById('appointment-email');
const appointmentPhone = document.getElementById('appointment-phone');
const appointmentTableBody = document.getElementById('appointment-table-body');
const appointmentTable = document.getElementById('appointment-table');

let appointments = [];

// Fetch all appointments
axios.get('https://crudcrud.com/api/1cf2bc5ace50433daa4c1db33dda4cf4/Appointment')
  .then((response) => {
    appointments = response.data;
    renderAppointments();
  })
  .catch((error) => {
    console.error('Error fetching appointments', error);
  });

// Add new appointment
appointmentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = appointmentName.value;
  const email = appointmentEmail.value;
  const phone = appointmentPhone.value;

  axios.post('https://crudcrud.com/api/1cf2bc5ace50433daa4c1db33dda4cf4/Appointment', { name, email, phone })
    .then((response) => {
      appointments.push(response.data);
      renderAppointments();
      appointmentForm.reset();
    })
    .catch((error) => {
      console.error('Error adding appointment', error);
    });
});

// Render all appointments
function renderAppointments() {
  appointmentTableBody.innerHTML = '';

  appointments.forEach((appointment, index) => {
    const row = document.createElement('tr');

    const nameColumn = document.createElement('td');
    nameColumn.innerText = appointment.name;
    row.appendChild(nameColumn);

    const emailColumn = document.createElement('td');
    emailColumn.innerText = appointment.email;
    row.appendChild(emailColumn);

    const phoneColumn = document.createElement('td');
    phoneColumn.innerText = appointment.phone;
    row.appendChild(phoneColumn);

    const actionColumn = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.className = 'btn btn-primary btn-sm';
    editButton.addEventListener('click', () => editAppointment(index));
    actionColumn.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.addEventListener('click', () => deleteAppointment(index));
    actionColumn.appendChild(deleteButton);

    row.appendChild(actionColumn);

    appointmentTableBody.appendChild(row);
  });
}

// Edit existing appointment
function editAppointment(index) {
  const appointment = appointments[index];
  appointmentName.value = appointment.name;
  appointmentEmail.value = appointment.email;
  appointmentPhone.value = appointment.phone;

  // Remove appointment from list and local storage
  appointments.splice(index, 1);

  // Re-render list
  renderAppointments();
}

// Delete existing appointment
function deleteAppointment(index) {
  const appointment = appointments[index];

  axios.delete(`https://crudcrud.com/api/1cf2bc5ace50433daa4c1db33dda4cf4/Appointment/${appointment._id}`)
    .then(() => {
      // Remove appointment from list
      appointments.splice(index, 1);

      // Re-render list
      renderAppointments();
    })
    .catch((error) => {
      console.error('Error deleting appointment', error);
    });
}

function renderAppointments() {
    axios.get(apiUrl)
      .then(function (response) {
        appointments = response.data;
        var tableBody = document.getElementById("table-body");
        tableBody.innerHTML = "";
        appointments.forEach(function (appointment, index) {
          var row = document.createElement("tr");
          var indexCell = document.createElement("td");
          var nameCell = document.createElement("td");
          var emailCell = document.createElement("td");
          var phoneCell = document.createElement("td");
          var actionsCell = document.createElement("td");
          var editButton = document.createElement("button");
          var deleteButton = document.createElement("button");
          editButton.setAttribute("class", "btn btn-primary");
          editButton.setAttribute("data-toggle", "modal");
          editButton.setAttribute("data-target", "#appointmentModal");
          editButton.innerText = "Edit";
          deleteButton.setAttribute("class", "btn btn-danger");
          deleteButton.innerText = "Delete";
          editButton.addEventListener("click", function () {
            editAppointment(index);
          });
          deleteButton.addEventListener("click", function () {
            deleteAppointment(index);
          });
          indexCell.innerText = index + 1;
          nameCell.innerText = appointment.name;
          emailCell.innerText = appointment.email;
          phoneCell.innerText = appointment.phone;
          actionsCell.appendChild(editButton);
          actionsCell.appendChild(deleteButton);
          row.appendChild(indexCell);
          row.appendChild(nameCell);
          row.appendChild(emailCell);
          row.appendChild(phoneCell);
          row.appendChild(actionsCell);
          tableBody.appendChild(row);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  