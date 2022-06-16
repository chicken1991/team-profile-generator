// This generates the text file, inserting the appropriate answers from the data objects
function generateEngineer(name, id, email, github) {
    // var mgr = new manager(data.name, data.id, data.email, data.officeNumber);
 return `
 <!-- START OF GENERATEMANAGER -->
    <div class="card bg-secondary" style="width: 18rem; padding:1rem; margin:.25rem;">
        <div class="card-header">Role: Engineer</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${name}</li>
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
              <li class="list-group-item">Github: <a href=https://www.github.com/${github}>${github}<a></li>
            </ul>
    </div>

  `;
}

module.exports = generateEngineer;
