'use strict';


var TaxJS= function ( isEmploy){
    this.isEmploy = isEmploy;
}
module.exports=TaxJS;

TaxJS.prototype.init= async function ()
{
 
var form = document.forms[0];
var salaryZl = form.salaryHourZl.value;
var salaryGr = form.salaryHourGr.value;
    if (this.isEmpty(salaryGr) ) salaryGr = this.convertToZero(salaryGr);
    if (this.isEmploy == false){
        var dayHour = form.hours.value;
    }
    else{
        var dayHour = form.dayHour.value;
        var nightHour = form.nightHour.value;
    }
    if (this.isEmpty(nightHour) || this.isEmploy == false ) nightHour = this.convertToZero(nightHour);
    if (this.isEmpty(dayHour) ) dayHour = this.convertToZero(dayHour);
    var Validator = new (require('./modules/Validator.js'))(salaryZl,salaryGr,dayHour,nightHour,this.isEmploy);
    var waitingForState = await Validator.init();
    Validator.init();
    console.log ('Its waiting ? ' + Validator.getState());

}

TaxJS.prototype.getHandler = function (){
var handler = {
  set: function (target, key, value, receiver) {
   if (target.getState() == true ){
       target.testClass();
       var ObserveObject = new (require('./modules/Builder.js'))(target.getPackage());
       var ObserverBuilder = this.createObserver(ObserveObject, this.getActionObserve).bind(this);
       ObserverBuilder.build();
       
       
   }
   if (target.getSignal()){
      target.createPackage();
   }
  }
}; 
return handler;
}

TaxJS.prototype.getActionObserve = function (){
    var handler = {
        set: function (target, key, value, receiver){
         if (target.isConstructed ()){
             console.log ('Ready Construct');
             var constructedObject = target.getObject();
             constructedObject.init();
         }       
    }
};
}

TaxJS.prototype.initError = function (){
 var Errors = new (require('./modules/Error.js'))();
Errors.initError();   
}

 TaxJS.prototype.createObserver = function (target, handler){
     return new Proxy (target,handler);
 }
 
 TaxJS.prototype.checkValidStatus = function (value){
     console.log ("Valiadator State is " + value);
 }
 TaxJS.prototype.isEmpty = function (value){
     if (value == 0 ) return true; return false;
 }
 TaxJS.prototype.convertToZero = function (value){
     return value = 0;
 }
 
    
