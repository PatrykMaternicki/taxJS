class Salary {
        constructor(list, addNightBonus){
    this.isEmploy = list[0];
    this.stockDayHours = list[3];
    this.stockNightHours = list[4];
    this.salary = list[5];
    this.addNightBonus = addNightBonus;
    this.Mathjs = require ('mathjs');
}



getSalaryBrutto (){
    if (this.isEmploy == true){
     return this.Mathjs.round((this.summaryDaySalary() + this.summaryNightSalary()),2);
}
    else {
    return this.summaryDaySalary();
    }
}

summaryDaySalary (){
    return this.Mathjs.round((this.stockDayHours * this.salary),2);
}

summaryNightSalary (){
    if (this.stockNightHours == 0 ){
        return 0;
    }
    var addToSalary = this.salary * this.addNightBonus;
    var newSalary = this.salary + addToSalary;
    var roundSalary = this.Mathjs.round(newSalary, 2);
    return this.Mathjs.round((this.stockNightHours * roundSalary),2);


}
}
module.exports = Salary;
