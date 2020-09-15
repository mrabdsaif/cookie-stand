'Use strict';

// //Location 1

// var Seattlesales = {
//     location: 'seattle',
//     min: 23,
//     max: 65,
//     hour: ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM', '12-PM', '01-PM', '02-PM', '03-PM', '04-PM', '05-PM', '06-PM', '07-PM'],
//     averageCookiPerCustomer: 6.3, 
//     custPerHour: [],
//     salesPerHour:[],
//     purshasedCookies:0,
//     dailyTotal: 0,
//     getrandomNum: function () { 
//         for (var j = 0; j < this.hour.length; j++) {
//             this.custPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//             console.log(this.hour[j] + ':' + this.custPerHour[j]);
//         }
//     },
//     simulatedAmount: function () {
//         this.getrandomNum();
//         for (var i = 0; i <= this.hour.length; i++) {
//              this.purshasedCookies = Math.floor(this.custPerHour[i] * this.averageCookiPerCustomer);
//              this.salesPerHour.push(this.purshasedCookies);
//             this.dailyTotal += this.purshasedCookies;

//             console.log(this.dailyTotal);
//             // return this.dailyTotal;
//         }
//     },
//     render: function () {
//         var parentElement = document.getElementById('seattlesales');
//         var article = document.createElement('article');
//         parentElement.appendChild(article);

//         var h2 = document.createElement('h2');
//         h2.textContent = this.location;
//         article.appendChild(h2);

//         var p = document.createElement('p');
//         p.textContent = 'average Cookies Per Customer :' + this.averageCookiPerCustomer;
//         article.appendChild(p);

//         var ul = document.createElement('ul');
//         article.appendChild(ul);

//         for (var i = 0; i < this.hour.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = this.hour[i] + ' : ' + this.salesPerHour[i] + ' cookies';
//             ul.appendChild(li);
//         }
//          var li = document.createElement('li');
//          li.textContent = 'Total: '  + this.dailyTotal + ' cookies';
//          ul.appendChild(li);
//     }
// };
// Seattlesales.getrandomNum();
// Seattlesales.simulatedAmount();
// Seattlesales.render();

// //Location  2 !!!

// var Tokyo = {
//     location: 'Tokyo',
//     min: 3,
//     max: 24,
//     hour: ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM', '12-PM', '01-PM', '02-PM', '03-PM', '04-PM', '05-PM', '06-PM', '07-PM'],
//     averageCookiPerCustomer: 1.2, 
//     custPerHour: [],
//     salesPerHour:[],
//     purshasedCookies:0,
//     dailyTotal: 0,
//     getrandomNum: function () { 

//         for (var j = 0; j < this.hour.length; j++) {
//             this.custPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//             console.log(this.hour[j] + ':' + this.custPerHour[j]);
//         }
//     },
//     simulatedAmount: function () {
//         this.getrandomNum();
//         for (var i = 0; i <= this.hour.length; i++) {
//              this.purshasedCookies = Math.floor(this.custPerHour[i] * this.averageCookiPerCustomer);
//              this.salesPerHour.push(this.purshasedCookies);
//             this.dailyTotal += this.purshasedCookies;

//             console.log(this.dailyTotal);
//             // return this.dailyTotal;
//         }
//     },
//     render: function () {
//         var parentElement = document.getElementById('seattlesales');
//         var article = document.createElement('article');
//         parentElement.appendChild(article);

//         var h2 = document.createElement('h2');
//         h2.textContent = this.location;
//         article.appendChild(h2);

//         var p = document.createElement('p');
//         p.textContent = 'average Cookies Per Customer :' + this.averageCookiPerCustomer;
//         article.appendChild(p);

//         var ul = document.createElement('ul');
//         article.appendChild(ul);

//         for (var i = 0; i < this.hour.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = this.hour[i] + ' : ' + this.salesPerHour[i] + ' cookies';
//             ul.appendChild(li);
//         }
//          var li = document.createElement('li');
//          li.textContent = 'Total: '  + this.dailyTotal + ' cookies';
//          ul.appendChild(li);
//     }
// };
// Tokyo.getrandomNum();
// Tokyo.simulatedAmount();
// Tokyo.render();

// // Location  3  

// var Dubai = {
//     location: 'Dubai',
//     min: 11,
//     max: 38,
//     hour: ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM', '12-PM', '01-PM', '02-PM', '03-PM', '04-PM', '05-PM', '06-PM', '07-PM'],
//     averageCookiPerCustomer: 3.7, 
//     custPerHour: [],
//     salesPerHour:[],
//     purshasedCookies:0,
//     dailyTotal: 0,
//     getrandomNum: function () { 

