var Observer = function (targetObject , Action){
    this.targetObject = targetObject;
    this.Action = Action;
}

module.exports = Observer;

Observer.cs.prototype = function (){
    return new proxy (this.targetObject, this.Action);
}

