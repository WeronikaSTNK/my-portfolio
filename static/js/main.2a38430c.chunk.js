(this["webpackJsonpmy-own-portfolio"]=this["webpackJsonpmy-own-portfolio"]||[]).push([[0],{18:function(e,a,t){},21:function(e,a,t){e.exports=t.p+"static/media/avatar.1dd42986.jpg"},25:function(e,a,t){e.exports=t.p+"static/media/polandrock.e20a2fde.png"},30:function(e,a,t){e.exports=t(48)},35:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},46:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(20),s=t.n(i),c=(t(35),t(6)),l=t(7),r=t(10),m=t(8),u=t(11),d=t(21),g=t.n(d),h=(t(18),t(22)),w=t.n(h),p=t(2),k=t(3),y=function(){return n.createElement("header",{id:"header"},n.createElement("div",null,n.createElement("img",{src:g.a,alt:"Logo"}),n.createElement("div",{className:"socialMedia"},n.createElement("a",{href:"https://github.com/WeronikaSTNK"},n.createElement(p.FontAwesomeIcon,{className:"iconHeader",icon:k.c,size:"3x"})),n.createElement("a",{href:"https://www.linkedin.com/in/weronika-stankiewicz"},n.createElement(p.FontAwesomeIcon,{className:"iconHeader",icon:k.g,size:"3x"})))),n.createElement("section",{className:"logoName"},n.createElement("h1",null,n.createElement("div",{className:"headerDarkName"},"Weronika  Stankiewicz")),n.createElement("h3",null,n.createElement("div",{className:"headerLightName"},"Junior Frontend Developer ")),n.createElement("div",{id:"scrollDownButton"},n.createElement("a",{href:"#about"},n.createElement("span",null))),n.createElement(w.a,{behavior:"smooth",buttonBackgroundColor:"var(--dark-main-color)",iconType:"arrow-up",style:{fontSize:"24px"},targetId:"header"})))},v=(t(42),t(25)),E=t.n(v),f=function(e,a,t){var n=new Date,o=new Date(e,a,t).getTime()-n.getTime(),i=Math.floor(o/864e5);return 1===i?"1 dzie\u0144":i+" dni"},z=function(e){var a=e.content,t=a.about,o=a.introduction1,i=a.introduction2,s=a.woodstockCounter,c=a.additionalInfo;return n.createElement(n.Fragment,null,n.createElement("div",{className:"aboutSection",id:"about"},n.createElement("h3",{className:"aboutMe"}," ",t),n.createElement("div",{className:"introduction"},n.createElement("p",{className:"aboutMeIntro"},o," "),n.createElement("p",{className:"aboutMeIntro"}," ",c),n.createElement("p",{className:"aboutMeIntro"},i," "),n.createElement("div",{className:"woodstockWrapper"},n.createElement("div",{className:"woodstock"},n.createElement("img",{src:E.a,alt:"PolandRock Festival"}),n.createElement("div",{className:"counter"}," ",f(2020,7,0)," "),n.createElement("p",null," ",s," "))))))},b=t(5),N=(t(43),t(4)),I=function(){return n.createElement("footer",null,n.createElement("p",null,"Created with",n.createElement(p.FontAwesomeIcon,{icon:N.faHeart})),n.createElement("p",null," weronika.stankiewicz94@gmail.com \xa9  2020"))},j=function(e){var a=e.content,t=a.soft_skills,o=a.skill_team,i=a.skill_communication,s=a.skill_ambitious,c=a.skill_learn,l=a.hard_skills,r=a.html,m=a.CSS,u=a.react,d=a.javascript,g=a.git,h=a.github,w=a.jira,y=a.sass,v=a.npm,E=a.hover;return n.createElement("div",{className:"skills"},n.createElement("h4",{className:"skillsHeader"}," ",t," "),n.createElement("p",{className:"descriptionNone"}," ",E),n.createElement("div",{className:"skillset"},n.createElement(p.FontAwesomeIcon,{className:"icon",icon:N.faUsers,size:"3x"}),n.createElement("span",{className:"description"}," ",o),n.createElement(p.FontAwesomeIcon,{className:"icon",icon:N.faComments,size:"3x"}),n.createElement("span",{className:"description"}," ",i),n.createElement(p.FontAwesomeIcon,{className:"icon",icon:N.faGraduationCap,size:"3x"}),n.createElement("span",{className:"description"}," ",s),n.createElement(p.FontAwesomeIcon,{className:"icon",icon:N.faChalkboardTeacher,size:"2x"}),n.createElement("span",{className:"description"}," ",c)),n.createElement("h4",{className:"skillsHeader"}," ",l),n.createElement("div",{className:"skillset"},n.createElement(p.FontAwesomeIcon,{className:"icon",icon:k.d,size:"3x"}),n.createElement("span",{className:"description"}," ",r),n.createElement(p.FontAwesomeIcon,{className:"icon",icon:k.a,size:"3x"}),n.createElement("span",{className:"description"}," ",m),n.createElement(p.FontAwesomeIcon,{className:"icon",icon:k.f,size:"3x"}),n.createElement("span",{className:"description"}," ",d),n.createElement(p.FontAwesomeIcon,{className:"icon",icon:k.i,size:"3x"}),n.createElement("span",{className:"description"}," ",u),n.createElement(p.FontAwesomeIcon,{className:"icon",icon:k.j,size:"3x"}),n.createElement("span",{className:"description"}," ",y),n.createElement(p.FontAwesomeIcon,{className:"icon",icon:k.c,size:"3x"}),n.createElement("span",{className:"description"}," ",h),n.createElement(p.FontAwesomeIcon,{className:"icon",icon:k.b,size:"3x"}),n.createElement("span",{className:"description"}," ",g),n.createElement(p.FontAwesomeIcon,{className:"icon",icon:k.e,size:"3x"}),n.createElement("span",{className:"description"}," ",w),n.createElement(p.FontAwesomeIcon,{className:"icon",icon:k.h,size:"3x"}),n.createElement("span",{className:"description"}," ",v)))},S=t(26),C=t(27),x=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(r.a)(this,Object(m.a)(a).call(this,e))).handleInputChange=function(e){e.preventDefault();var a=e.target,n=a.name,o=a.value;t.setState(Object(S.a)({},n,o))},t.clearForm=function(){t.setState({name:"",email:"",message:""})},t.sentMessage=function(e){if(e.preventDefault(),t.validateMail()){var a={name:t.state.name,email:t.state.email,message:t.state.message,auto_reply:"pl"===t.props.language?"Dzi\u0119kuj\u0119 za wiadomo\u015b\u0107":"Thank you for your message"},n="pl"===t.props.language?"Wiadomo\u015b\u0107 zosta\u0142a wys\u0142ana":"Message send successful",o="pl"===t.props.language?"Wysy\u0142anie wiadomo\u015bci nie powiod\u0142o si\u0119":"Failed to send the message";C.send("gmail","template_igc4o3aJ",a,"user_BayiJy60hGcj8YA4EPcyb").then((function(e){t.setState({messageStatus:n,color:"green"}),setTimeout((function(){t.setState({messageStatus:!1})}),3e3),console.log(n,e.status,e.text)}),(function(e){t.setState({messageStatus:o,color:"red"}),setTimeout((function(){t.setState({messageStatus:!1})}),3e3),console.log(e)})),setTimeout(t.clearForm,3e3)}},t.state={name:"",email:"",message:"",errors:{name:"",email:"",message:""},messageStatus:"",color:""},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"validateMail",value:function(){var e={},a=!0,t=this.props.language;(!this.state.name||this.state.name.length<3||this.state.name.length>25)&&(e.name="pl"===t?"Imi\u0119 powinno zawiera\u0107 minimum 3 i maksymalnie 25 znak\xf3w":"Your name should be between 3 and 25 characters long",a=!1),(!this.state.message||this.state.message.length<10||this.state.message.length>1e3)&&(e.message="pl"===t?"Wiadomo\u015b\u0107 powinna zawiera\u0107 od 10 do 1000 znak\xf3w":"Your message should consist between 10 and 1000 characters",a=!1),(!this.state.email||this.state.email.length<3)&&(e.email="pl"===t?"Email powinien sk\u0142ada\u0107 si\u0119 conajmniej z 3 znak\xf3w ":"Use minimum 3 symbols",a=!1);return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)||(e.email="pl"===t?"Niepoprawny":"Enter a valid email address",a=!1),this.setState({errors:e}),a}},{key:"render",value:function(){var e=this.props.content,a=e.your_name,t=e.your_email,n=e.your_message,i=e.send_message;return o.a.createElement("form",{className:"contactForm"},o.a.createElement("label",{htmlFor:"name"},a),o.a.createElement("input",{type:"text",className:"name",name:"name",id:"name",required:!0,onChange:this.handleInputChange,value:this.state.name}),this.state.errors.name?o.a.createElement("span",{className:"error"}," ",this.state.errors.name):"",o.a.createElement("label",{htmlFor:"email"},t),o.a.createElement("input",{type:"email",className:"email",name:"email",id:"email",required:!0,onChange:this.handleInputChange,value:this.state.email}),this.state.errors.email?o.a.createElement("span",{className:"error"}," ",this.state.errors.email):"",o.a.createElement("label",{htmlFor:"message"},n),o.a.createElement("textarea",{className:"message",name:"message",id:"message",cols:"30",rows:"8",required:!0,onChange:this.handleInputChange,value:this.state.message}),this.state.errors.message?o.a.createElement("span",{className:"error"}," ",this.state.errors.message):"",o.a.createElement("button",{className:"formButton",type:"submit",onClick:this.sentMessage},i),this.state.messageStatus?o.a.createElement("span",{className:this.state.color}," ",this.state.messageStatus):"")}}]),a}(n.Component),_=function(e){var a=e.content,t=a.contact,o=a.send_me_a_message;return n.createElement("div",{className:"contactSection"},n.createElement("h3",null," ",t),n.createElement("div",{className:"socialMedia"},n.createElement("a",{href:"https://github.com/WeronikaSTNK"},n.createElement(p.FontAwesomeIcon,{className:"iconHeader",icon:k.c,size:"3x"})),n.createElement("a",{href:"https://www.linkedin.com/in/weronika-stankiewicz"},n.createElement(p.FontAwesomeIcon,{className:"iconHeader",icon:k.g,size:"3x"}))),n.createElement("div",{className:"contactFormWrapper"},n.createElement("p",{className:"sendMeAMessage"}," ",o),n.createElement(x,{id:"mainContactForm",className:"contactForm",name:"contactForm",method:"post",action:"",content:e.content,language:e.content.language})))},M=t(12),F=t.n(M),A=(t(46),function(e){var a=e.langHandler,t=e.language,o=e.handleMenuClick,i=e.content,s=i.about,c=i.contact,l=i.home;return n.createElement("div",{className:"navigation"},n.createElement("nav",{className:"navbar",onClick:o},n.createElement("span",{className:"navbar-toggle",id:"toggle"},n.createElement(p.FontAwesomeIcon,{icon:N.faBars,size:"xs"})),n.createElement("div",{className:"languageOptions"},n.createElement("button",{className:"pl"===t?"navigationButton current":"navigationButton",value:"pl",onClick:a},"PL"),n.createElement("button",{className:"en"===t?"navigationButton current":"navigationButton",value:"en",onClick:a},"EN")),n.createElement("ul",{className:"main-nav",id:"menu"},n.createElement("li",{className:"nav-links",onClick:o},n.createElement(F.a,{selector:"header"},n.createElement("button",{className:"navigationListButton ",id:"btn"},l))),n.createElement("li",{className:"nav-links",onClick:o},n.createElement(F.a,{selector:".aboutSection"},n.createElement("button",{className:"navigationListButton"},s))),n.createElement("li",{className:"nav-links",onClick:o},n.createElement(F.a,{selector:".contactSection"},n.createElement("button",{className:"navigationListButton"},c))))))}),T=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=Object(r.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={language:"pl",content:{},mobile:!0,scrollY:0,openMenu:!1,scroll:!1},t.getData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pl",a=b.filter((function(a){return a.language===e}));t.setState({content:a[0]})},t.navigationToggle=function(e){var a=document.getElementById("menu");document.getElementById("toggle").addEventListener("click",(function(){a.classList.toggle("active")}))},t.handleMenuClick=function(){t.setState({openMenu:!t.state.openMenu})},t.langHandler=function(e){var a=e.target.value;t.setState({language:a})},t.handleScroll=function(e){var a=window.scrollY;t.setState({scrollY:a})},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"checkDevice",value:function(){var e=window.innerWidth>0?window.innerWidth:"640";(window.innerHeight>0?window.innerHeight:"360")>=768&&e>=1024?this.setState({mobile:!1}):this.setState({mobile:!0})}},{key:"componentDidMount",value:function(){this.getData(),this.checkDevice(),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"componentDidUpdate",value:function(){this.state.language!==this.state.content.language&&this.getData(this.state.language),this.navigationToggle()}},{key:"render",value:function(){var e=this.state,a=e.language,t=e.content,n=e.scrollY;return o.a.createElement(o.a.Fragment,null,o.a.createElement(A,{navigationToggle:this.navigationToggle,langHandler:this.langHandler,scrollHandler:this.scrollHandler,language:a,content:t,scrollY:n}),o.a.createElement(y,null),o.a.createElement("main",null,o.a.createElement(z,{content:t,scrollY:n}),o.a.createElement(j,{content:t,scrollY:n}),o.a.createElement(_,{content:t,scrollY:n,language:a})),o.a.createElement(I,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(47);s.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e){e.exports=JSON.parse('[{"language":"pl","home":"Start","about":"O mnie","contact":"Kontakt","soft_skills":"Umiej\u0119tno\u015bci mi\u0119kkie","skill_team":"\u015awietnie czuj\u0119 si\u0119 pracuj\u0105c zespo\u0142owo","skill_communication":"Jestem bardzo komunikatywna i \u0142atwo nawi\u0105zuj\u0119 kontakt.","skill_ambitious":"Zawsze by\u0142am bardzo ambitna. Studia ko\u0144czy\u0142am z ocen\u0105 bardzo dobr\u0105 i stypendum rektora.","skill_learn":"Lubi\u0119 si\u0119 uczy\u0107. Wiem, \u017ce programowanie wymaga du\u017co samozaparcia i wytrwa\u0142o\u015bci.","hard_skills":"Umiej\u0119tno\u015bci twarde","html":"Znam HTML","CSS":"Znam CSS","javascript":"Ca\u0142y czas ucz\u0119 si\u0119 j\u0119zyka JavaScript. Potrafi\u0119 ju\u017c wiele, chc\u0119 potrafi\u0107 wi\u0119cej","react":"React.js jest moj\u0105 ulubion\u0105 cz\u0119\u015bci\u0105 frontendu. Programuj\u0119 w nim funkcyjnie.","git":"Bez problemu korzystam z git\'a","github":"Sprawnie poruszam si\u0119 po githubie i gitlabie","jira":"Zdoby\u0142am ju\u017c do\u015bwiadczenie w obs\u0142udze jiry.","sass":"Nigdy nie u\u017cywa\u0142am za du\u017co, jednak wiem co mo\u017cna robic przy pomocy SASS\'a i nie stroni\u0119 od u\u017cywania tej biblioteki","scrum":"Znam metodologi\u0119 pracy w SCRUMie.","redux":"Rozumiem architektur\u0119 Flux i jednokierunkowy przep\u0142yw danych w Reduxie","materialUI":"Wieloktrotnie korzysta\u0142am z tej biblioteki","flexbox":"Nauczy\u0142am si\u0119 flexboxa, aby sprawnie tworzy\u0107 responsywne widoki","cypress":"Moja przygoda z prac\u0105 w IT zacz\u0119\u0142a si\u0119 pisaniem test\xf3w end to end w Cypress.io","vscode":"Pisz\u0119 w Visual Studio Code. Znam, ceni\u0119 i lubi\u0119.","npm":"Korzystam z npm\'a","conf":"Mam niewielkie do\u015bwiadczenie w pisaniu dokumentacji w Confluence","styled_components":"Potrafi\u0119 zaimplementowa\u0107 w projekcie","introduction1":"Nazywam si\u0119 Weronika. Nauk\u0119 programowania zacz\u0119\u0142am spontanicznie. Ko\u0144czy\u0142am w\xf3wczas Mechanik\u0119 i Budow\u0119 Maszyn na Politechnice Gda\u0144skiej i zrozumia\u0142am, \u017ce zab\u0142\u0105dzi\u0142am wybieraj\u0105c kierunek studi\xf3w w szkole \u015bredniej. Rozpocz\u0119\u0142am od nauki HTML, CSS, JavaScript i React.js. Dzi\u0119ki swojemu uporowi w 3 miesi\u0105ce znalaz\u0142am pierwszy sta\u017c. Bardzo chc\u0119 rozwija\u0107 umiej\u0119tno\u015bci w technologiach webowych. Wiem, \u017ce ogrom nauki przede mn\u0105. Jednak wiem te\u017c, \u017ce w\u0142asnie tym chc\u0119 si\u0119 zajmowa\u0107 w \u017cyciu.","introduction2":"Prywatnie jestem ekstraweryczk\u0105. Uwielbiam kontakt z lud\u017ami. Mam cudownego synka i m\u0119\u017ca. Jestem ogromn\u0105 entuzjastk\u0105 muzyki i ka\u017cdego roku odliczam czas w dniach, kt\xf3re pozosta\u0142y do Woodstocku :). Jestem wegetariank\u0105, a w wolnych chwilach uwielbiam eksperymentowa\u0107 w bezmi\u0119snej kuchni, czyta\u0107 ksi\u0105\u017cki (literatura faktu i krymina\u0142y) oraz od jakiego\u015b czasu \u0107wicz\u0119 pole dance. ","send_me_a_message":"Je\u015bli masz jakie\u015b pytania, prosz\u0119 wy\u015blij wiadomo\u015b\u0107 lub skontaktuj si\u0119 ze mn\u0105 na LinkedIn\'ie.","your_name":"Twoje Imi\u0119:","your_email":"E-mail","your_message":"Wiadomo\u015b\u0107","send_message":"Wy\u015blij wiadomo\u015b\u0107","hover":" najed\u017a na ikonk\u0119 ","woodstockCounter":" do najpi\u0119kniejszego festiwalu na \u015bwiecie!","additionalInfo":"Posiadam do\u015bwiadczenie w testowaniu E2E aplikacji webowej z wykorzystaniem narz\u0119dzia Cypress.io oraz w implementacji i rozbudowie aplikacji w React.js.  Dodatkowo, jest mi znana praca w metodologii SCRUM."},{"language":"en","home":"Start","about":"About","soft_skills":"Soft skills","skill_team":"I feel great with teamwork","skill_communication":"I am very communicate and I easily make contact.","skill_ambitious":"I\'ve always been very ambitious. I graduated with a very good grade and a rector\'s scholarship for the best students.","skill_learn":"I like to learn (really! :) )","hard_skills":"Hard skills","html":"Knowledge of HTML","CSS":"Knowledge of CSS","javascript":"I\'m learning JavaScript all the time. I can code a lot, I want to be able to code more","react":"React.js is my favorite part of the frontend technologies.","git":"I use git without any problems","github":"I use github/gitlab","jira":"I have already gained experience in using JIRA.","sass":" I\'ve never used too much but I know what you can do with SASS ","scrum":"I know SCRUM methodology","redux":"I understand Flux architecture and one-way data flow in Redux","materialUI":"I used this library many times ","flexbox":"I learned flexbox to create responsive views efficiently","cypress":"My adventure with working in IT began with writing end to end tests using Cypress.io","vscode":"I use Visual Studio Code","npm":"I use npm","conf":"Mam niewielkie do\u015bwiadczenie w pisaniu dokumentacji w Confluence","styled_components":"Potrafi\u0119 zaimplementowa\u0107 w projekcie","introduction1":"My name is Weronika. I started learning programming spontaneously. At the time I was finishing Mechanics and Machine Building at the Gda\u0144sk University of Technology and I understood that I got lost by choosing a major in high school. I started learning HTML, CSS, JavaScript and React.js. Thanks to my persistence, I found my first internship in 3 months. I really want to develop skills in web technologies. I know that there is a lot of science ahead of me. However, I also know that this is what I want to do in my life.","introduction2":" Privately, I\'m an extrovert. I love contact with people. I have a wonderful son and husband. I am a huge music enthusiast and every year I count the time in the days remaining to Woodstock :). I am a vegetarian, and in my free time I love to experiment in meatless cuisine, read books (non-fiction and detective stories) and have been practicing pole dance for some time.","contact":"Contact","send_me_a_message":"If you have any questions, please send a message or contact me on LinkedIn.","your_name":"Your name:","your_email":"Your e-mail","your_message":"Message","send_message":"Sent a message","hover":"hover over the icon ","woodstockCounter":" to the most beautiful festival in the world!","additionalInfo":"I have experience in testing E2E of a web application using the Cypress.io tool and in the implementation and development of applications in React.js. In addition, I am familiar with work in SCRUM methodology."}]')}},[[30,1,2]]]);
//# sourceMappingURL=main.2a38430c.chunk.js.map