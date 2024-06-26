export const skills = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'HTML',
        image: 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png',
      },
      {
        name: 'CSS',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
      },
      {
        name: 'Scss',
        image: 'src/assets/sass.svg',
      },
      {
        name: 'Bootstrap',
        image: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
      },

      {
        name: 'JavaScript',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
      },

      {
        name: 'React',
        image: 'src/assets/react.svg',
      },
      {
        name: 'Redux',
        image: 'src/assets/redux.svg',
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Node Js',
        image: 'https://nodejs.org/static/images/logo.svg',
      },

      {
        name: 'PHP',
        image: 'src/assets/php.svg',
      },
      {
        name: 'MySQL',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
      },
    ],
  },

  {
    title: 'Others',
    skills: [
      {
        name: 'Git',
        image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg',
      },
      {
        name: 'GitHub',
        image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      },

      {
        name: 'VS Code',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519',
      },
      {
        name: 'Gulp',
        image: 'src/assets/gulp.svg',
      },
      {
        name: 'Adobe PS',
        image: 'src/assets/Ps.svg',
      },
      {
        name: 'Adobe XD',
        image: 'src/assets/adobe-xd.svg',
      },
      {
        name: 'Figma',
        image: 'src/assets/figma.svg',
      },
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'React Pizza',
    dateEng: 'Aug 2023',
    dateRu: 'Авг 2023',
    descriptionEng:
      "React Pizza is an online store with checkout, product search and filtering. Technologies used: - ReactJS 18 - TypeScript - Redux Toolkit (data storage / pizzas) - React Router v6 (navigation) - Axios + Fetch (sending request to backend) - React Hooks - Prettier (code formatting) - CSS-Modules / SCSS (styling) - React Content Loader (skeleton) - React Pagination - Lodash.Debounce - Code Splitting, React Loadable, useWhyDidYouUpdate'",
    descriptionRu:
      'React Pizza - это интернет-магазин с кассой, поиском и фильтрацией товаров. Используемые технологии: - ReactJS 18 - TypeScript - Redux Toolkit (хранение данных / пиццы) - React Router v6 (навигация) - Axios + Fetch (отправка запроса на бэкенд) - React Hooks - Prettier (форматирование кода) - CSS-модули / SCSS (стилизация) - React Content Loader (скелет) - React Pagination - Lodash.Debounce - разделение кода, React Loadable, useWhyDidYouUpdate',
    image: 'src/assets/07.jpg',
    tags: [
      'React Js 18',
      'Redux Toolkit',
      'TypeScript',
      'React Router v6',
      'mockap.io',
      'Axios + Fetch',
      'Scss',
      'Html',
    ],
    category: 'store',
    github: 'https://github.com/kenform/react-pizza',
    webapp: 'https://kenform.github.io/react-pizza/',
  },
  {
    id: 2,
    title: 'React Sneakers',
    dateEng: 'Aug 2023',
    dateRu: 'Авг 2023',
    descriptionEng:
      'React Sneakers is an online store with the ability to checkout, bookmark your favorite product and view your orders. Home page, cart and order data are loaded from mockapi.io. Axios library is used for HTTP requests.',
    descriptionRu:
      'React Sneakers - это интернет-магазин с возможностью оформления заказа, добавления понравившегося товара в закладки и просмотра заказов. Главная страница, корзина и данные о заказах загружаются из mockapi.io. Для HTTP-запросов используется библиотека Axios.',
    image: 'src/assets/01.jpg',
    tags: ['React Js', 'mockap.io', 'Scss', 'Eslint', 'Html'],
    category: 'store',
    github: 'https://github.com/kenform/react-sneakers',
    webapp: 'https://kenform.github.io/react-sneakers/',
  },
  {
    id: 3,
    title: 'FarmVest',
    dateEng: 'Aug 2023',
    dateRu: 'Авг 2023',
    descriptionEng:
      'FarmVest is a landing page advertising a web application. There are complex animated geometric shapes and parallax when scrolling the page.',
    descriptionRu:
      'FarmVest - это лендинг, рекламирующий веб-приложение. На странице присутствуют сложные анимированные геометрические фигуры и параллакс при прокрутке страницы.',
    image: 'src/assets/02.jpg',
    tags: ['Html', 'Scss', 'Javascript', 'Gulp'],
    category: 'landing',
    github: 'https://github.com/kenform/FarmVest',
    webapp: 'https://kenform.github.io/FarmVest/',
  },
  {
    id: 4,
    title: 'Tzeezotje',
    dateEng: 'Jul 2023',
    dateRu: 'Июль 2023',
    descriptionEng:
      'Tzeezotje is a landing page promoting a restaurant. There is a modal window with sending data to email using Ajax. Swiper library is used for the slider',
    descriptionRu:
      'Tzeezotje - это лендинг, рекламирующий ресторан. Имеется модальное окно с отправкой данных на электронную почту с помощью Ajax. Для слайдера используется библиотека Swiper',
    image: 'src/assets/03.jpg',
    tags: ['Html', 'Scss', 'Javascript', 'Gulp', 'php', 'AJAX', 'Gulp', 'Swiper'],
    category: 'landing',
    github: 'https://github.com/kenform/Tzeezotje',
    webapp: 'https://kenform.github.io/Tzeezotje/',
  },
  {
    id: 5,
    title: 'Biysk',
    dateEng: 'Sept 2023',
    dateRu: 'Сент 2023',
    descriptionEng:
      'Biysk is a landing page promoting a city "Biys. When you click on the slider image, a modal window is displayed. Swiper library is used for the slider',
    descriptionRu:
      'Бийск - это лендинг, рекламирующая город Бийск. При нажатии на изображение слайдера отображается модальное окно. Для слайдера используется библиотека Swiper',
    image: 'src/assets/08.jpg',
    tags: ['Html', 'Scss', 'Javascript', 'Gulp', 'Swiper'],
    category: 'landing',
    github: 'https://github.com/kenform/Biysk',
    webapp: 'https://kenform.github.io/Biysk/',
  },

  {
    id: 6,
    title: 'Britlex',
    dateEng: 'Mar 2022',
    dateRu: 'Март 2022',
    descriptionEng:
      'Britlex is a simple landing page promoting a language school. There is animation of elements appearing when scrolling.',
    descriptionRu:
      'Britlex - это лендинг, рекламирующая языковую школу. Имеется анимация появления элементов при прокрутке.',
    image: 'src/assets/04.jpg',
    tags: ['Html', 'Scss', 'Javascript', 'Gulp'],
    category: 'landing',
    github: 'https://github.com/kenform/Britlex',
    webapp: 'https://kenform.github.io/Britlex/',
  },
  {
    id: 7,
    title: 'Fagot',
    dateEng: 'Mar 2022',
    dateRu: 'март 2022',
    descriptionEng:
      'Fagot is a multi-page website advertising the Y.S. Golberg Medical Clinic. Swiper library is used for sliders.',
    descriptionRu:
      'Fagot - это многостраничный сайт, рекламирующий медицинскую клинику Ю.С. Гольберга. Для слайдеров используется библиотека Swiper.',
    image: 'src/assets/05.jpg',
    tags: ['Html', 'Scss', 'Javascript', 'Gulp', 'Swiper'],
    category: 'other',
    github: 'https://github.com/kenform/Fagot',
    webapp: 'https://kenform.github.io/Fagot/',
  },
  {
    id: 8,
    title: 'Quiz',
    dateEng: 'Oct 2023',
    dateRu: 'Окт 2023',
    descriptionEng:
      'A quiz site is a way of attracting potential customers through quizzes, tests or surveys. A quiz is a small website where user interaction takes place in the form of a game.',
    descriptionRu:
      'Квиз-сайт — это способ привлечения потенциальных клиентов с помощью викторин, тестирования или опросов. Квиз представляет собой небольшой сайт, где в форме игры происходит взаимодействие с пользователем.',
    image: 'src/assets/09.jpg',
    tags: ['Html', 'Scss', 'Javascript', 'React'],
    category: 'other',
    github: 'https://github.com/kenform/Quiz',
    webapp: 'https://kenform.github.io/Quiz/',
  },
  {
    id: 9,
    title: 'Modal',
    dateEng: 'Oct 2023',
    dateRu: 'Окт 2023',
    descriptionEng:
      'A modal window in a graphical user interface is a window that blocks the user from working with the parent application until the user closes the window.',
    descriptionRu:
      'Модальное окно в графическом интерфейсе пользователя — окно, которое блокирует работу пользователя с родительским приложением до тех пор, пока пользователь это окно не закроет.',
    image: 'src/assets/10.jpg',
    tags: ['Html', 'Scss', 'Javascript', 'React'],
    category: 'other',
    github: 'https://github.com/kenform/Modal',
    webapp: 'https://kenform.github.io/Modal/',
  },
  {
    id: 10,
    title: 'Counter',
    dateEng: 'Oct 2023',
    dateRu: 'Окт 2023',
    descriptionEng:
      'In website building, counters are used to keep track of the number and behavior of visitors.',
    descriptionRu:
      'В сайтостроении счетчики используются для учета количества и поведения посетителей.',
    image: 'src/assets/11.jpg',
    tags: ['Html', 'Scss', 'Javascript', 'React'],
    category: 'other',
    github: 'https://github.com/kenform/Counter',
    webapp: 'https://kenform.github.io/Counter/',
  },
  {
    id: 11,
    title: 'Users',
    dateEng: 'Oct 2023',
    dateRu: 'Окт 2023',
    descriptionEng:
      'Working with useEffect hook. Sending a request to the backend using fetch and rendering that data .Skeleton using react-content-loader library. Searching for users. Render a list of users. Adding/removing users from the invitation array. Displaying content loading information',
    descriptionRu:
      'Работа с хуком useEffect. Отправка запроса на бэкенд с помощью fetch и рендер этих данных .Скелетон с помощью библиотеки react-content-loader. Поиск пользователей. Рендер списка пользователей. Добавление/удаление пользователей из массива приглашений. Отображение информации о загрузке контента',
    image: 'src/assets/12.jpg',
    tags: ['Html', 'Scss', 'Javascript', 'React'],
    category: 'other',
    github: 'https://github.com/kenform/Users',
    webapp: 'https://kenform.github.io/Users/',
  },
  {
    id: 12,
    title: 'currency-convertor',
    dateEng: 'Oct 2023',
    dateRu: 'Окт 2023',
    descriptionEng:
      'Working with useEffect hook. Getting a list of currency rates from a separate API (axios) Convert one currency to another and vice versa (without backend)',
    descriptionRu:
      'Работа с хуком useEffect. Получение списка курса валют из отдельного API (axios) Конвертация одной валюты в другую и наоборот (без бэкенда)',
    image: 'src/assets/13.jpg',
    tags: ['Html', 'Scss', 'Javascript', 'React'],
    category: 'other',
    github: 'https://github.com/kenform/currency-convertor',
    webapp: 'https://kenform.github.io/currency-convertor/',
  },
]
export const experiences = [
  {
    id: 0,
    img: 'https://media.licdn.com/dms/image/D560BAQFDUKPSU8P0Lw/company-logo_200_200/0/1687947132305?e=1698278400&v=beta&t=cBF3SdszRLspmyvV-rHa1y4tdj_hjjivH7Xy0Z7kOD8',
    role: 'DevOps & Fullstack Engineering Intern',
    company: 'Flipr Inovations Pvt. Ltd.',
    date: 'Aug 2023 - July 2023',
    desc: 'Working on Flipr Platforms, managing DevOps, and streamlining the process with automation.',
    skills: [
      'Docker',
      'Terraform',
      'AWS',
      'EC2',
      'Portainer',
      'Nginx',
      'JavaScript',
      'TypeScript',
      'Node Js',
      ' Next Js',
    ],
    doc: 'https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/WhatsApp%20Image%202023-05-05%20at%2012.07.39%20AM.jpeg?alt=media&token=9f0e1648-568b-422d-bd0b-1f125f722245',
  },
  {
    id: 0,
    img: 'https://media.licdn.com/dms/image/D560BAQFDUKPSU8P0Lw/company-logo_200_200/0/1687947132305?e=1698278400&v=beta&t=cBF3SdszRLspmyvV-rHa1y4tdj_hjjivH7Xy0Z7kOD8',
    role: 'Frontend Engineer Intern',
    company: 'Neurobit',
    date: 'June 2023 - Present',
    desc: 'Working on the frontend of the web application using ReactJS, Redux, and Material UI.',
    skills: ['ReactJS', 'Redux', 'NodeJs', 'Material UI', 'HTML', 'CSS', 'JavaScript'],
    doc: 'https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730',
  },
  {
    id: 1,
    img: 'https://media.licdn.com/dms/image/D560BAQFDUKPSU8P0Lw/company-logo_200_200/0/1687947132305?e=1698278400&v=beta&t=cBF3SdszRLspmyvV-rHa1y4tdj_hjjivH7Xy0Z7kOD8',
    role: 'Fullstack Externship',
    company: 'Flipr',
    date: 'June 2023 - July 2023',
    desc: 'Built an employee management full stack web app used Docker and deployed on AWS ec2. I was the top performer in the program.',
    skills: [
      'ReactJS',
      'Redux',
      'NodeJs',
      'Material UI',
      'HTML',
      'CSS',
      'JavaScript',
      'Docker',
      'AWS',
      'MongoDB',
    ],
  },

  {
    id: 4,
    img: 'https://media.licdn.com/dms/image/D560BAQFDUKPSU8P0Lw/company-logo_200_200/0/1687947132305?e=1698278400&v=beta&t=cBF3SdszRLspmyvV-rHa1y4tdj_hjjivH7Xy0Z7kOD8',
    role: 'Android Developer Intern',
    company: 'Rudraksha Welffare Foundation',
    date: 'June 2021 - Oct 2021',
    desc: "As an Android Developer Intern at Rudraksha Welfare Foundation from June 2021 to October 2021, I gained valuable hands-on experience in application development. During my tenure, I contributed to the development of the application's back-end cloud functions using Firebase and implemented a front-end with the MVVM structure, which was designed using Figma. I also added a one-to-one video call feature, conceptualized new features, and optimized app performance. This internship helped me enhance my skills in Android development and gave me an opportunity to work in a collaborative team environment.",
    skills: ['Android', 'Java', 'Kotlin', 'XML', 'Node Js', 'Cloud Firestore', 'Firebase', 'Figma'],
    doc: 'https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/WhatsApp%20Image%202023-05-05%20at%2012.07.39%20AM.jpeg?alt=media&token=9f0e1648-568b-422d-bd0b-1f125f722245',
  },
]

