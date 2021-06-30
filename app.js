
'use strict';

let hours =['6 am','7am','8 am','9 am','10am','11am','12 pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',]
let cnotainer=document.getElementById('container')
let tableel=document.createElement('table');
cnotainer.appendChild(tableel);

}
let tokoyo ={
    shopname:'tokoyo'
    mincust:3,
    maxcust:24,
    avgcookies:1.2,
    randomcust:[],
    avgcookiesperh:[],
    total:0,
    calcrandcustperhour:function(){
       
        for(let i=0;i<hours.length;i++){
            let min = Math.ceil(this.mincust);
            let max = Math.floor(this.maxcust);
             let randcust =Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
           }
            this.randomcust.push(randcust);
            for(let i=0;i<hours.length;i++){
    }
    calavgcookiesperh:function(){
        for(let i=0;i<hours.length;i++){
            this.avgcookiesperh[i]=math.ceil(this.randcust[i]*this.avgcookies);
            this.total+=this.avgcookiesperh
            [i];
    }
    render:function(){
        let divcontainer =document.getElementById('cnotainer');
        let h2el = document.createElement('h2');
        divcontainer.appendChild(h2el);

        h2el.textcontent =this.shopname;

        let ulel = document.createElement('ul');divcontainer.appendChild(ulel);
        for(let i=0;i<hours.length;i++){
            let liel = document.createElement('li');
            
            liel.textContent =this.avgcookiesperh[i]+''+
            'cookies';
            ulel.appendChild(liel)
        }
        let totalel = document.createElement
        ('li');
        totalel.textcontent= 'total' +this.total +'cookies';
        ulel.appendChild(totalel);
    }
}
console.log(tokoyo);
tokoyo.calcrandcustperhour();
tokoyo.calavgcookiesperh();
tokoyo.render();


let hours =['6 am','7am','8 am','9 am','10am','11am','12 pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',]
let seattle ={
    shopname:'seattle'
    mincust:23,
    maxcust:65,
    avgcookies:6.5,
    randomcust:[],
    avgcookiesperh:[],
    total:0,
    calcrandcustperhour:function(){
       
        for(let i=0;i<hours.length;i++){
            let min = Math.ceil(this.mincust);
            let max = Math.floor(this.maxcust);
             let randcust =Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
           }
            this.randomcust.push(randcust);
            for(let i=0;i<hours.length;i++){
    }
    calavgcookiesperh:function(){
        for(let i=0;i<hours.length;i++){
            this.avgcookiesperh[i]=math.ceil(this.randcust[i]*this.avgcookies);
            this.total+=this.avgcookiesperh
            [i];
    }
    render:function(){
        let divcontainer =document.getElementById('cnotainer');
        let h2el = document.createElement('h2');
        divcontainer.appendChild(h2el);

        h2el.textcontent =this.shopname;

        let ulel = document.createElement('ul');divcontainer.appendChild(ulel);
        for(let i=0;i<hours.length;i++){
            let liel = document.createElement('li');
            
            liel.textContent =this.avgcookiesperh[i]+''+
            'cookies';
            ulel.appendChild(liel)
        }
        let totalel = document.createElement
        ('li');
        totalel.textcontent= 'total' +this.total +'cookies';
        ulel.appendChild(totalel);
    }
}
console.log(seattle);
seattle.calcrandcustperhour();
seattle.calavgcookiesperh();
seattle.render();


let hours =['6 am','7am','8 am','9 am','10am','11am','12 pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',]
let dubai ={
    shopname:'dubai'
    mincust:11,
    maxcust:38,
    avgcookies:3.7,
    randomcust:[],
    avgcookiesperh:[],
    total:0,
    calcrandcustperhour:function(){
       
        for(let i=0;i<hours.length;i++){
            let min = Math.ceil(this.mincust);
            let max = Math.floor(this.maxcust);
             let randcust =Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
           }
            this.randomcust.push(randcust);
            for(let i=0;i<hours.length;i++){
    }
    calavgcookiesperh:function(){
        for(let i=0;i<hours.length;i++){
            this.avgcookiesperh[i]=math.ceil(this.randcust[i]*this.avgcookies);
            this.total+=this.avgcookiesperh
            [i];
    }
    render:function(){
        let divcontainer =document.getElementById('cnotainer');
        let h2el = document.createElement('h2');
        divcontainer.appendChild(h2el);

        h2el.textcontent =this.shopname;

        let ulel = document.createElement('ul');divcontainer.appendChild(ulel);
        for(let i=0;i<hours.length;i++){
            let liel = document.createElement('li');
            
            liel.textContent =this.avgcookiesperh[i]+''+
            'cookies';
            ulel.appendChild(liel)
        }
        let totalel = document.createElement
        ('li');
        totalel.textcontent= 'total' +this.total +'cookies';
        ulel.appendChild(totalel);
    }
}
console.log(dubai);
dubai.calcrandcustperhour();
dubai.calavgcookiesperh();
dubai.render();


let hours =['6 am','7am','8 am','9 am','10am','11am','12 pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',]
let paris ={
    shopname:'paris'
    mincust:20,
    maxcust:38,
    avgcookies:2.3,
    randomcust:[],
    avgcookiesperh:[],
    total:0,
    calcrandcustperhour:function(){
       
        for(let i=0;i<hours.length;i++){
            let min = Math.ceil(this.mincust);
            let max = Math.floor(this.maxcust);
             let randcust =Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
           }
            this.randomcust.push(randcust);
            for(let i=0;i<hours.length;i++){
    }
    calavgcookiesperh:function(){
        for(let i=0;i<hours.length;i++){
            this.avgcookiesperh[i]=math.ceil(this.randcust[i]*this.avgcookies);
            this.total+=this.avgcookiesperh
            [i];
    }
    render:function(){
        let divcontainer =document.getElementById('cnotainer');
        let h2el = document.createElement('h2');
        divcontainer.appendChild(h2el);

        h2el.textcontent =this.shopname;

        let ulel = document.createElement('ul');divcontainer.appendChild(ulel);
        for(let i=0;i<hours.length;i++){
            let liel = document.createElement('li');
            
            liel.textContent =this.avgcookiesperh[i]+''+
            'cookies';
            ulel.appendChild(liel)
        }
        let totalel = document.createElement
        ('li');
        totalel.textcontent= 'total' +this.total +'cookies';
        ulel.appendChild(totalel);
    }
}
console.log(paris);
paris.calcrandcustperhour();
paris.calavgcookiesperh();
paris.render();

let hours =['6 am','7am','8 am','9 am','10am','11am','12 pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',]
let lima ={
    shopname:'lima'
    mincust:2,
    maxcust:16,
    avgcookies:4,6,
    randomcust:[],
    avgcookiesperh:[],
    total:0,
    calcrandcustperhour:function(){
       
        for(let i=0;i<hours.length;i++){
            let min = Math.ceil(this.mincust);
            let max = Math.floor(this.maxcust);
             let randcust =Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
           }
            this.randomcust.push(randcust);
            for(let i=0;i<hours.length;i++){
    }
    calavgcookiesperh:function(){
        for(let i=0;i<hours.length;i++){
            this.avgcookiesperh[i]=math.ceil(this.randcust[i]*this.avgcookies);
            this.total+=this.avgcookiesperh
            [i];
    }
    render:function(){
        let divcontainer =document.getElementById('cnotainer');
        let h2el = document.createElement('h2');
        divcontainer.appendChild(h2el);

        h2el.textcontent =this.shopname;

        let ulel = document.createElement('ul');divcontainer.appendChild(ulel);
        for(let i=0;i<hours.length;i++){
            let liel = document.createElement('li');
            
            liel.textContent =this.avgcookiesperh[i]+''+
            'cookies';
            ulel.appendChild(liel)
        }
        let totalel = document.createElement
        ('li');
        totalel.textcontent= 'total' +this.total +'cookies';
        ulel.appendChild(totalel);
    }
}
console.log(lima);
lima.calcrandcustperhour();
lima.calavgcookiesperh();
lima.render();