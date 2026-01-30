
const formEL = document.querySelector('.form');
const nameEl = document.querySelector('#name');
const emailEL = document.querySelector('#email');
const phoneEL = document.querySelector('#phone-number');
const motifEL = document.querySelector('#motif');
const dateEL = document.querySelector('#date');

let data = []
console.log(data);
data.push(
  {
    name: "Sara Amrani",
    phone: "0678451239",
    email: "sara.amrani@gmail.com",
    motif: "Dental check",
    visitDate: "2026-02-01"
  },
  {
    name: "Youssef Benali",
    phone: "0623987456",
    email: "y.benali@yahoo.com",
    motif: "Blood analysis",
    visitDate: "2026-02-03"
  },
  {
    name: "Amina Rachdi",
    phone: "0698745123",
    email: "amina.r@gmail.com",
    motif: "Follow-up visit",
    visitDate: "2026-02-06"
  }
);

formEL.addEventListener('submit', submitAppointment);

function submitAppointment(e) {
  e.preventDefault();
  const name = nameEl.value.trim();
  const email = emailEL.value.trim();
  const phone = phoneEL.value.trim();
  const motif = motifEL.value.trim();
  const date = dateEL.value.trim();
  console.log(name);

  const allInputs = document.querySelectorAll(".input-box")
  console.log(allInputs);
  let isValid = true
  allInputs.forEach(input => {
    if (input.value.trim() === '') {
      isValid = false
      input.style.borderColor = '#FA5C5C'
    } else {
      input.style.borderColor = '#ddd'
    }
  })

  if (isValid === true) {
    data.push({
      name: name,
      phone: phone,
      email: email,
      motif: motif,
      visitDate: date
    });
    renderAppointments(data);
  }
}
function renderAppointments(list) {
  console.log('test');
  const tbodyCon = document.querySelector('.tbody-con');
  tbodyCon.innerHTML = "";
  if (!list || data.length === 0) {
    tbodyCon.innerHTML = `
            <tr>
                <td colspan="6" id="test">No appointments at the moment</td>
            </tr>
        `;
  } else {
    list.forEach((element, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <tr>
              <td>${element.name}</td>
              <td>${element.phone}</td>
              <td>${element.email}</td>
              <td>${element.motif}</td>
              <td>${element.visitDate}</td>
              <td data-title="Action"><span class="material-symbols-outlined"
              onClick="deleteItem(${index})"
              >
                                delete
                            </span></td>
        </tr>
      `
      tbodyCon.appendChild(tr)
    })
  }
}

function deleteItem(index) {
  data.splice(index, 1);
  renderAppointments(data);
  console.log('click');
}

const searchEl = document.querySelector('.search-input');
function searchItem() {
  const searchValue = searchEl.value.toLowerCase();
  const results = data.filter(item => {
    return (
      item.name.toLowerCase().includes(searchValue) ||
      item.phone.toLowerCase().includes(searchValue) ||
      item.email.toLowerCase().includes(searchValue)
    );
  })

  console.log(results);
  renderAppointments(results)
}
searchEl.addEventListener('input', searchItem);

renderAppointments(data)