export const education = [
  {
    id: 0,
    img: 'https://methodistschool-dankuni.webs.com/NEW%20BADGE.jpg',
    school: 'Kalinga Institute of Industrial Technology, Bhubaneswar',
    date: 'Oct 2021 - Sep 2025',
    grade: '8.71 CGPA',
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Kalinga Institute of Industrial Technology, Bhubaneswar. I have completed 4 semesters and have a CGPA of 8.71. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the Google Developers Student Club (GDSC) at KIIT, where I am learning and working on exciting projects with a team of talented developers.",
    degree: 'Bachelor of Technology - BTech, Computer Science and Engineering',
  },
  {
    id: 1,
    img: 'https://methodistschool-dankuni.webs.com/NEW%20BADGE.jpg',
    school: 'Methodist School, Dankuni',
    date: 'Apr 2019 - Apr 2025',
    grade: '88.2%',
    desc: 'I completed my class 12 high school education at Methodist School, Dankuni, where I studied Science with Computer Science.',
    degree: 'ISC(XII), Science with Computer',
  },
  {
    id: 2,
    img: 'https://methodistschool-dankuni.webs.com/NEW%20BADGE.jpg',
    school: 'Methodist School, Dankuni',
    date: 'Apr 2017 - Apr 2019',
    grade: '92.3%',
    desc: 'I completed my class 10 education at Methodist School, Dankuni, where I studied Science with Computer Application.',
    degree: 'ICSC(X), Science with Computer',
  },
]
