# taxJS
** PROJECT TERMINATED **
Libary to calculate tax and salary.
### Require:
 - Node.js
 - PHP
### Dev-Require:
- Common.js
- Browserify
### How to use:
- Create form (example: form.php)
- Use this code.

```javascript
if (form.contract[0].checked){
        var isEmploy = true;
        var taxJS = new (require('./lib/taxJS.js'))(isEmploy);
            taxJS.init();
        return;
	}
 else if (form.contract[1].checked) {

	var isEmploy = false;
        var taxJS = new (require('./lib/taxJS.js'))(isEmploy);
            taxJS.init();
        return;
	}
else{
	 var taxJS = new (require('./lib/taxJS.js'))(isEmploy);
            taxJS.initError();
        return;
	}
```
If you want more examples, check main.js

#### Task:

### Tax.js
- Core lib.
- Menagment modules.

## Methods:
- init: set json file (options params (use to validate input data), tax value)
- run: run lib. (valid, construct, and run construct object)
- getInputData: get inputs data.
- initError: set error.

### Validator
- valid input data.

## Methods:
- init: init parser,checker value.
- checkerValue: Check hour and salary is not empty.
- parserValue: Check Can i parse input to int.
- iSeeSalary: is Salary is empty.
- iSeeHour : is Hour is empty.
- isNum: is input less 0 and is not NaN.
- isGoodLength: check string (input data) length.
- isCorrect: Check input is correct to options parameter (more,less,high,too hours/salary etc...)
- setState: set state Validator (true- corect, false - incorect).
- createPackage: create Object Package (list)
- pushPackage: push corect input data.
- testClass: test class.

### Builder
- Construct Object (orderWoker or employWorker)

## Methods:
 - setPackage: set package (input data)
 - build: decide what I must construct.
 - constructToEmployWorker: construct Employ worker.
 - constructToOrderWorker : construct Order worker.
 - setObject: set constructed object.
 - setFinishConstruct: true when object is constructed.
 - isFinishConstruct: construct is finish
 
### EmployWorker:
- calculate salary and tax employ worker.

## Methods:
- run: run Object.
- getSalaryBrutto: calculate salary Brutto.
- getSalaryNetto: calculate salary Netto.
- testClass: test.

### OrderWorker:
- calculate salary and tax order worker.
** Not implemented **

### Taxes:
-calculate income,health,basic tax.

### Dues:
 




