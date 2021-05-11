angular.module("App.controller", []).controller("BaseCtrl", [
  "$scope",
  function ($scope) {
    $scope.menu = [
      {
        title: "Appetizers"
      }
    ]
    $scope.cateringmessage =
      "Would you like us to cater your event? Email us: catering@restaurant.com";
    $scope.limitamount = 5;
    $scope.menucover = {
      title: "La Cena",
      description: "The best Mexican restaurant in town.",
      streetaddress: "420 Paradise Street.",
      city: "Westview",
      state: "NJ",
      zip: "92422",
      phone: "613.231.3212",
    };
    $scope.menuheight = 600;
  },
]);


// Example Recipes 
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