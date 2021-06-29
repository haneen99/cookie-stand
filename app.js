
'use strict';

    /*
let seattle={minicustomers : 23,
maximumcustomers :65,
number :6.3,
custperhour :function (minimum,maximum){
    return Math.random() *(maximum,minimum+1)+minimum;)
}
totalcookiesperhour :[]
totalcookies :0,
render: function(){
    let body= document.getElementById('body');
    let ele =textcontent ='seattle';
    bodyel.child(ulle);
    for (let i=0;i<hours.lenghth;i++){

        
        this.totalcookies.push(math.floor(this.hours(this.minicustomers,
            this.maximumcustomers)*this.number);
    }
    for ( let i = 0; i< totalcookies.length;i++){
        let el =document .createElement('li');
        window.li2=el;
        el.Child(el);
        this.totalcookies==this.totalcookies +this.totalcookiesperhour[i];
        console .log(totalcookies);

    }
    */
let hours =['6 am','7am','8 am','9 am','10am','11am','12 pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',]
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