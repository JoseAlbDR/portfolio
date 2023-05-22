export const projectItems = [
  {
    name: "Forkify",
    text: "Web APP en la que puedes buscar recetas y guardar tus favoritas. Las recetas se obtienen llamando a una API externa.",
    gitHubUrl: "https://github.com/JoseAlbDR/forkify",
    netlifyUrl: "https://forkify-jadr.netlify.app",
    thumbnail: "./assets/thumbnail/forkify.png",
  },
  {
    name: "Bankist",
    text: "Pagina que muestra algunos efectos que se pueden obtener con javascript usando addEventListener e intersectionObserver.",
    gitHubUrl:
      "https://github.com/JoseAlbDR/completeJavascriptCourse/tree/master/13-Advanced-DOM-Bankist",
    netlifyUrl: "https://bankist-jadr.netlify.app",
    thumbnail: "./assets/thumbnail/bankist.png",
  },
  {
    name: "Mapty",
    text: "Web APP en la que podemos añadir marcadores de ejercicio a un mapa. El mapa semuestra consumiendo una API externa.",
    gitHubUrl:
      "https://github.com/JoseAlbDR/completeJavascriptCourse/tree/master/15-Mapty",
    netlifyUrl: "https://mapty-jadr.netlify.app",
    thumbnail: "./assets/thumbnail/mapty.png",
  },
];

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
];

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

export const aboutItems = [
  {
    imageSrc: "../assets/img/about-img.jpg",
    title: "Nunca es tarde para descubrir tu pasion.",
    text: "¡Hola! Soy J. Alberto Delgado, un estudiante principiante de desarrollo web. Mi pasión es resolver problemas a través de la programación. Actualmente, me encuentro en un bootcamp de desarrollo web full stack, ampliando mis habilidades en front-end y back-end. Mi meta es crecer como profesional en el desarrollo web y aportar mi conocimiento a proyectos futuros.",
  },
];

export const footerItems = [
  {
    social: [
      {
        href: "https://github.com/JoseAlbDR/",
        src: "assets/logos/github.svg",
      },
      {
        href: "https://www.linkedin.com/in/jalbertodelgado/",
        src: "assets/logos/linkedin.svg",
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
        href: "contacto",
        name: "Contacto",
      },
    ],
    copyright: "© 2023 J.Alberto Delgado",
  },
];

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
          title: "Bootcap Desarrollo Web Full Stack KeepCoding",
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
      ],
    },
  },
];

export const submitForm = function (formData) {
  return formData;
};
