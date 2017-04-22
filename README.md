# taxJS
** PROJECT DEPRACATED **
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