//         for (var j = 0; j < this.hour.length; j++) {
//             this.custPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//             console.log(this.hour[j] + ':' + this.custPerHour[j]);
//         }
//     },
//     simulatedAmount: function () {
//         this.getrandomNum();
//         for (var i = 0; i <= this.hour.length; i++) {
//              this.purshasedCookies = Math.floor(this.custPerHour[i] * this.averageCookiPerCustomer);
//              this.salesPerHour.push(this.purshasedCookies);
//             this.dailyTotal += this.purshasedCookies;

//             console.log(this.dailyTotal);

//         }
//     },
//     render: function () {
//         var parentElement = document.getElementById('seattlesales');
//         var article = document.createElement('article');
//         parentElement.appendChild(article);

//         var h2 = document.createElement('h2');
//         h2.textContent = this.location;
//         article.appendChild(h2);

//         var p = document.createElement('p');
//         p.textContent = 'average Cookies Per Customer :' + this.averageCookiPerCustomer;
//         article.appendChild(p);

//         var ul = document.createElement('ul');
//         article.appendChild(ul);

//         for (var i = 0; i < this.hour.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = this.hour[i] + ' : ' + this.salesPerHour[i] + ' cookies';
//             ul.appendChild(li);
//         }
//          var li = document.createElement('li');
//          li.textContent = 'Total: '  + this.dailyTotal + ' cookies';
//          ul.appendChild(li);
//     }
// };
// Dubai.getrandomNum();
// Dubai.simulatedAmount();
// Dubai.render();

// //Location 4


// var Paris = {
//     location: 'Paris',
//     min: 20,
//     max: 38,
//     hour: ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM', '12-PM', '01-PM', '02-PM', '03-PM', '04-PM', '05-PM', '06-PM', '07-PM'],
//     averageCookiPerCustomer: 2.3, 
//     custPerHour: [],
//     salesPerHour:[],
//     purshasedCookies:0,
//     dailyTotal: 0,
//     getrandomNum: function () { 

//         for (var j = 0; j < this.hour.length; j++) {
//             this.custPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//             console.log(this.hour[j] + ':' + this.custPerHour[j]);
//         }
//     },
//     simulatedAmount: function () {
//         this.getrandomNum();
//         for (var i = 0; i <= this.hour.length; i++) {
//              this.purshasedCookies = Math.floor(this.custPerHour[i] * this.averageCookiPerCustomer);
//              this.salesPerHour.push(this.purshasedCookies);
//             this.dailyTotal += this.purshasedCookies;

//             console.log(this.dailyTotal);

//         }
//     },
//     render: function () {
//         var parentElement = document.getElementById('seattlesales');
//         var article = document.createElement('article');
//         parentElement.appendChild(article);

//         var h2 = document.createElement('h2');
//         h2.textContent = this.location;
//         article.appendChild(h2);

//         var p = document.createElement('p');
//         p.textContent = 'average Cookies Per Customer :' + this.averageCookiPerCustomer;
//         article.appendChild(p);

//         var ul = document.createElement('ul');
//         article.appendChild(ul);

//         for (var i = 0; i < this.hour.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = this.hour[i] + ' : ' + this.salesPerHour[i] + ' cookies';
//             ul.appendChild(li);
//         }
//          var li = document.createElement('li');
//          li.textContent = 'Total: '  + this.dailyTotal + ' cookies';
//          ul.appendChild(li);
//     }
// };
// Paris.getrandomNum();
// Paris.simulatedAmount();
// Paris.render();


// //Location 5 


// var Lima = {
//     location: 'Lima',
//     min: 2,
//     max: 16,
//     hour: ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM', '12-PM', '01-PM', '02-PM', '03-PM', '04-PM', '05-PM', '06-PM', '07-PM'],
//     averageCookiPerCustomer: 4.6, 
//     custPerHour: [],
//     salesPerHour:[],
//     purshasedCookies:0,
//     dailyTotal: 0,
//     getrandomNum: function () { 

//         for (var j = 0; j < this.hour.length; j++) {
//             this.custPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//             console.log(this.hour[j] + ':' + this.custPerHour[j]);
//         }
//     },
//     simulatedAmount: function () {
//         this.getrandomNum();
//         for (var i = 0; i <= this.hour.length; i++) {
//              this.purshasedCookies = Math.floor(this.custPerHour[i] * this.averageCookiPerCustomer);
//              this.salesPerHour.push(this.purshasedCookies);
//             this.dailyTotal += this.purshasedCookies;

