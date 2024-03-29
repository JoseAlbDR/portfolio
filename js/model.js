import { PASS } from "../private/config.js";

// Object to save projects
export const projectItems = [
  {
    name: "JSQuiz",
    text: "React Web APP que permite a los usuarios responder preguntas y realiza un seguimiento de su puntuación.",
    thumbnail: "./assets/thumbnail/jsquiz.png",
    alt: "JSQuiz",
    buttons: [
      {
        src: "assets/logos/github.svg",
        alt: "github JSQuiz",
        name: "GitHub",
        url: "https://github.com/JoseAlbDR/js-quiz",
      },
      {
        src: "assets/logos/globe-europe-africa.svg",
        alt: "web JSQuiz",
        name: "Web",
        url: "https://jsquiz.jadelgadorobles.com",
      },
    ],
  },
  {
    name: "WorldWise",
    text: "React Web APP que te permite hacer un seguimiento de las ciudades que has visitado alrededor del mundo.",
    thumbnail: "./assets/thumbnail/WorldWise.png",
    alt: "WorldWise",
    buttons: [
      {
        src: "assets/logos/github.svg",
        alt: "github worldwise",
        name: "GitHub",
        url: "https://github.com/JoseAlbDR/worldwise",
      },
      {
        src: "assets/logos/globe-europe-africa.svg",
        alt: "web worldwise",
        name: "Web",
        url: "https://jadr-worldwide.netlify.app",
      },
    ],
  },
  {
    name: "API JsQuiz",
    text: "Rest API desarollada con Node y Express para hacer operaciones CRUD sobre una base de datos de preguntas de JavaScript.",
    thumbnail: "./assets/thumbnail/jsquizapi.png",
    alt: "jsquiz api",
    buttons: [
      {
        src: "assets/logos/github.svg",
        alt: "github jsquiz api",
        name: "GitHub",
        url: "https://github.com/JoseAlbDR/js-quiz-Api",
      },
      {
        src: "assets/logos/globe-europe-africa.svg",
        alt: "jsquiz api",
        name: "Docs",
        url: "https://jsquiz.jadero.dev/api/v1/docs",
      },
    ],
  },
  {
    name: "UsePopCorn",
    text: "Web APP en la que puedes buscar peliculas y guardarlas asignándoles un rating, muestra estadisticas sobre todas las peliculas guardadas.",
    thumbnail: "./assets/thumbnail/usepopcorn.png",
    alt: "usepopcorn",
    buttons: [
      {
        src: "assets/logos/github.svg",
        alt: "github usepopcorn",
        name: "GitHub",
        url: "https://github.com/JoseAlbDR/usepopcorn-react",
      },
      {
        src: "assets/logos/globe-europe-africa.svg",
        alt: "usepopcorn",
        name: "Web",
        url: "https://usepopcorn.jadero.dev/",
      },
    ],
  },
  {
    name: "PortFolio",
    text: "Mobile First Web desarrollada solo con HTML y CSS, práctica parte del bootcamp que estoy cursando en KeepCoding.",
    thumbnail: "./assets/thumbnail/portfolioKC.png",
    alt: "portfolio jadero.dev",
    buttons: [
      {
        src: "assets/logos/github.svg",
        alt: "github portfolio",
        name: "GitHub",
        url: "https://github.com/JoseAlbDR/practica-html-css",
      },
      {
        src: "assets/logos/globe-europe-africa.svg",
        alt: "jadero.dev",
        name: "Web",
        url: "https://www.jadero.dev",
      },
    ],
  },
  {
    name: "Forkify",
    text: "Web APP en la que puedes buscar recetas y guardar tus favoritas. Las recetas se obtienen llamando a una API externa.",
    thumbnail: "./assets/thumbnail/forkify.png",
    alt: "forkify",
    buttons: [
      {
        src: "assets/logos/github.svg",
        alt: "github forkify",
        name: "GitHub",
        url: "https://github.com/JoseAlbDR/forkify",
      },
      {
        src: "assets/logos/globe-europe-africa.svg",
        alt: "web forkify netlify",
        name: "Web",
        url: "https://forkify-jadr.netlify.app",
      },
    ],
  },
  {
    name: "Simon",
    text: "Web APP en la que podemos jugar al Simon dice con colores y sonidos. Guarda los usuarios y la puntuacion máxima.",
    thumbnail: "./assets/thumbnail/simon.png",
    alt: "simon",

    buttons: [
      {
        src: "assets/logos/github.svg",
        alt: "github piggame",
        name: "GitHub",
        url: "https://github.com/JoseAlbDR/simongame",
      },
      {
        src: "assets/logos/globe-europe-africa.svg",
        alt: "web piggame netlify",
        name: "Web",
        url: "https://jadr-simon.netlify.app/",
      },
    ],
  },
  {
    name: "Blog",
    text: "Web APP que permite ver y crear entradas de blog alojadas en una base de datos, versión basica que quiero seguir desarrollando.",
    thumbnail: "./assets/thumbnail/blog.png",
    alt: "blog",

    buttons: [
      {
        src: "assets/logos/github.svg",
        alt: "github blog",
        name: "GitHub",
        url: "https://github.com/JoseAlbDR/backendblog",
      },
      {
        src: "assets/logos/globe-europe-africa.svg",
        alt: "web blog",
        name: "Web",
        url: "https://jadr-blog.onrender.com",
      },
    ],
  },
  {
    name: "Lista de Tareas",
    text: "Web APP que permite crear y borrar listas de tareas personalizadas y agregar y quitar tareas a dichas listas, todo alojado en una base de datos",
    thumbnail: "./assets/thumbnail/todolist.png",
    alt: "todo list",

    buttons: [
      {
        src: "assets/logos/github.svg",
        alt: "github guess number",
        name: "GitHub",
        url: "https://github.com/JoseAlbDR/todolist",
      },
      {
        src: "assets/logos/globe-europe-africa.svg",
        alt: "todo list",
        name: "Web",
        url: "https://jadr-todolist.onrender.com",
      },
    ],
  },
  {
    name: "Mapty",
    text: "Web APP en la que podemos añadir marcadores de ejercicio a un mapa. El mapa semuestra consumiendo una API externa.",
    thumbnail: "./assets/thumbnail/mapty.png",
    alt: "mapty",

    buttons: [
      {
        src: "assets/logos/github.svg",
        alt: "github mapty",
        name: "GitHub",
        url: "https://github.com/JoseAlbDR/completeJavascriptCourse/tree/master/15-Mapty/starter",
      },
      {
        src: "assets/logos/globe-europe-africa.svg",
        alt: "web mapty netlify",
        name: "Web",
        url: "https://mapty-jadr.netlify.app",
      },
    ],
  },
  {
    name: "Bankist",
    text: "Pagina que muestra algunos efectos que se pueden obtener con javascript usando addEventListener e intersectionObserver.",
    thumbnail: "./assets/thumbnail/bankist.png",
    alt: "bankist",
    buttons: [
      {
        src: "assets/logos/github.svg",
        alt: "github bankist",
        name: "GitHub",
        url: "https://github.com/JoseAlbDR/completeJavascriptCourse/tree/master/13-Advanced-DOM-Bankist/starter",
      },
      {
        src: "assets/logos/globe-europe-africa.svg",
        alt: "web bankist netlify",
        name: "Web",
        url: "https://bankist-jadr.netlify.app",
      },
    ],
  },
  {
    name: "Newsletter",
    text: "Web APP en la que podemos registrarnos en una Newsletter con alojamiento en Mailchimp",
    thumbnail: "./assets/thumbnail/newsletter.png",
    alt: "newsletter",

    buttons: [
      {
        src: "assets/logos/github.svg",
        alt: "github piggame",
        name: "GitHub",
        url: "https://github.com/JoseAlbDR/newsletter",
      },
      {
        src: "assets/logos/globe-europe-africa.svg",
        alt: "web piggame herocku",
        name: "Web",
        url: "https://jadr-newsletter.onrender.com",
      },
    ],
  },

  {
    name: "BankAPP",
    text: "Web APP en la que podemos hacer operaciones simples relacinadas con cuentas bancarias. Instrucciones en el repositorio.",
    thumbnail: "./assets/thumbnail/bankistapp.png",
    alt: "bankapp",

    buttons: [
      {
        src: "assets/logos/github.svg",
        alt: "github bankapp",
        name: "GitHub",
        url: "https://github.com/JoseAlbDR/completeJavascriptCourse/tree/master/12-Numbers-Dates-Timers-Bankist/starter",
      },
      {
        src: "assets/logos/globe-europe-africa.svg",
        alt: "web bankapp netlify",
        name: "Web",
        url: "https://bankist-app-jadr.netlify.app/",
      },
    ],
  },
];

