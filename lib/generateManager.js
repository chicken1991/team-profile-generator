const manager = require('./Manager');

// This generates the text file, inserting the appropriate answers from the data objects
function generateManager(name, id, email, officeNumber) {
    // var mgr = new manager(data.name, data.id, data.email, data.officeNumber);
 return `
 <div class="card bg-secondary" style="width: 18rem; padding:1rem; margin:.25rem;">
        <div class="card-header">Manager</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${name}</li>
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
              <li class="list-group-item">Office Number: ${officeNumber}</li>
            </ul>
          </div>
    </div>
  `;
}

module.exports = generateManager;
