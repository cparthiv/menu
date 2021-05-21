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
      },
      {
        title: "Bocadillos",
        dishes: [
          {
            name: "Pan cubano",
            description: 'Traditional bread loaf, why not take one home?',
            img: 'https://1.bp.blogspot.com/-r9O9tB7q6SM/Wn5ln0CkETI/AAAAAAAAQ_Y/8EauvrfkVw0MBPfZ5unEqor4ArWCc0SigCLcBGAs/s1600/Cuban%2BBread%2B4.jpg',
            link: 'https://www.justapinch.com/recipes/bread/other-bread/homemade-cuban-bread-pan-cubano-casero.html',
            price: 5
          },
          {
            name: 'Lo mejor cubano',
            description: 'Traditional cuban sandwich with meat and sauces',
            img: 'https://prods3.imgix.net/images/articles/2017_03/Feature-Cuban-Sandwich-Recipe.jpg?auto=format%2Ccompress&dpr=1.5&ixjsv=2.2.3&q=66&w=750',
            link: 'https://www.tastingtable.com/cook/recipes/cuban-sandwich-recipe',
            price: 7
          }, 
          {
            name: 'Medio dulce',
            description: 'Lo mejor cubano but on sweet bread',
            img: 'https://prods3.imgix.net/images/articles/2017_03/Feature-Cuban-Sandwich-Recipe.jpg?auto=format%2Ccompress&dpr=1.5&ixjsv=2.2.3&q=66&w=750',
            link: 'https://www.tastingtable.com/cook/recipes/cuban-sandwich-recipe',
            price: 8
          },
          {
            name: 'Pan con pollo',
            description: 'Grilled chicken sandwich served with fries',
            img: 'https://wannabite.com/wp-content/uploads/2014/03/Pan-con-Pollo-1.jpg',
            link: 'https://wannabite.com/pan-con-pollo-traditional-latino-chicken-sandwich/',
            price: 7
          },
          {
            price: 8,
            name: 'Pan con bistec',
            description: 'Cuban steak sandwich dressed with spices',
            img: 'https://www.cook2eatwell.com/wp-content/uploads/2018/07/Pan-con-Bistec-Image-2-1024x683.jpg',
            link: 'https://www.cook2eatwell.com/pan-con-bistec/'
          }
        ]
      },
      {
        title: 'Platos fuertes',
        dishes: [
          {
            name: 'Fricase de pollo',
            description: 'Cuban fried chicken in a thick white sauce',
            link: 'https://www.cocoandash.com/cuban-chicken-fricassee-fricase-de-pollo/',
            img: 'data:image/jpeg;base64,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,Z', 
            price: 16
          },
          {
            description: 'Large vegetarian quesidilla. Cheese, fajitas, black beans, rice, pico de gallo.',
            name: 'Vegetariana Quesadilla',
            link: 'https://ifoodreal.com/vegetarian-quesadilla/',
            img: 'https://ifoodreal.com/wp-content/uploads/2018/05/vegetarian-quesadilla-11.jpg',
            price: 10
          },
          {
            description: 'Large meat quesidilla. Cheese, fajitas, black beans, rice, pico de gallo, meat.',
            name: 'Meat Quesadilla',
            link: 'https://ifoodreal.com/vegetarian-quesadilla/',
            img: 'https://ifoodreal.com/wp-content/uploads/2018/05/vegetarian-quesadilla-11.jpg',
            price: 11
          },
          {
            name: 'Tortilla Espanola',
            description: 'Spanish omelette made of eggs, potatoes and onions',
            price: 8,
            link: 'https://www.allrecipes.com/recipe/147109/tortilla-espanola-spanish-tortilla/',
            img: 'data:image/jpeg;base64,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'
          }
        ]
      },
      {
        name: 'Bebidas',
        dishes: [
          {
            name: 'Coco-cola',
            description: 'Coco cola soda',
            price: 3,
            link: 'https://us.coca-cola.com/',
            img: 'https://us.coca-cola.com/content/dam/nagbrands/us/coke/en/home/coca-cola-original-20oz.png'
          },
          {
            name: 'Cafe con leche',
            description: 'Coffee made with milk, basically a latte',
            price: 5,
            link: 'https://en.wikipedia.org/wiki/Latte',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Latte_art_3.jpg/330px-Latte_art_3.jpgtwi'
          },
          {
            name: 'Cerveza',
            description: 'A popular alcoholic drink',
            price: 6,
            link: 'https://en.wikipedia.org/wiki/Beer',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Paulaner_Oktoberfest_Marzen_11.2oz_bottle_and_beer_mug.jpg/330px-Paulaner_Oktoberfest_Marzen_11.2oz_bottle_and_beer_mug.jpg'
          }
        ]
      }
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