// Object to save menu items
export const menuItems = [
  {
    href: "#hero",
    name: "Inicio",
  },
  {
    href: "#about",
    name: "Sobre Mí",
  },
  {
    href: "#formacion",
    name: "Formación",
  },
  {
    href: "#portfolio",
    name: "Portfolio",
  },

  {
    href: "#contacto",
    name: "Contacto",
  },
  {
    href: "https://blog.jadelgadorobles.com/",
    name: "Blog",
  },
];

// Object to save technologies
export const techItems = [
  {
    src: "./assets/logos/HTML5_logo_and_wordmark.svg",
    alt: "html5",
  },
  {
    src: "./assets/logos/css-3-logo-svgrepo-com.svg",
    alt: "css3",
  },
  {
    src: "assets/logos/Unofficial_JavaScript_logo_2.svg",
    alt: "javascript",
  },
  {
    src: "assets/logos/Typescript_logo_2020.svg",
    alt: "typescript",
  },
  {
    src: "assets/logos/React-icon.svg",
    alt: "react",
  },
  {
    src: "assets/logos/Node.js_logo.svg",
    alt: "nodejs",
  },
];

// Object to save content for about section
export const aboutItems = [
  {
    imageSrc: "../assets/img/about-img.jpg",
    title: "Nunca es tarde para descubrir tu pasion.",
    text: "¡Hola! Soy J. Alberto Delgado, un estudiante principiante de desarrollo web. Mi pasión es resolver problemas a través de la programación. Actualmente, me encuentro en un bootcamp de desarrollo web full stack, ampliando mis habilidades en front-end y back-end. Mi meta es crecer como profesional en el desarrollo web y aportar mi conocimiento a proyectos futuros.",
  },
];

