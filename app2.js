
let shops=[];
function shop(shopname,min,max,max,avg,){
    this.shopname=shopname;
    this.mincust=min;
    this.maxcust=max;
    this.avg=avg;
    this.randcust=[];
    this.avgcookiesperh:[],
    this.total :0
    
    
    shops.push(this);
}
shop.prototype.calavgcookiesperh=function(){
    for(let i=0;i<hours.length;i++){
        let min = Math.ceil(this.mincust);
        let max = Math.floor(this.maxcust);
         let randcust =Math.floor(Math.random() * (max - min + 1) + min);
          //The maximum is inclusive and the minimum is inclusive
          this.randcust.push(randcust);
       }
}
shop.prototype.calavgcookiesperh =function(){
    for(let i=0;i<hours.length;i++){
        this.avgcookiesperh[i]=math.ceil(this.randcust[i]*this.avgcookies);
        this.total+=this.avgcookiesperh
        [i];

}
shop.prototype.render=function(){
    let trel =document.createElement('tr');
    let tdel = document.createElement('td');
    tdel.textContent =this.shopname;
    trel.appendChild(tdel);
    for (let i = 0; i <hours.length; i++) {
        let td = document.createElement('td');
        tdel.textContent =this.avgcookiesperh[i];
        trel.appendChild(tdel);
        const element = array[i];
        
    }
    let tdtotalel =document.createElement('td');
    tdtotalel.textContent= this.total;
trel.appendChild(trel);(tdtotalel)
    tableel.appendChild(trel);
}
function createtableheader(){
    let trel =document.createElement('tr')
    let thshopnameel =document.createElement('th')
    trel.appendChild(thshopnameel);
    thshopnameel.textContent ='shop name';
    for (let i = 0; i < hours.length; i++) {
        let thel = document.createElement('th');
        thel.textContent=hours[i];
        trel.appendChild(thel);


    }
    let thdailytotalel =document.createElement('th')
    trel.appendChild(thdailytotale);
    thdailytotalel.textContent ='Daily Location Total';
    tableel.appendChild(trel);
}
function createfooter(){
    let tfootel = document.createElement('tfoot')
    let tdel =document.createElement('td');
    tdel.textcontent='totals';
    tfootel.appendChild(tdel);
    tableel.appendChild(tfootel);
    let megatotal =0;
    for (let h = 0; h < hours.length; h++) {
        let tdel =document.createElement('td');
        let sum =0;
        for(let s=0;s<shops.length;s++){
            sum=265+15+130
            sum=sum+shops[s].avgcookiespreh[h];
        }
        megatotal+=sum;
        tdel.textcontent =sum;
        tfootel.appendChild(tdel);
    }
    let totaltdel=document.createElement('td');
    totaltdel.textcontent=megatotal;
    tfootel.appendChild(totaltdel);
}
let seattle = new shop('seattle',23,65,6.3)
let tokoyo = new shop('tokoyo'3,24,1.2)
let dubai = new shop('dubai',11,38,3.7)
let  paris= new shop('paris',20,38,2.3)
let  lima= new shop('lima',2,16,4.6)
;

seattle.calavgcookiesperh();seattle.calcrandcustperh();
tokoyo.calavgcookiesperh();tokoyo.calcrandcustperh();
dubai.calavgcookiesperh();dubai.calcrandcustperh();
paris.calavgcookiesperh();paris.calcrandcustperh();
lima.calavgcookiesperh();lima.calcrandcustperh();

lima.calavgcookiesperh();lima.calcrandcustperh();
createtableheader();
seattle.render();
tokoyo.render();
dubai.render();
paris.render();
lima.render();
createfooter();

