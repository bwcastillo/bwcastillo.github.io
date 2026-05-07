fetch("data/trayectoria.json")
  .then(response => response.json())

  .then(data => {

    const container =
      document.getElementById("timeline-container");

    data.forEach(item => {

      let bullets = "";

      item.descripcion.forEach(texto => {
        bullets += `<li>${texto}</li>`;
      });

      container.innerHTML += `

        <div class="timeline-item">

          <div class="timeline-date">
            ${item.fecha}
          </div>

          <div class="timeline-content">

            <h3>
              ${item.institucion}
            </h3>

            <h4>
              ${item.cargo}
            </h4>

            <ul>
              ${bullets}
            </ul>

          </div>

        </div>
      `;
    });
  });


  fetch("data/education.json")

  .then(response => response.json())

  .then(data => {

    const container =
      document.getElementById("education-container");

    data.forEach(item => {

      let bullets = "";

      item.descripcion.forEach(texto => {
        bullets += `<li>${texto}</li>`;
      });

      let linkHTML = "";

      if(item.link !== "") {

        linkHTML = `
          <a href="${item.link}"
             target="_blank">

             Ver certificado

          </a>
        `;
      }

      container.innerHTML += `

        <div class="timeline-item">

          <div class="timeline-date">
            ${item.fecha}
          </div>

          <div class="timeline-content">

            <h3>
              ${item.institucion}
            </h3>

            <h4>
              ${item.programa}
            </h4>

            <ul>
              ${bullets}
            </ul>

            ${linkHTML}

          </div>

        </div>
      `;
    });
  });