// Object to save data of footer
export const footerItems = [
  {
    social: [
      {
        href: "https://github.com/JoseAlbDR/",
        alt: "github alberto delgado",
        src: "assets/logos/github.svg",
      },
      {
        href: "https://www.linkedin.com/in/jalbertodelgado/",
        alt: "linkedin alberto delgado",
        src: "assets/logos/linkedin.svg",
      },
      {
        href: "https://codesandbox.io/u/josealbdr",
        alt: "codesandobx alberto delgado",
        src: "assets/logos/code-sandbox.svg",
      },
    ],
    menu: [
      {
        href: "#",
        name: "Inicio",
      },
      {
        href: "#about",
        name: "Sobre Mí",
      },
      {
        href: "#formacion",
        name: "Formación",
      },
      {
        href: "#portfolio",
        name: "Portfolio",
      },

      {
        href: "#contacto",
        name: "Contacto",
      },
      {
        href: "https://blog.jadelgadorobles.com/",
        name: "Blog",
      },
    ],
    copyright: "© 2023 J.Alberto Delgado",
  },
];

// Object to save data for formation
export const formationItems = [
  {
    resumen: {
      title: "El saber no ocupa lugar",
      text: "A pesar de no contar con experiencia laboral previa, me encuentro en constante proceso de formación para adquirir habilidades valiosas. Mi pasión por aprender y adaptarme demuestra la relevancia de la capacitación para enfrentar proyectos desafiantes con confianza y creatividad.",
    },
    education: {
      name: "Estudios",
      titulation: [
        {
          title: "Administración de Sistemas Informáticos en Red",
          date: "2010 - 2012",
          institution: "I.E.S Antonio de Nebrija",
          note: "8.08",
          text: "El ciclo formativo de grado superior ASIR (Administración de Sistemas Informáticos en Red) brinda conocimientos y habilidades en la gestión de sistemas, redes y seguridad informática, preparando a los estudiantes para desempeñarse en roles técnicos especializados.",
        },
      ],
    },
    formation: {
      name: "Certificación",
      titulation: [
        {
          title: "Bootcamp Desarrollo Web Full Stack KeepCoding",
          date: "Mayo 2023 - Actualidad",
          certificate: null,
          institution:
            "<a href='https://keepcoding.io/nuestros-bootcamps/full-stack-web-bootcamp/' target='_blank'>KeepCoding</a>",
          text: "Programa de inmersión intensiva que ofrece una formación completa en desarrollo web, abarcando tanto el frontend como el backend. Con un enfoque práctico y basado en tecnologías de vanguardia, prepara a los estudiantes para convertirse en desarrolladores web altamente competentes y listos para enfrentar desafíos del mundo real.",
        },
        {
          title: "The Complete JavaScript Course: From Zero to Expert!",
          date: "Mayo 2023",
          certificate:
            "<a href='https://www.udemy.com/certificate/UC-bdb8b3a0-a5c1-4fb6-bece-d0149264fcaa/' target='_blank'>Certificado</a>",
          institution:
            "<a href='https://www.udemy.com/course/the-complete-javascript-course/' target='_blank'>Udemy</a>",
          text: "Curso exhaustivo que lleva a los estudiantes desde el nivel básico hasta el nivel experto en JavaScript, proporcionando conocimientos completos sobre el lenguaje, incluyendo conceptos fundamentales, manipulación del DOM, manipulación de datos, programación orientada a objetos y más.",
        },
        {
          title: "Curso de Git, Github &amp; SourceTree",
          date: "Abril 2023",
          certificate:
            "<a href='https://1drv.ms/b/s!AqmllO1SZcxzhLBm0bPw5H_8w7vQNw?e=CsTq4h' target='_blank'>Certificado</a>",
          institution:
            "<a href='https://plataforma.keepcoding.io/p/curso-git-github-sourcetree' target='_blank'>KeepCoding</a>",
          text: "El curso Git, GitHub & Sourcetree de KeepCoding es una formación completa que enseña a los estudiantes cómo utilizar Git y GitHub de manera eficiente para el control de versiones y la colaboración en proyectos de desarrollo de software. Además, el curso abarca el uso de Sourcetree como una herramienta visual para facilitar el flujo de trabajo con Git.",
        },
        {
          title: "The Complete 2023 Web Development Bootcamp",
          date: "Junio 2023",
          certificate:
            "<a href='https://www.udemy.com/certificate/UC-37a8a1d8-8e4e-4162-b5fd-7216ca26ef8b/' target='_blank'>Certificado</a>",
          institution:
            "<a href='https://www.udemy.com/course/the-complete-web-development-bootcamp' target='_blank'>Udemy</a>",
          text: "El curso 'The Complete 2023 Web Development Bootcamp' de Udemy es una formación integral en desarrollo web actualizada hasta el año 2023. En este curso, he aprendido a utilizar y practicado las siguientes tecnologías: HMTL5, CSS3, JavaScript, Node.js, Express.js, MongoDB, React, Redux, Git y GItHub.",
        },
        {
          title: "The Ultimate React Course",
          date: "Julio 2023 - Actualidad",
          certificate: "   Cursando...",
          institution:
            "<a href='https://www.udemy.com/course/the-ultimate-react-course' target='_blank'>Udemy</a>",
          text: "'The Ultimate React Course' es una extensa formación en Udemy que me brinda un profundo conocimiento sobre React, Hooks, Redux, React Router, Firebase y Styled Components. Durante el curso, aprenderé a desarrollar aplicaciones web modernas y dinámicas utilizando estas tecnologías clave, lo que me permitirá crear interfaces de usuario interactivas y eficientes.",
        },
      ],
    },
  },
];

