class Dues {
    constructor (JSON){
    this.JSON = JSON;
    this.duesOfRentiemnent = new Number();
    this.duesOfSick = new Number();
    this.duesOdPension = new Number();
    this.duesOfHealth = new Number();
    this.Mathjs = require ('mathjs');
}



getSummaryDues (salaryBrutto){
 this.calculateDuesRentiement(salaryBrutto);
 this.calaculateDuesSick(salaryBrutto);
 this.calculateDuesPension(salaryBrutto);
 return this.addDues();
}

calculateDuesRentiement (salaryBrutto){
    this.duesOfRentiemnent =  this.Mathjs.round(((salaryBrutto * this.JSON.COLLECTION_RENTRIEMENT)/100),2);


}
calaculateDuesSick (salaryBrutto){
    this.duesOfSick = this.Mathjs.round(((salaryBrutto * this.JSON.COLLECTION_SICK)/100),2);
}

calculateDuesPension (salaryBrutto){
     this.duesOdPension = this.Mathjs.round(((salaryBrutto*this.JSON.COLLECTION_PENSION)/100),2);
}

addDues () {
    return this.duesOdPension + this.duesOfRentiemnent + this.duesOfSick;
}

getDuesHealth (value){
    this.setDuesOfHealth(this.calculateDuesHealth(value));
    return this.calculateDuesHealth(value);
}

setDuesOfHealth (value){
    this.duesOfHealth = value;

}
calculateDuesHealth (value){
    return this.Mathjs.round(((value * this.JSON.COLLECTION_HEALTH_SECOND)/100),2);
}


getDuesSick (){
    return this.duesOfSick;
}


getDuesPension(){
    return this.duesOdPension;
}

getDuesRentiement(){
    return this.duesOfRentiemnent;
}
getDuesOfHealth (){
    return this.duesOfHealth;
}
}
module.exports = Dues;
