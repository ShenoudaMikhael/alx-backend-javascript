interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
let student1: Student = {
    firstName: 'AA',
    lastName: 'BB', age: 10, location: 'KFC'
}

let student2: Student = {
    firstName: 'CC',
    lastName: 'DD', age: 20, location: 'MAC'
}


const studentsList: Student[] = [student1, student2];

// Step 3: Render the table using Vanilla JavaScript
const table = document.createElement('table');
table.style.width = '100%';
table.style.borderCollapse = 'collapse';

// Create the table header
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

const headers = ['First Name', 'Location'];
headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    th.style.border = '1px solid #ccc';
    th.style.padding = '8px';
    th.style.backgroundColor = '#f4f4f4';
    th.style.textAlign = 'left';
    headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

// Create the table body
const tbody = document.createElement('tbody');

studentsList.forEach(student => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = '1px solid #ccc';
    firstNameCell.style.padding = '8px';

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = '1px solid #ccc';
    locationCell.style.padding = '8px';

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

table.appendChild(tbody);

// Append the table to the document body
document.body.appendChild(table);