/** Model for submit contact form
 * Under development
 *
 * @param {*} formData
 * @returns
 */
export const submitForm = function (formData) {
  emailjs.sendForm("service_pm9chgb", "contact_form", formData).then(
    function () {
      console.log("SUCCESS!");
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
};

export const contactForm = {
  title: "Enviame un mensaje",
  items: [
    {
      id: "name",
      name: "user_name",
      placeholder: "Nombre",
      for: "name",
      label: "Nombre",
    },
    {
      id: "email",
      name: "user_email",
      placeholder: "Email",
      for: "email",
      label: "Email",
    },

    {
      id: "subject",
      name: "subject",
      placeholder: "Asunto",
      for: "subject",
      label: "Asunto",
    },
  ],
};

export const contactWays = {
  title: "Ponte en contacto",
  text: "Estos los los actuales canales en los que puedes contacta conmigo.",
  items: [
    {
      src: "assets/logos/linkedin.svg",
      alt: "linkedin alberto delgado",
      name: "Linkedin:",
      href: "https://www.linkedin.com/in/jalbertodelgado/",
      content: "J.Alberto Delgado",
    },
    {
      src: "assets/logos/envelope-at.svg",
      alt: "envelope",
      name: "Email:",
      href: "mailto:josealbdr@gmail.com",
      content: "josealbdr@gmail.com",
    },
    {
      src: "assets/logos/globe-europe-africa.svg",
      alt: "world",
      name: "Website:",
      href: "https://jadelgadorobles.com/",
      content: "Portfolio",
    },
    {
      src: "assets/logos/globe-europe-africa.svg",
      alt: "world",
      name: "HTML+CSS Website:",
      href: "https://www.jadero.dev/",
      content: "Alt Portfolio",
    },
    {
      src: "assets/logos/github.svg",
      alt: "github alberto delgado",
      name: "GitHub:",
      href: "https://github.com/JoseAlbDR",
      content: "MyGit",
    },
    {
      src: "assets/logos/code-sandbox.svg",
      alt: "codesandbox alberto delgado",
      name: "CodeSandBox:",
      href: "https://codesandbox.io/u/josealbdr",
      content: "CodeSandBox",
    },
  ],
};
