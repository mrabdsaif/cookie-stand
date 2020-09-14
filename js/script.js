'Use strict'

var Seattlesales = {
    location: 'seattle',
    min: 23,
    max: 65,
    hour: ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM', '12-PM', '01-PM', '02-PM', '03-PM', '04-PM', '05-PM', '06-PM', '07-PM'],
    averageCookiPerCustomer: 6.3, 
    custPerHour: [],
    salesPerHour:[],
    dailyTotal: 0,
    getrandomNum: function () { 

        for (var j = 0; j < this.hour.length; j++) {
            this.custPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
            console.log(this.hour[j] + ':' + this.custPerHour[j]);
        }
    },
    simulatedAmount: function () {
        this.getrandomNum();
        for (var i = 0; i <= this.hour.length; i++) {
             var purshasedCookies = Math.floor(this.random[i] * this.averageCookiPerCustomer);
            this.dailyTotal += this.purshasedCookies;
            this.salesPerHour.push(purshasedCookies);
            console.log(this.salesPerHour);
            // return this.dailyTotal;
        }
    },
    render: function () {
        var parentElement = document.getElementById('seattlesales');
        var article = document.createElement('article');
        parentElement.appendChild(article);
        
        var h2 = document.createElement('h2');
        h2.textContent = this.location;
        article.appendChild(h2);

        var p = document.createElement('p');
        p.textContent = 'average Cookies Per Customer :' + this.averageCookiPerCustomer;
        article.appendChild(p);

        var ul = document.createElement('ul');
        article.appendChild(ul);

        for (var i = 0; i < this.hour.length; i++) {
            var li = document.createElement('li');
            li.textContent = this.hour[i] + ' : ' + this.custPerHour[i] + ' cookies';
            ul.appendChild(li);
        }
         var li = document.createElement('li');
         li.textContent = 'Total: '  + this.dailyTotal + ' cookies';
         ul.appendChild(li);
    }
};
Seattlesales.getrandomNum();
Seattlesales.simulatedAmount();
Seattlesales.render();

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// var seattle = {
//     location: 'Seattle',
//     minimum: 23,
//     maximum: 65,
//     avgerageCookieSale: 6.3,
//     salesPerHour: [],
//     dailySales: 0,
    
//     randomCustomerPerHour: function() {
//         var random = Math.random();
//         random = Math.floor(random * (this.maximum - this.minimum) + this.minimum);
//         console.log(random);
//         // return random;
//     },

//     allSales : function() {
//         for (var i=0; i<hours.length; i++) {
//             var cookies = Math.floor(this.randomCustomerPerHour() * this.avgerageCookieSale);
//             seattle.salesPerHour.push(cookies);
//             //console.log(this.sales);
//             seattle.dailySales += cookies;
//             //console.log(this.dailySales);
//         }
//     },

//     render: function() {
//         var parentElement = document.getElementById('seattlesales');
//         var h2 = document.createElement('h2');
//         h2.textContent = 'Seattle';
//         parentElement.appendChild(h2);
       
//         var ul = document.createElement('ul');
//         parentElement.appendChild(ul);

//         for (var i=0; i<hours.length; i++) {
//         var li = document.createElement('li');
//         li.textContent = hours[i] + ': '+ this.salesPerHour[i] + ' cookies';
//         ul.appendChild(li);
//        }

//         var li = document.createElement('li');
//         li.textContent = 'Total: ' + this.dailySales + ' cookies';
//         ul.appendChild(li);
//     }
// };

// seattle.allSales();
// seattle.render();