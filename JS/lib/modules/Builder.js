var Builder = function (Package){
    this.package = Package;
    this.constructedObject;
    this.FinishConstuct = new Boolean ();
    }
module.exports = Builder;

Builder.prototype.build = function (){
    
    if (this.package[0] == true){
        this.constructToEmployWorker();
    }
   else{
       this.constructToOrderWorker();
   }
}
Builder.prototype.constructToEmployWorker = function (){
    console.log ("I construct worker");
    var JSON = new (require('./JSON.js'))('JS/lib/modules/JSON/taxes.json');
    var getOptions = JSON.getOptions();
    getOptions.then(function(JSON){
    var JSONObject = JSON;
    var EmployWorker = new (require('./EmployWorker.js'))(this.package, JSONObject);
    this.setObject(EmployWorker);
    this.setFinishConstruct (true);
}.bind(this));
    
}
Builder.prototype.constructToOrderWorker = function (){
    console.log ("I construct order Employer");
    var OrderWorker = new (require('./OrderWorker.js'))(this.package);
    this.setObject(OrderWorker);
}
Builder.prototype.setObject = function (Object){
    this.constructedObject = Object;
}
Builder.prototype.getObject = function (){
    return this.constructedObject;
}

Builder.prototype.setFinishConstruct = function (value){
    this.FinishConstuct = value;
}
Builder.prototype.isConstruct = function (){
    return this.FinishConstuct;
}