class Taxes {
constructor(JSON){
this.basicTax = new Number();
this.duesHealth  = new Number();
this.JSON = JSON;
this.incomeTax = new Number();
this.substractSalary = new Number ();
this.finalTax = new Number();
this.taxHealth = new Number();
this.Mathjs = require ('mathjs');
}





setBasicTax (value){
    this.basicTax = value;

}
setDuesHealth (value){
    this.duesHealth = value;
}
calculateDuesIncome (){
    this.incomeTax = this.Mathjs.round((this.calculateIncomeTax () - this.JSON.TAX_ALLOWANCE),2);
    this.finalTax = Math.round(this.incomeTax -  this.calculateTaxHealth ());


}

getFinalTax (){
    return this.finalTax;
}
calculateIncomeTax(){
    return this.Mathjs.round(((this.basicTax * this.JSON.SECOND_LEVEL_TAX_INCOME)/100),2);
}
setSubstractSalary (value){
    this.substractSalary = value;
}
calculateTaxHealth (){
    this.taxHealth = this.Mathjs.round(((this.substractSalary * this.JSON.COLLECTION_HEALTH_FIRST)/100),2);
     return this.taxHealth;
}
getBasicTax (){
    return this.basicTax;
}
getIncomeTax (){
    return this.incomeTax;
}
getSubstractSalary (){
    return this.substractSalary;
}
getTaxHealth (){
    return this.taxHealth;

}
}
module.exports = Taxes;