//             console.log(this.dailyTotal);

//         }
//     },
//     render: function () {
//         var parentElement = document.getElementById('seattlesales');
//         var article = document.createElement('article');
//         parentElement.appendChild(article);

//         var h2 = document.createElement('h2');
//         h2.textContent = this.location;
//         article.appendChild(h2);

//         var p = document.createElement('p');
//         p.textContent = 'average Cookies Per Customer :' + this.averageCookiPerCustomer;
//         article.appendChild(p);

//         var ul = document.createElement('ul');
//         article.appendChild(ul);

//         for (var i = 0; i < this.hour.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = this.hour[i] + ' : ' + this.salesPerHour[i] + ' cookies';
//             ul.appendChild(li);
//         }
//          var li = document.createElement('li');
//          li.textContent = 'Total: '  + this.dailyTotal + ' cookies';
//          ul.appendChild(li);
//     }
// };
// Lima.getrandomNum();
// Lima.simulatedAmount();
// Lima.render();


//  Lab 07  constructor  


// this is not an object it is just a template indicates that every object I will create it 
//using this constructor will have these properities .
function Cafe(area, min, max, hour, averageCookiPerCustomer, custPerHour, salesPerHour, purshasedCookies, dailyTotal) {
    this.area = area;
    this.min = min;
    this.max = max;
    this.hour = hour;
    this.averageCookiPerCustomer = averageCookiPerCustomer;
    this.custPerHour = custPerHour;
    this.salesPerHour = salesPerHour;
    this.purshasedCookies = purshasedCookies;
    this.dailyTotal = dailyTotal;
}
// we use .prototype to passes/add properties to the constructor... and now we have the random function added to the cafe constructor
Cafe.prototype.getrandomNum = function () {
    for (var j = 0; j < this.hour.length; j++) {
        this.custPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        console.log(this.hour[j] + ':' + this.custPerHour[j]);
    }
}; // this function will guess the cust per hour ..... using the random number ....
Cafe.prototype.render = function () {
    var parentElement = document.getElementById('seattlesales');
    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.location;
    article.appendChild(h2);

    var p = document.createElement('p');
    p.textContent = 'average Cookies Per Customer :' + this.averageCookiPerCustomer;
    article.appendChild(p);

    var parentElement = document.getElementById('table1');
    var table = document.createElement('table');
    parentElement.appendChild(table);
    for (var rowcounts = 0; rowcounts < 5; rowcounts++) {
        var row = document.createElement('tr');
        table.appendChild(row);
        for (colcounts = 0; colcounts <= 13; colcounts++) {
            var column = document.createElement('td');
            column.textContent =  + this.custPerHour;
            row.appendChild(column);
    
        }
    }
};


// How to create an object using the constructor !!!
// we put var and the first location ...
//Then we call the constructor ...
// Then the constructor passes the values/ parameter of the properities to the constructor 
// we have to pass the parameters with the same order 
// for the last parameter we add 0 as an initial value it is not given I will compute it .....

var seattle = new Cafe('seattle', 23, 65, ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM', '12-PM', '01-PM', '02-PM', '03-PM', '04-PM', '05-PM', '06-PM', '07-PM'], 6.3, 0, 0, 0, 0);

// Now the same for the next location 
var tokyo = new Cafe('Tokyo', 3, 24, ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM', '12-PM', '01-PM', '02-PM', '03-PM', '04-PM', '05-PM', '06-PM', '07-PM'], 1.2, 0, 0, 0, 0);
var dubi = new Cafe('Dubai', 11, 38, ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM', '12-PM', '01-PM', '02-PM', '03-PM', '04-PM', '05-PM', '06-PM', '07-PM'], 3.7, 0, 0, 0, 0);
var paris = new Cafe('Paris', 20, 38, ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM', '12-PM', '01-PM', '02-PM', '03-PM', '04-PM', '05-PM', '06-PM', '07-PM'], 2.3, 0, 0, 0, 0);
var lima = new Cafe('Lima', 2, 16, ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM', '12-PM', '01-PM', '02-PM', '03-PM', '04-PM', '05-PM', '06-PM', '07-PM'], 4.6, 0, 0, 0,0);

seattle.custPerHour();

// Now How to change the values of the properties
// lima.max = 100; //example
// paris.min = 50;
