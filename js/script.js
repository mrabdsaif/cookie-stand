'use strict';
//  Lab 07  constructor  


// this is not an object it is just a template indicates that every object I will create it 
//using this constructor will have these properities .
var hour = ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM', '12-PM', '01-PM', '02-PM', '03-PM', '04-PM', '05-PM', '06-PM', '07-PM'];
var allBranches = [];
var totalByArea = 0;
function CookiesPlatform(area, min, max, averageCookiPerCustomer) {
    this.area = area;
    this.min = min;
    this.max = max;
    this.averageCookiPerCustomer = averageCookiPerCustomer;
    this.custPerHour = [];
    this.salesPerHour = [];
    this.dailyTotal = 0;
    allBranches.push(this); // to pass all these properties ..
};
console.log(allBranches);
// we use .prototype to passes/add properties to the constructor... and now we have the random function added to the cookiesPlatform constructor
CookiesPlatform.prototype.getrandomNum = function () {
    for (var j = 0; j < hour.length; j++) {
        this.custPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        // console.log(this.hour[j] + ':' + this.custPerHour[j]);
    }
} // this function will guess the cust per hour ..... using the random number ...


CookiesPlatform.prototype.simulatedAmount = function () {
    this.getrandomNum();
    for (var i = 0; i < hour.length; i++) {
        var purshasedCookies = Math.floor(this.custPerHour[i] * this.averageCookiPerCustomer);
        this.salesPerHour.push(purshasedCookies);
        this.dailyTotal += purshasedCookies;
        // console.log(this.dailyTotal + 'tooooootaaaaal');
    }
    totalByArea += this.dailyTotal;
}

var parentElement = document.getElementById('table1');
var table = document.createElement('table');
parentElement.appendChild(table);

// create header
function creatTableHeader() {
    var rowEl = document.createElement('tr');
    table.appendChild(rowEl);
    var tdEl = document.createElement('td');
    rowEl.appendChild(tdEl);
    tdEl.textContent = ' ';
    for (let i = 0; i < hour.length; i++) {
        var tdEl = document.createElement('td');
        rowEl.appendChild(tdEl);
        tdEl.textContent = hour[i];
    }
    var tdEl = document.createElement('td');
    rowEl.appendChild(tdEl);
    tdEl.textContent = 'Daily Total';
}
creatTableHeader();


CookiesPlatform.prototype.tablerender = function () {
    this.simulatedAmount();
    // creating rows
    var row = document.createElement('tr');
    table.appendChild(row);
    var tdEl = document.createElement('td');
    row.appendChild(tdEl);
    // branches name
    tdEl.textContent = this.area;
    // creating td in the rows (hours length)
    for (var colcounts = 0; colcounts < hour.length; colcounts++) {
        var column = document.createElement('td');
        row.appendChild(column);
        column.textContent = this.salesPerHour[colcounts];
    }
    var tdEl = document.createElement('td');
    row.appendChild(tdEl);
    tdEl.textContent = this.dailyTotal + ' ' + 'cookies';
}


var seattle = new CookiesPlatform('seattle', 23, 65, 6.3);
console.log(seattle);
seattle.simulatedAmount();
// Now the same for the next location 
var tokyo = new CookiesPlatform('Tokyo', 3, 24, 1.2);
var dubi = new CookiesPlatform('Dubai', 11, 38, 3.7);
var paris = new CookiesPlatform('Paris', 20, 38, 2.3);
var lima = new CookiesPlatform('Lima', 2, 16, 4.6);

//inovke your objects
// seattle.tablerender();
for (var i = 0; i < allBranches.length; i++) {
    allBranches[i].tablerender();
}

// create footer
function footerCreate() {
    
    var lastrow = document.createElement('tr');
    table.appendChild(lastrow);
    var td = document.createElement('td');
    lastrow.appendChild(td);
    td.textContent = 'Total';
    for (var j = 0; j < hour.length; j++) {
        var td = document.createElement('td');
        lastrow.appendChild(td);
        for (var i=0; i<allBranches.length;i++)
        td.textContent = 'tot';
    }
    var td = document.createElement('td');
    lastrow.appendChild(td);
    for (var i = 0; i < allBranches.length; i++) {
        td.textContent = totalByArea;
    }
}

footerCreate();

// CookiesPlatform.prototype.titlesrender = function () {
//     var parentElement = document.getElementById('seattlesales');
//     var article = document.createElement('article');
//     parentElement.appendChild(article);

//     var h2 = document.createElement('h2');
//     h2.textContent = this.area;
//     article.appendChild(h2);

//     var p = document.createElement('p');
//     p.textContent = 'average Cookies Per Customer : ' + this.averageCookiPerCustomer;
//     article.appendChild(p);
// };

// How to create an object using the constructor !!!
// we put var and the first location ...
//Then we call the constructor ...
// Then the constructor passes the values/ parameter of the properities to the constructor 
// we have to pass the parameters with the same order 
// for the last parameter we add 0 as an initial value it is not given I will compute it .....


// Now How to change the values of the properties
// lima.max = 100; //example
// paris.min = 50;
