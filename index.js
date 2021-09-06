const makePizza = function ($cheese, $meat) {
    console.log('Make pizza dough');
    console.log('Make red sauce (pasta sauce)');
    console.log('Put on ' + $cheese);
    console.log('Put on ' + $meat);
    console.log('Bake pizza at 200 deg in oven for 20 minutes');
};

// makePizza('Mozzarella', 'salami');

const makeSushi = function () {
    console.log('Take a nori leaf');
    console.log('Put on preprepped sushi rice');
    console.log('Put on fish');
    console.log('Put on vegetables');
    console.log('Put on toppings');
    console.log('Roll the leaf and cut it in parts');
}

makeSushi();
makeSushi();
makeSushi();
makePizza('Mozzarella', 'salami');
makePizza('Gorgonzola', 'Pulled Beef');