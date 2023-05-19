import "./style.css";

const data = {
  name: "Carlos Calleja Sáez",
  image: "/assets/developer.png",
  job: "Web Developer",
  github: "https://github.com/CarlosCallejaSaez",
  linkedin: "www.linkedin.com/CarlosCallejaSaez",
  description:
    `Profesional capacitado y versátil especializado en la creación y el mantenimiento de sitios web 
    y aplicaciones web. Mi principal objetivo es diseñar,
     desarrollar e implementar soluciones tecnológicas que sean atractivas, funcionales y eficientes.`,
};

const projects = [
  {
    web: "https://www.paginaerror.com",
    description: "Página de error",
    image: "/assets/error.webp",
  },
  {
    web: "https://www.starbucksrewards.com",
    description: "Starbucks Rewards",
    image: "/assets/starbucks.webp",
  },
  {
    web: "https://www.tictactoe.com",
    description: "Tic-tac-toe",
    image: "/assets/tictac.webp",
  },
  {
    web: "https://www.todo.com",
    description: "ToDo",
    image: "/assets/todo.webp",
  },
  {
    web: "https://www.aplicaciontiempo.com",
    description: "Aplicación del tiempo",
    image: "/assets/tiempo.webp",
  },
];

document.querySelector("#home").addEventListener("click", (ev) => {
  ev.preventDefault();
  const linkHref = ev.target.href;
  console.log("El link apunta a:", linkHref);
  renderHome();
});

document.querySelector("#experience").addEventListener("click", (ev) => {
  ev.preventDefault();
  const linkHref = ev.target.href;
  console.log("El link apunta a:", linkHref);
  renderExperience();
});

document.querySelector("#projects").addEventListener("click", (ev) => {
  ev.preventDefault();
  const linkHref = ev.target.href;
  console.log("El link apunta a:", linkHref);
  renderProjects();
});

const divHomeHTML = document.querySelector(".container-home");

const renderHome = () => {
  divExperienceHTML.innerHTML = "";
  divProjectsHTML.innerHTML = "";
  divHomeHTML.innerHTML = ` 

    
      <img class="img-home" src="${data.image}" class="image">
      
      
      <div class="data">
      <h1 class="typewriter"> Hola! Mi nombre es ${data.name}</h1>
      
      <p class="job">${data.job}</p>
   
      
    
        <h4 class="description"> ${data.description}</h4>

      <div class="social">
      <a href=${data.github} ><img id="github" src="./assets/github-logo.png" id="github" ></a>
      <a href=${data.linkedin} ><img id="linkedin" src="./assets/linkedin.png" id="linkedin" ></a>
      </div>
      
      
      </div>

      
   `;
};

const divProjectsHTML = document.querySelector(".container-projects");
const renderProjects = () => {
  divExperienceHTML.innerHTML = "";

  divHomeHTML.innerHTML = "";
  divProjectsHTML.innerHTML = ` 
  
<ul id="ul-projects">
<li><a href="${projects[0].web}"> ${projects[0].description}<img src="${projects[0].image}" alt="${projects[0].description}"></a></li>
<li><a href="${projects[1].web}"> ${projects[1].description}<img src="${projects[1].image}" alt="${projects[1].description}"></a></li>
<li><a href="${projects[2].web}"> ${projects[2].description}<img src="${projects[2].image}" alt="${projects[2].description}"></a></li>
<li><a href="${projects[3].web}"> ${projects[3].description}<img src="${projects[3].image}" alt="${projects[3].description}"></a></li>
<li><a href="${projects[4].web}"> ${projects[4].description}<img src="${projects[4].image}" alt="${projects[4].description}"></a></li>
</ul>


  `;
};
const divExperienceHTML = document.querySelector(".container-experience");
const renderExperience = () => {
  divProjectsHTML.innerHTML = "";
  divHomeHTML.innerHTML = "";
  divExperienceHTML.innerHTML = ` 
  <ul id="experience-content">
  <li><a href="https://www.empresa1.com"><h2>Astro Tech</h2><img src="assets/empresa1.webp" alt=""><h3>2015-2018</h3><p>Sector Aeroespacial</p><p>Junior</p></a></li>
  <li><a href="https://www.empresa2.com"><h2>Taylor</h2><img src="assets/empresa2.jpeg" alt=""><h3>2018-2019</h3><p>Sector Moda</p><p>Junior</p></a></li>
  <li><a href="https://www.empresa3.com"><h2>Yardita Servies</h2><img src="assets/empresa3.jpg" alt=""><h3>2019-2022</h3><p>Sector Servicios</p><p>Senior</p></a></li>
  <li><a href="https://www.empresa4.com"><h2>People</h2><img src="assets/empresa4.png" alt=""><h3>2022-2023</h3><p>Redes Sociales</p><p>Product Manager</p></a></li>
  <li><a href="https://www.empresa5.com"><h2>Starlight</h2><img src="assets/empresa5.webp" alt=""><h3>2023-actualidad</h3><p>Implemetación Internet en zonas desfavorecidas</p><p>Product Manager</p></a></li>

</ul>
 `;
};

renderHome();
