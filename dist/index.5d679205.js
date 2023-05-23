!function(e,t,n,a,s){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof r[a]&&r[a],i=o.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,n){if(!i[t]){if(!e[t]){var s="function"==typeof r[a]&&r[a];if(!n&&s)return s(t,!0);if(o)return o(t,!0);if(l&&"string"==typeof t)return l(t);var u=new Error("Cannot find module '"+t+"'");throw u.code="MODULE_NOT_FOUND",u}m.resolve=function(n){var a=e[t][1][n];return null!=a?a:n},m.cache={};var d=i[t]=new c.Module(t);e[t][0].call(d.exports,m,d,d.exports,this)}return i[t].exports;function m(e){var t=m.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=i,c.parent=o,c.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(c,"root",{get:function(){return r[a]}}),r[a]=c;for(var u=0;u<t.length;u++)c(t[u]);if(n){var d=c(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define((function(){return d}))}}({"2bNRD":[function(e,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js"),s=e("./views/effectView.js"),r=a.interopDefault(s),o=e("./model.js"),i=e("./views/projectView.js"),l=a.interopDefault(i),c=e("./views/menuView.js"),u=a.interopDefault(c),d=e("./views/techsView.js"),m=a.interopDefault(d),p=e("./views/aboutView.js"),f=a.interopDefault(p),h=e("./views/footerView.js"),b=a.interopDefault(h),g=e("./views/formationView.js"),v=a.interopDefault(g),j=e("./views/formView.js"),w=a.interopDefault(j);l.default.render(o.projectItems),u.default.render(o.menuItems),m.default.render(o.techItems),f.default.render(o.aboutItems),b.default.render(o.footerItems),v.default.render(o.formationItems),w.default.getData(o.contactWays),w.default.render(o.contactForm);w.default.addHandlerSubmit((function(e){submitForm(o.formData);w.default.clearForm(),w.default.successMsg()})),function(){const e=new(0,r.default);e.showBlur(),e.showDataType(),e.showStickyNav(),e.showActiveMenu(),e.showActiveMenuScroll()}()},{"./views/effectView.js":"2wh6T","./model.js":"luTKW","./views/projectView.js":"2yD5q","./views/menuView.js":"7CoQQ","./views/techsView.js":"7GOW9","./views/aboutView.js":"hkNYu","./views/footerView.js":"g8rmw","./views/formationView.js":"dUWbG","./views/formView.js":"bMZmx","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"2wh6T":[function(e,t,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n);n.default=class{_nav=document.querySelector(".navbar");_randomEffect(){let e=0;const t=document.querySelector(".hack"),n=setInterval((()=>{t.textContent=t.textContent.split("").map(((n,a)=>a<e?t.dataset.value[a]:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(26*Math.random())])).join(""),e>=t.dataset.value.length&&clearInterval(n),e+=1/3}),50)}_obsHero(){const e=document.querySelectorAll(".hero-text"),t=new IntersectionObserver((function(e){const[t]=e;t.isIntersecting&&(t.target.classList.add("bezier"),t.target.classList.remove("opacity-0"))}),{root:null,threshold:.5});e.forEach((e=>t.observe(e)))}_headerObserver(e){const t=this._nav.getBoundingClientRect().height;return new IntersectionObserver(e.bind(this),{root:null,threshold:1,rootMargin:`+${t}px`})}_stickyNav(e){const[t]=e;t.isIntersecting?this._nav.classList.remove("sticky"):this._nav.classList.add("sticky")}_addActive(e){e.classList.add("active"),e.classList.add("underline")}_removeActive(e){e.classList.remove("active"),e.classList.remove("underline")}_activeMenuItem(){this._addActive(event.target);document.querySelectorAll(".nav-link").forEach((e=>{event.target!==e&&this._removeActive(event.target)}))}_sectionObserver(e){return new IntersectionObserver(e.bind(this),{root:null,threshold:.15})}_revealSection(e){const[t]=e;if(!t.isIntersecting)return;t.target.classList.remove("section-hidden");document.querySelectorAll(".nav-link").forEach((e=>{const n=e.getAttribute("href").slice(1);t.target.id===n?this._addActive(e):this._removeActive(e)}))}showBlur(){this._obsHero()}showRdmLettersOnLoad(){window.addEventListener("load",(()=>this._randomEffect()))}showRdmLettersMouseOver(){document.querySelector(".hack").onmouseover=()=>this._randomEffect()}showActiveMenu(){this._nav.addEventListener("click",this._activeMenuItem.bind(this))}showActiveMenuScroll(){const e=document.querySelectorAll(".section"),t=this._sectionObserver(this._revealSection);e.forEach((function(e){t.observe(e)}))}showStickyNav(){this._headerObserver(this._stickyNav).observe(hero)}showDataType(){window.onload=()=>{const e=document.getElementsByClassName("typewrite");for(let t=0;t<e.length;t++){const n=e[t].getAttribute("data-type"),a=e[t].getAttribute("data-period");n&&this._applyTypewriteEffect(e[t],JSON.parse(n),a)}this._injectCSS()}}_applyTypewriteEffect(e,t,n){let a=0,s="",r=!1;const o=()=>{const i=a%t.length,l=t[i];s=r?l.substring(0,s.length-1):l.substring(0,s.length+1),e.innerHTML='<span class="wrap">'+s+"</span>";let c=200-100*Math.random();r&&(c/=2),r||s!==l?r&&""===s&&(r=!1,a++,c=500):(c=n,r=!0),setTimeout(o,c)};o()}_injectCSS(){const e=document.createElement("style");e.type="text/css",e.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #fff}",document.body.appendChild(e)}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],k3151:[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach((function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}],luTKW:[function(e,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(n),a.export(n,"projectItems",(()=>s)),a.export(n,"menuItems",(()=>r)),a.export(n,"techItems",(()=>o)),a.export(n,"aboutItems",(()=>i)),a.export(n,"footerItems",(()=>l)),a.export(n,"formationItems",(()=>c)),a.export(n,"submitForm",(()=>u)),a.export(n,"contactForm",(()=>d)),a.export(n,"contactWays",(()=>m));const s=[{name:"Forkify",text:"Web APP en la que puedes buscar recetas y guardar tus favoritas. Las recetas se obtienen llamando a una API externa.",thumbnail:"./assets/thumbnail/forkify.png",alt:"forkify",buttons:[{src:"assets/logos/github.svg",alt:"github forkify",name:"GitHub",url:"https://github.com/JoseAlbDR/forkify"},{src:"assets/logos/globe-europe-africa.svg",alt:"web forkify netlify",name:"Web",url:"https://forkify-jadr.netlify.app"}]},{name:"Bankist",text:"Pagina que muestra algunos efectos que se pueden obtener con javascript usando addEventListener e intersectionObserver.",thumbnail:"./assets/thumbnail/bankist.png",alt:"bankist",buttons:[{src:"assets/logos/github.svg",alt:"github bankist",name:"GitHub",url:"https://github.com/JoseAlbDR/completeJavascriptCourse/tree/master/13-Advanced-DOM-Bankist"},{src:"assets/logos/globe-europe-africa.svg",alt:"web bankist netlify",name:"Web",url:"https://bankist-jadr.netlify.app"}]},{name:"Mapty",text:"Web APP en la que podemos añadir marcadores de ejercicio a un mapa. El mapa semuestra consumiendo una API externa.",thumbnail:"./assets/thumbnail/mapty.png",alt:"mapty",buttons:[{src:"assets/logos/github.svg",alt:"github mapty",name:"GitHub",url:"https://github.com/JoseAlbDR/completeJavascriptCourse/tree/master/15-Mapty"},{src:"assets/logos/globe-europe-africa.svg",alt:"web mapty netlify",name:"Web",url:"https://mapty-jadr.netlify.app"}]},{name:"BankAPP",text:"Web APP en la que podemos hacer operaciones simples relacinadas con cuentas bancarias. Instrucciones en el repositorio.",thumbnail:"./assets/thumbnail/bankistapp.png",alt:"bankapp",buttons:[{src:"assets/logos/github.svg",alt:"github bankapp",name:"GitHub",url:"https://github.com/JoseAlbDR/completeJavascriptCourse/tree/master/12-Numbers-Dates-Timers-Bankist/starter"},{src:"assets/logos/globe-europe-africa.svg",alt:"web bankapp netlify",name:"Web",url:"https://bankist-app-jadr.netlify.app/"}]},{name:"PigGame",text:"Web APP simple en la que podemos jugar a un juego de dados muy simple.",thumbnail:"./assets/thumbnail/piggame.png",alt:"piggame",buttons:[{src:"assets/logos/github.svg",alt:"github piggame",name:"GitHub",url:"https://github.com/JoseAlbDR/completeJavascriptCourse/tree/master/07-Pig-Game/starter"},{src:"assets/logos/globe-europe-africa.svg",alt:"web piggame netlify",name:"Web",url:"https://piggame-jadr.netlify.app/"}]},{name:"GuessIt",text:"Web APP simple en la que tendremos que adivinar un numero entre 1 y 20.",thumbnail:"./assets/thumbnail/guessit.png",alt:"guess number",buttons:[{src:"assets/logos/github.svg",alt:"github guess number",name:"GitHub",url:"https://github.com/JoseAlbDR/completeJavascriptCourse/tree/master/05-Guess-My-Number/starter"},{src:"assets/logos/globe-europe-africa.svg",alt:"web guess number netlify",name:"Web",url:"https://guessnumber-jadr.netlify.app/"}]}],r=[{href:"#hero",name:"Inicio"},{href:"#about",name:"Sobre Mí"},{href:"#formacion",name:"Formación"},{href:"#portfolio",name:"Portfolio"},{href:"#contacto",name:"Contacto"}],o=[{src:"./assets/logos/HTML5_logo_and_wordmark.svg",alt:"html5"},{src:"./assets/logos/css-3-logo-svgrepo-com.svg",alt:"css3"},{src:"assets/logos/Unofficial_JavaScript_logo_2.svg",alt:"javascript"},{src:"assets/logos/Typescript_logo_2020.svg",alt:"typescript"},{src:"assets/logos/React-icon.svg",alt:"react"},{src:"assets/logos/Node.js_logo.svg",alt:"nodejs"}],i=[{imageSrc:"../assets/img/about-img.jpg",title:"Nunca es tarde para descubrir tu pasion.",text:"¡Hola! Soy J. Alberto Delgado, un estudiante principiante de desarrollo web. Mi pasión es resolver problemas a través de la programación. Actualmente, me encuentro en un bootcamp de desarrollo web full stack, ampliando mis habilidades en front-end y back-end. Mi meta es crecer como profesional en el desarrollo web y aportar mi conocimiento a proyectos futuros."}],l=[{social:[{href:"https://github.com/JoseAlbDR/",alt:"github alberto delgado",src:"assets/logos/github.svg"},{href:"https://www.linkedin.com/in/jalbertodelgado/",alt:"linkedin alberto delgado",src:"assets/logos/linkedin.svg"}],menu:[{href:"#",name:"Inicio"},{href:"#about",name:"Sobre Mí"},{href:"#formacion",name:"Formación"},{href:"#portfolio",name:"Portfolio"},{href:"#contacto",name:"Contacto"}],copyright:"© 2023 J.Alberto Delgado"}],c=[{resumen:{title:"El saber no ocupa lugar",text:"A pesar de no contar con experiencia laboral previa, me encuentro en constante proceso de formación para adquirir habilidades valiosas. Mi pasión por aprender y adaptarme demuestra la relevancia de la capacitación para enfrentar proyectos desafiantes con confianza y creatividad."},education:{name:"Estudios",titulation:[{title:"Administración de Sistemas Informáticos en Red",date:"2010 - 2012",institution:"I.E.S Antonio de Nebrija",note:"8.08",text:"El ciclo formativo de grado superior ASIR (Administración de Sistemas Informáticos en Red) brinda conocimientos y habilidades en la gestión de sistemas, redes y seguridad informática, preparando a los estudiantes para desempeñarse en roles técnicos especializados."}]},formation:{name:"Certificación",titulation:[{title:"Bootcap Desarrollo Web Full Stack KeepCoding",date:"Mayo 2023 - Actualidad",certificate:null,institution:"<a href='https://keepcoding.io/nuestros-bootcamps/full-stack-web-bootcamp/' target='_blank'>KeepCoding</a>",text:"Programa de inmersión intensiva que ofrece una formación completa en desarrollo web, abarcando tanto el frontend como el backend. Con un enfoque práctico y basado en tecnologías de vanguardia, prepara a los estudiantes para convertirse en desarrolladores web altamente competentes y listos para enfrentar desafíos del mundo real."},{title:"The Complete JavaScript Course: From Zero to Expert!",date:"Mayo 2023",certificate:"<a href='https://www.udemy.com/certificate/UC-bdb8b3a0-a5c1-4fb6-bece-d0149264fcaa/' target='_blank'>Certificado</a>",institution:"<a href='https://www.udemy.com/course/the-complete-javascript-course/' target='_blank'>Udemy</a>",text:"Curso exhaustivo que lleva a los estudiantes desde el nivel básico hasta el nivel experto en JavaScript, proporcionando conocimientos completos sobre el lenguaje, incluyendo conceptos fundamentales, manipulación del DOM, manipulación de datos, programación orientada a objetos y más."},{title:"Curso de Git, Github &amp; SourceTree",date:"Abril 2023",certificate:"<a href='https://1drv.ms/b/s!AqmllO1SZcxzhLBm0bPw5H_8w7vQNw?e=CsTq4h' target='_blank'>Certificado</a>",institution:"<a href='https://plataforma.keepcoding.io/p/curso-git-github-sourcetree' target='_blank'>KeepCoding</a>",text:"El curso Git, GitHub & Sourcetree de KeepCoding es una formación completa que enseña a los estudiantes cómo utilizar Git y GitHub de manera eficiente para el control de versiones y la colaboración en proyectos de desarrollo de software. Además, el curso abarca el uso de Sourcetree como una herramienta visual para facilitar el flujo de trabajo con Git."}]}}],u=function(e){return e},d={title:"Enviame un mensaje",items:[{id:"name",name:"name",placeholder:"Nombre",for:"name",label:"Nombre"},{id:"email",name:"email",placeholder:"Email",for:"email",label:"Email"},{id:"subject",name:"subject",placeholder:"Asunto",for:"subject",label:"Asunto"},{id:"message",name:"message",placeholder:"Mensaje",for:"message",label:"Mensaje"}]},m={title:"Ponte en contacto",text:"Estos los los actuales canales en los que puedes contacta conmigo.",items:[{src:"assets/logos/linkedin.svg",alt:"linkedin alberto delgado",name:"Linkedin:",href:"https://www.linkedin.com/in/jalbertodelgado/",content:"J.Alberto Delgado"},{src:"assets/logos/envelope-at.svg",alt:"envelope",name:"Email:",href:"mailto:josealbdr@gmail.com",content:"josealbdr@gmail.com"},{src:"assets/logos/globe-europe-africa.svg",alt:"world",name:"Website:",href:"https://jadelgadorobles.com/",content:"Portfolio"},{src:"assets/logos/github.svg",alt:"github alberto delgado",name:"GitHub:",href:"https://github.com/JoseAlbDR",content:"MyGit"}]}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"2yD5q":[function(e,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(n);var s=e("./View.js"),r=a.interopDefault(s);class o extends r.default{_parentElement=document.querySelector(".projects-container");_generateButtonsMarkup(e){return`\n      <a\n        href="${e.url}"\n        target="_blank"\n        ><button\n          type="button"\n          class="btn btn-sm btn-outline-secondary me-3"\n        >\n          <img\n            src="${e.src}"\n            class="img-fluid"\n            alt="${e.alt}"\n          />\n          ${e.name}\n        </button>\n      </a>\n    \n    `}_generateElementMarkup(e){return`\n    <div class="portfolio col">\n      <p class="element-title">${e.name}</p>\n      <div class="card shadow-sm">\n        <div class="card-img">\n          <img\n            class="bd-placeholder-img card-img-top"\n            width="100%"\n            height="225"\n            src="${e.thumbnail}"\n            alt="${e.alt}"\n            preserveAspectRatio="xMidYMid slice"\n            focusable="false"\n          />\n        </div>\n        <title>${e.name}</title>\n        <rect width="100%" height="100%" fill="#55595c"></rect>\n\n        <div class="card-body">\n          <p class="card-text">\n            ${e.text}\n          </p>\n          <div\n            class="d-flex justify-content-between align-items-center"\n          >\n            <div class="btn-group">\n            ${e.buttons.map((e=>this._generateButtonsMarkup(e))).join("")}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n  `}}n.default=new o},{"./View.js":"66IrY","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"66IrY":[function(e,t,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n);n.default=class{_data;render(e,t="afterbegin"){this._data=e;const n=this._generateMarkup();this._clearParent(),console.log(this._parentElement),this._parentElement.insertAdjacentHTML(t,n),console.log(this._parentElement)}_clearParent(){this._parentElement.innerHTML=""}_generateSpanMarkup(e){return`\n    <span>${e}</span>\n    `}_generateMarkup(){return this._data.length?this._data.map((e=>this._generateElementMarkup(e))).join(""):this._clearParent()}renderSpinner(){const e=`\n      <div class="spinner">\n        <svg>\n          <use href="${icons}#icon-loader"></use>\n        </svg>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"7CoQQ":[function(e,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(n);var s=e("./View.js"),r=a.interopDefault(s);class o extends r.default{_parentElement=document.querySelector(".navbar-nav");_generateElementMarkup(e){return`\n    <li class="nav-item">\n      <a\n        class="nav-link active underline hover-underline-animation"\n        aria-current="page"\n        href="${e.href}"\n        >${e.name}</a\n      >\n    </li>\n  \n  `}}n.default=new o},{"./View.js":"66IrY","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"7GOW9":[function(e,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(n);var s=e("./View.js"),r=a.interopDefault(s);class o extends r.default{_parentElement=document.querySelector(".techs-items");_generateElementMarkup(e){return`\n    <div\n      class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"\n    >\n      <img\n        src="${e.src}"\n        class="img-fluid"\n        alt="${e.alt}"\n      />\n    </div>\n  \n  `}}n.default=new o},{"./View.js":"66IrY","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],hkNYu:[function(e,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(n);var s=e("./View.js"),r=a.interopDefault(s);class o extends r.default{_parentElement=document.querySelector(".about-items");_generateElementMarkup(e){return`\n      <div class="col-10 col-sm-8 col-lg-6">\n        <img\n          src="${e.imageSrc}"\n          class="d-block mx-lg-auto img-fluid"\n          alt="Bootstrap Themes"\n          width="700"\n          height="500"\n          loading="lazy"\n        />\n      </div>\n      <div class="col-lg-6">\n        <h1 class="asdf hero-text display-5 fw-bold lh-1 mb-3 lh-base opacity-0">\n        ${e.title.split(" ").map((e=>this._generateSpanMarkup(e))).join("")}\n        </h1>\n\n        <p class="lead">\n          ${e.text}\n        </p>\n      </div>\n  \n  `}}n.default=new o},{"./View.js":"66IrY","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],g8rmw:[function(e,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(n);var s=e("./View.js"),r=a.interopDefault(s);class o extends r.default{_parentElement=document.querySelector(".footer");_generateSocialMarkup(e){return`\n      <li class="ms-3">\n        <a\n          class="text-body-secondary"\n          href="${e.href}"\n          target="_blank"\n          ><img\n            src="${e.src}"\n            height="30px"\n            width="30px"\n            class="img-fluid"\n            alt=""\n        /></a>\n      </li>\n    `}_generateMenuMarkup(e){return`\n    <li class="nav-item">\n        <a\n          href="${e.href}"\n          class="nav-link footer-text fs-5 px-2 hover-underline-animation"\n          >${e.name}</a\n        >\n    `}_generateMarkup(){return`\n    <div class="d-flex border-bottom justify-content-around">\n      <ul class="nav col-md-4 list-unstyled d-flex mt-2">\n        ${this._data[0].social.map((e=>this._generateSocialMarkup(e))).join("")}\n      </ul>\n\n      <ul\n        class="nav d-flex justify-content-evenly pb-3 mb-3 align-items-center"\n      >\n        ${this._data[0].menu.map((e=>this._generateMenuMarkup(e))).join("")}\n      </ul>\n    </div>\n  <p class="text-center fs-4">${this._data[0].copyright}</p>\n  \n  `}}n.default=new o},{"./View.js":"66IrY","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],dUWbG:[function(e,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(n);var s=e("./View.js"),r=a.interopDefault(s);class o extends r.default{_parentElement=document.querySelector(".formation");_generateSection(e){return`\n    ${e.titulation.map((t=>`\n    <div class="col-lg-6">\n      <h3 class="resume-title">${e.name}</h3>\n      <div class="resume-item">\n      \n        <h4>${t.title}</h4>\n        <h5>${t.date}</h5>\n        <p><em>${t.institution}${t.certificate?t.certificate:""}</em></p>\n        \n        <p>\n          ${t.text}\n        </p>\n      </div>\n    </div>\n          `)).join("")}\n    `}_generateMarkup(){return`\n      <div class="bg-white">\n        <div class="container py-5 px-4">\n          <div class="section-title mt-5">\n            <h1 class="hero-text display-5 fw-bold lh-1 mb-3 lh-base">\n              ${this._data[0].resumen.title.split(" ").map((e=>this._generateSpanMarkup(e))).join("")}\n            </h1>\n            <p class="lead">\n              ${this._data[0].resumen.text}\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class="container py-5 px-4">\n        <div class="row">\n          ${this._generateSection(this._data[0].education)}\n          ${this._generateSection(this._data[0].formation)}\n\n        </div>\n\n  \n  `}}n.default=new o},{"./View.js":"66IrY","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],bMZmx:[function(e,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(n);var s=e("./View.js"),r=a.interopDefault(s),o=e("./contactView.js"),i=a.interopDefault(o);class l extends r.default{_contactData;_parentElement=document.querySelector(".form-parent");clearForm(){document.querySelectorAll(".form-field").forEach((e=>e.value=""))}addHandlerSubmit(e){document.querySelector(".upload").addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],a=Object.fromEntries(n);e(a)}))}successMsg(){document.querySelector(".send").insertAdjacentHTML("afterend","<p>Gracias por enviar tu mensaje.</p>")}_generateInputMarkup(e){return`\n      \x3c!--Grid row--\x3e\n      <div class="row">\n        \x3c!--Grid column--\x3e\n        <div class="col-md-12 pb-5">\n          <div class="md-form mb-0 form-group filed">\n            <input\n              value=""\n              type="text"\n              id="${e.id}"\n              name="${e.name}"\n              class="form-control form-field"\n              placeholder="${e.placeholder}"\n              required\n            />\n            <label for="${e.for}" class="form-label mb-5">${e.label}</label>\n          </div>\n        </div>\n        \x3c!--Grid column--\x3e\n      </div>\n    `}getData(e){this._contactData=e,console.log(e)}_generateMarkup(){const e=this._data;return`\n      <div class="col-md-6 mb-md-0 py-5 px-5 mb-5 bg-blue">\n        <h3 class="pb-5 fw-bold">${e.title}</h3>\n        <form id="contact-form" class="form upload">\n          <fieldset disabled>\n           ${e.items.map((e=>this._generateInputMarkup(e))).join("")}\n            \n            \x3c!--Grid row--\x3e\n            <div class="text-md-left">\n              <button class="send btn btn-lg btn-outline-primary boton">\n                Enviar\n              </button>\n            </div>\n          </fieldset>\n        </form>\n      </div>\n      ${i.default._generateMarkup(this._contactData)}\n    `}}n.default=new l},{"./View.js":"66IrY","@parcel/transformer-js/src/esmodule-helpers.js":"k3151","./contactView.js":"iZJy1"}],iZJy1:[function(e,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(n);var s=e("./View.js"),r=a.interopDefault(s);class o extends r.default{_parentElement=document.querySelector(".status");_generateItemMarkup(e){return`\n      <div class="dbox w-100 d-flex align-items-center mb-5 fs-2">\n        <div\n          class="icon d-flex align-items-center justify-content-center"\n        >\n          <img\n            src="${e.src}"\n            height="35px"\n            width="20px"\n            class="img-fluid mb-3 me-3"\n            alt="${e.alt}"\n          />\n        </div>\n        <div class="text pl-3">\n          <p>\n            <span>${e.name}</span>\n            <a href="${e.href}">${e.content}</a>\n          </p>\n        </div>\n      </div>\n    \n    `}_generateMarkup(e){return`\n        <div class="col-md-6 mb-md-0 py-5 px-5 mb-5">\n          <h3 class="pb-5 fw-bold">${e.title}</h3>\n          <p class="mb-5 fs-5">\n            ${e.text}\n          </p>\n          ${e.items.map((e=>this._generateItemMarkup(e))).join("")}\n        </div>\n    \n    `}}n.default=new o},{"./View.js":"66IrY","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},["2bNRD"],"2bNRD","parcelRequire2041");
//# sourceMappingURL=index.5d679205.js.map
