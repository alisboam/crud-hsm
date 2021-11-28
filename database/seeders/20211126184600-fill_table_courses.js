'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     
     await queryInterface.bulkInsert('courses', [{
      title: "Javascript",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/260px-Unofficial_JavaScript_logo_2.svg.png",
      teacher:"Ricardo Bontempo",
      classlist:"https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee, https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee",
      createdAt: "2021-11-27 19:39:45",
      updatedAt: "2021-11-27 19:39:45",
      deleted: "0"
     },
     {
      title: "Java",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: "https://s2.glbimg.com/G__W4DCsy-yZXuaT2BbPbmtycnI=/0x0:695x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/l/k/OBsA79Qk62yweE2oDpnA/2014-03-11-veja-como-resolver-problemas-com-o-java-no-pc.jpg",
      teacher:"Ricardo Bontempo",
      classlist:"https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee, https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee",
      createdAt: "2021-11-27 19:39:45",
      updatedAt: "2021-11-27 19:39:45",
      deleted: "0"
      },
      {
      title: "Python",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: "https://engenharia360.com/wp-content/uploads/2019/04/python-engenharia360-3-1024x512.png",
      teacher:"Ricardo Bontempo",
      classlist:"https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee, https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee",
      createdAt: "2021-11-27 19:39:45",
      updatedAt: "2021-11-27 19:39:45",
      deleted: "0"
      },
      {
      title: ".NET",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/2048px-.NET_Logo.svg.png",
      teacher:"Ricardo Bontempo",
      classlist:"https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee, https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee",
      createdAt: "2021-11-27 19:39:45",
      updatedAt: "2021-11-27 19:39:45",
      deleted: "0"
      },
      {
      title: "C#",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: "https://img2.gratispng.com/20180831/iua/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b89919299aab1.1956912415357423546294.jpg",
      teacher:"Ricardo Bontempo",
      classlist:"https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee, https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee",
      createdAt: "2021-11-27 19:39:45",
      updatedAt: "2021-11-27 19:39:45",
      deleted: "0"
      },
      {
      title: "Java Avançado",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: "https://s2.glbimg.com/G__W4DCsy-yZXuaT2BbPbmtycnI=/0x0:695x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/l/k/OBsA79Qk62yweE2oDpnA/2014-03-11-veja-como-resolver-problemas-com-o-java-no-pc.jpg",
      teacher:"Ricardo Bontempo",
      classlist:"https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee, https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee",
      createdAt: "2021-11-27 19:39:45",
      updatedAt: "2021-11-27 19:39:45",
      deleted: "0"
      },
      {
      title: "Python Avançado",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: "https://engenharia360.com/wp-content/uploads/2019/04/python-engenharia360-3-1024x512.png",
      teacher:"Ricardo Bontempo",
      classlist:"https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee, https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee",
      createdAt: "2021-11-27 19:39:45",
      updatedAt: "2021-11-27 19:39:45",
      deleted: "0"
      },
      {
      title: ".NET Avançado",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/2048px-.NET_Logo.svg.png",
      teacher:"Ricardo Bontempo",
      classlist:"https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee, https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee",
      createdAt: "2021-11-27 19:39:45",
      updatedAt: "2021-11-27 19:39:45",
      deleted: "0"
      },
      {
      title: "C# Avançado",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: "https://img2.gratispng.com/20180831/iua/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b89919299aab1.1956912415357423546294.jpg",
      teacher:"Ricardo Bontempo",
      classlist:"https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee, https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee",
      createdAt: "2021-11-27 19:39:45",
      updatedAt: "2021-11-27 19:39:45",
      deleted: "0"
      },
      {
      title: "Java Básico",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: "https://s2.glbimg.com/G__W4DCsy-yZXuaT2BbPbmtycnI=/0x0:695x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/l/k/OBsA79Qk62yweE2oDpnA/2014-03-11-veja-como-resolver-problemas-com-o-java-no-pc.jpg",
      teacher:"Ricardo Bontempo",
      classlist:"https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee, https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee",
      createdAt: "2021-11-27 19:39:45",
      updatedAt: "2021-11-27 19:39:45",
      deleted: "0"
      },
      {
      title: "Python Básico",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: "https://engenharia360.com/wp-content/uploads/2019/04/python-engenharia360-3-1024x512.png",
      teacher:"Ricardo Bontempo",
      classlist:"https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee, https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee",
      createdAt: "2021-11-27 19:39:45",
      updatedAt: "2021-11-27 19:39:45",
      deleted: "0"
      },
      {
      title: ".NET Básico",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/2048px-.NET_Logo.svg.png",
      teacher:"Ricardo Bontempo",
      classlist:"https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee, https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee",
      createdAt: "2021-11-27 19:39:45",
      updatedAt: "2021-11-27 19:39:45",
      deleted: "0"
      },
      {
      title: "C# Básico",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: "https://img2.gratispng.com/20180831/iua/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b89919299aab1.1956912415357423546294.jpg",
      teacher:"Ricardo Bontempo",
      classlist:"https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee, https://www.youtube.com/watch?v=avM4DpUr5HM&ab_channel=Digibee",
      createdAt: "2021-11-27 19:39:45",
      updatedAt: "2021-11-27 19:39:45",
      deleted: "0"
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('courses', null, {});
    
  }
};
