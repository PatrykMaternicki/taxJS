class Builder {
    constructor (JSON){
    this.package =  new Array ();
    this.constructedObject;
    this.FinishConstuct = new Boolean ();
    this.JSON = JSON;
}


  setPackage (list){
    this.package = list;
  }

    build (){


        if (this.package[0] === true){
            this.constructToEmployWorker();
            console.log ('construct EmployWorker');
        }
       else{
           this.constructToOrderWorker();
       }
    }

    constructToEmployWorker () {
        var EmployWorker = new (require('./EmployWorker.js'))(this.package, this.JSON);
            this.setObject(EmployWorker);
            this.setFinishConstruct (true);

    }
    constructToOrderWorker (){
        var OrderWorker = new (require('./OrderWorker.js'))(this.package);
        this.setObject(OrderWorker);
        this.setFinishConstruct(true);
    }
    setObject (Object){
        this.constructedObject = Object;
    }
    getObject (){
        console.log (this.constructedObject);
        return this.constructedObject;
    }

    setFinishConstruct (value){
        this.FinishConstuct = value;
    }
    isConstruct(){
        return this.FinishConstuct;
    }

}
module.exports = Builder;
