angular.module("App.controller", []).controller("BaseCtrl", [
  "$scope",
  function ($scope) {
    $scope.menu = [
      {
        title: "Appetizos", 
        dishes: [
          {
            name: "Mariquitas",
            description: "Plantain chips made every morning",
            img: "https://www.preciouscore.com/wp-content/uploads/2018/03/Homemade-Plantain-Chips.jpg",
            link: "https://www.seriouseats.com/fried-plantain-chips",
            price: 4
          },
          {
            name: 'Tamal en Hoja',
            description: 'Freshly made tamales served in corn skin',
            img: "https://hips.hearstapps.com/ellees.h-cdn.co/assets/16/35/1280x907/gallery-original-1456925520-hero1.jpg",
            link: "https://www.elle.com/es/living/buscador-recetas/a792980/tamales-en-hoja-de-platano/",
            price: 4
          },
          {
            name: 'Papas Fritas',
            description: 'Bowl of french fries served with ketchup',
            img: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTdadRX-us6yVNHFyxKZNExFS7sa_3LUMFcrm3yCGbT67XH_TiqEYr8og7Ny9sk-EqykOojYJZkopF5LNW-viI',
            link: "https://www.dinneratthezoo.com/homemade-french-fries/",
            price: 6
          },
          {
            name: 'Croquetas de Jamon',
            description: 'Ham croquettes, bite size ham covered in bread crumbs',
            img: 'https://asassyspoon.com/wp-content/uploads/ham-croquettes-croquetas-de-jamon1.jpg',
            link: 'https://asassyspoon.com/ham-croquettes/',
            price: 8
          },
          {
            name: 'Empanadas',
            description: 'Two fried or baked turnovers made of pastry and filling',
            img: "https://therecipecritic.com/wp-content/uploads/2020/04/easy-empanada.jpg",
            link: 'https://therecipecritic.com/empanadas/',
            price: 5
          }
        ]
      },
      {
        title: "Hamburguesas",
        dishes: [
          {
            name: 'Frita Cubana',
            description: 'Cuban burger with a pork patty and potatoes.',
            img: 'https://www.panningtheglobe.com/wp-content/uploads/2020/06/frita-burger-3.jpg',
            link: 'https://www.panningtheglobe.com/the-cuban-frita-burger-frita-cubana/',
            price: 8
          },
          {
            name: 'Hamburguesa con Queso',
            description: "Juicy cheeseburger with spicy BBQ sauce.",
            img: 'https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg',
            link: 'https://cocina-casera.com/hamburguesa-con-queso/',
            price: 6
          },
          {
            name: 'El Grande',
            description: 'Triple the size of the cheeseburger. Warning: not for weak stomachs',
            img: 'https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg',
            link: 'https://cocina-casera.com/hamburguesa-con-queso/',
            price: 13
          }
        ]
      } /*,
      {
        title: 'Bocadillos',
        dishes: [
          {
            name: ''
          }
        ]
      } */
    ]
    $scope.cateringmessage =
      "Would you like us to cater your event? Email us: catering@restaurant.com";
    $scope.limitamount = 5;
    $scope.menucover = {
      title: "Le Restaurante Grande",
      description: "The best Mexican and Cuban restaurant in town.",
      streetaddress: "420 Paradise Street.",
      city: "Westview",
      state: "NJ",
      zip: "92422",
      phone: "613.231.3212",
    };
    $scope.menuheight = 600;
  },
]);


