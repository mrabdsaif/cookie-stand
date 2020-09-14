'Use strict'

//Location 1

var Seattlesales = {
    location: 'seattle',
    min: 23,
    max: 65,
    hour: ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM', '12-PM', '01-PM', '02-PM', '03-PM', '04-PM', '05-PM', '06-PM', '07-PM'],
    averageCookiPerCustomer: 6.3, 
    custPerHour: [],
    salesPerHour:[],
    purshasedCookies:0,
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
             this.purshasedCookies = Math.floor(this.custPerHour[i] * this.averageCookiPerCustomer);
             this.salesPerHour.push(this.purshasedCookies);
            this.dailyTotal += this.purshasedCookies;
            
            console.log(this.dailyTotal);
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
            li.textContent = this.hour[i] + ' : ' + this.salesPerHour[i] + ' cookies';
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

//Location  2 !!!

var Tokyo = {
    location: 'Tokyo',
    min: 3,
    max: 24,
    hour: ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM', '12-PM', '01-PM', '02-PM', '03-PM', '04-PM', '05-PM', '06-PM', '07-PM'],
    averageCookiPerCustomer: 1.2, 
    custPerHour: [],
    salesPerHour:[],
    purshasedCookies:0,
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
             this.purshasedCookies = Math.floor(this.custPerHour[i] * this.averageCookiPerCustomer);
             this.salesPerHour.push(this.purshasedCookies);
            this.dailyTotal += this.purshasedCookies;
            
            console.log(this.dailyTotal);
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
            li.textContent = this.hour[i] + ' : ' + this.salesPerHour[i] + ' cookies';
            ul.appendChild(li);
        }
         var li = document.createElement('li');
         li.textContent = 'Total: '  + this.dailyTotal + ' cookies';
         ul.appendChild(li);
    }
};
Tokyo.getrandomNum();
Tokyo.simulatedAmount();
Tokyo.render();

// Location  3  

var Dubai = {
    location: 'Dubai',
    min: 11,
    max: 38,
    hour: ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM', '12-PM', '01-PM', '02-PM', '03-PM', '04-PM', '05-PM', '06-PM', '07-PM'],
    averageCookiPerCustomer: 3.7, 
    custPerHour: [],
    salesPerHour:[],
    purshasedCookies:0,
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
             this.purshasedCookies = Math.floor(this.custPerHour[i] * this.averageCookiPerCustomer);
             this.salesPerHour.push(this.purshasedCookies);
            this.dailyTotal += this.purshasedCookies;
            
            console.log(this.dailyTotal);
            
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
            li.textContent = this.hour[i] + ' : ' + this.salesPerHour[i] + ' cookies';
            ul.appendChild(li);
        }
         var li = document.createElement('li');
         li.textContent = 'Total: '  + this.dailyTotal + ' cookies';
         ul.appendChild(li);
    }
};
Dubai.getrandomNum();
Dubai.simulatedAmount();
Dubai.render();

//Location 4


var Paris = {
    location: 'Paris',
    min: 20,
    max: 38,
    hour: ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM', '12-PM', '01-PM', '02-PM', '03-PM', '04-PM', '05-PM', '06-PM', '07-PM'],
    averageCookiPerCustomer: 2.3, 
    custPerHour: [],
    salesPerHour:[],
    purshasedCookies:0,
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
             this.purshasedCookies = Math.floor(this.custPerHour[i] * this.averageCookiPerCustomer);
             this.salesPerHour.push(this.purshasedCookies);
            this.dailyTotal += this.purshasedCookies;
            
            console.log(this.dailyTotal);
            
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
            li.textContent = this.hour[i] + ' : ' + this.salesPerHour[i] + ' cookies';
            ul.appendChild(li);
        }
         var li = document.createElement('li');
         li.textContent = 'Total: '  + this.dailyTotal + ' cookies';
         ul.appendChild(li);
    }
};
Paris.getrandomNum();
Paris.simulatedAmount();
Paris.render();


//Location 5 


var Lima = {
    location: 'Lima',
    min: 2,
    max: 16,
    hour: ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM', '12-PM', '01-PM', '02-PM', '03-PM', '04-PM', '05-PM', '06-PM', '07-PM'],
    averageCookiPerCustomer: 4.6, 
    custPerHour: [],
    salesPerHour:[],
    purshasedCookies:0,
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
             this.purshasedCookies = Math.floor(this.custPerHour[i] * this.averageCookiPerCustomer);
             this.salesPerHour.push(this.purshasedCookies);
            this.dailyTotal += this.purshasedCookies;
            
            console.log(this.dailyTotal);
            
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
            li.textContent = this.hour[i] + ' : ' + this.salesPerHour[i] + ' cookies';
            ul.appendChild(li);
        }
         var li = document.createElement('li');
         li.textContent = 'Total: '  + this.dailyTotal + ' cookies';
         ul.appendChild(li);
    }
};
Lima.getrandomNum();
Lima.simulatedAmount();
Lima.render();