// Example Config
///////////////////////////////////////////////
/*
function ($scope) {
  $scope.menu = [
    // placeholders
    {
      title: "Appetizers",
      dishes: [
        {
          name: "Crispy Gnocchi with Arugula",
          description: "Pan-fried potato gnocchi with arugula salad",
          img: "../js/restaurant-menu/images/11.jpg",
          link: "http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html",
          price: 5,
        },
        {
          name: "Sea Palm Spicy Peanut Curry",
          description:
            "Tender sea palm noodles, seasoned vegetables, spicy peanut curry and tempeh fenel croquettes",
          img: "",
          link: "",
          price: 5,
        },
        {
          name: "Lentil Caviar &amp; Arugula",
          description:
            "Black lentil curry with arugula salad, caramelized shallots and roasted garlic",
          img: "images/8.jpg",
          link: "http://herbivoracious.com/2012/09/caviar-lentil-salad-with-arugula-crispy-shallots-and-roasted-garlic-recipe.html",
          price: 5,
        },
        {
          name: "Tamari-Maple Glazed Tofu",
          description: "Wasabi emulsion, sesame seeds and scallions",
          img: "",
          link: "",
        },
        {
          name: "Rigatoni di Cavolfiore",
          description:
            "Rigatoni with roasted cauliflower and spicy tomato sauce",
          img: "images/3.jpg",
          link: "http://herbivoracious.com/2012/09/rigatoni-with-roasted-cauliflower-and-spicy-tomato-sauce-recipe.html",
        },
        {
          name: "Maple Barbeque Tofu",
          description:
            "Grilled marinated tofu, maple barbeque sauce, tahini slaw, grilled seasonal vegetables and mashed potatoes",
          img: "images/4.jpg",
          link: "http://herbivoracious.com/2012/07/king-oyster-mushroom-with-roasted-cherries-and-sage-no-that-isnt-meat-recipe-and-thought-process.html",
        },
        {
          name: "Luxur Oyster",
          description: "King oyster mushroom with roasted cherries and sage",
          img: "",
          link: "",
        },
        {
          name: "Saffron Chana Secret",
          description: "Saffron chickpea stew with grilled porcini mushrooms",
          img: "images/14.jpg",
          link: "http://herbivoracious.com/2012/06/saffron-chickpea-stew-with-grilled-porcini-mushroom-recipe.html",
        },
      ],
    },
    {
      title: "Main Courses",
      dishes: [
        {
          name: "Crispy Gnocchi with Arugula",
          description: "Pan-fried potato gnocchi with arugula salad",
          img: "images/11.jpg",
          link: "http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html",
        },
        {
          name: "Sea Palm Spicy Peanut Curry",
          description:
            "Tender sea palm noodles, seasoned vegetables, spicy peanut curry and tempeh fenel croquettes",
          img: "",
          link: "",
        },
        {
          name: "Lentil Caviar &amp; Arugula",
          description:
            "Black lentil curry with arugula salad, caramelized shallots and roasted garlic",
          img: "images/8.jpg",
          link: "http://herbivoracious.com/2012/09/caviar-lentil-salad-with-arugula-crispy-shallots-and-roasted-garlic-recipe.html",
        },
        {
          name: "Tamari-Maple Glazed Tofu",
          description: "Wasabi emulsion, sesame seeds and scallions",
          img: "",
          link: "",
        },
        {
          name: "Rigatoni di Cavolfiore",
          description:
            "Rigatoni with roasted cauliflower and spicy tomato sauce",
          img: "images/3.jpg",
          link: "http://herbivoracious.com/2012/09/rigatoni-with-roasted-cauliflower-and-spicy-tomato-sauce-recipe.html",
        },
        {
          name: "Maple Barbeque Tofu",
          description:
            "Grilled marinated tofu, maple barbeque sauce, tahini slaw, grilled seasonal vegetables and mashed potatoes",
          img: "images/4.jpg",
          link: "http://herbivoracious.com/2012/07/king-oyster-mushroom-with-roasted-cherries-and-sage-no-that-isnt-meat-recipe-and-thought-process.html",
        },
        {
          name: "Luxur Oyster",
          description: "King oyster mushroom with roasted cherries and sage",
          img: "",
          link: "",
        },
        {
          name: "Saffron Chana Secret",
          description: "Saffron chickpea stew with grilled porcini mushrooms",
          img: "images/14.jpg",
          link: "http://herbivoracious.com/2012/06/saffron-chickpea-stew-with-grilled-porcini-mushroom-recipe.html",
        },
      ],
    },
    {
      title: "Dessert",
      dishes: [
        {
          name: "Crispy Gnocchi with Arugula",
          description: "Pan-fried potato gnocchi with arugula salad",
          img: "images/11.jpg",
          link: "http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html",
        },
        {
          name: "Sea Palm Spicy Peanut Curry",
          description:
            "Tender sea palm noodles, seasoned vegetables, spicy peanut curry and tempeh fenel croquettes",
          img: "",
          link: "",
        },
        {
          name: "Lentil Caviar &amp; Arugula",
          description:
            "Black lentil curry with arugula salad, caramelized shallots and roasted garlic",
          img: "images/8.jpg",
          link: "http://herbivoracious.com/2012/09/caviar-lentil-salad-with-arugula-crispy-shallots-and-roasted-garlic-recipe.html",
        },
        {
          name: "Tamari-Maple Glazed Tofu",
          description: "Wasabi emulsion, sesame seeds and scallions",
          img: "",
          link: "",
        },
        {
          name: "Rigatoni di Cavolfiore",
          description:
            "Rigatoni with roasted cauliflower and spicy tomato sauce",
          img: "images/3.jpg",
          link: "http://herbivoracious.com/2012/09/rigatoni-with-roasted-cauliflower-and-spicy-tomato-sauce-recipe.html",
        },
      ],
    },
  ];
  $scope.cateringmessage =
    "Would you like us to cater your event? Email us: catering@restaurant.com";
  $scope.limitamount = 5;
  $scope.menucover = {
    title: "La Cena",
    description: "Fine Dining &amp; Gourmet Takeaway",
    streetaddress: "246 Wonderful Paradise Ln.",
    city: "Westview",
    state: "NJ",
    zip: "96542",
    phone: "613.231.3212",
  };
  $scope.menuheight = 600;
}
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////