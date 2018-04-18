/*

input-fält för att mata in ett tal
presentation av resultatet hittills
knappar för vanliga räknesätt (+, -, *, /)
knapp för att rensa resultatet och återställa resultatet till noll (C, Clear eller motsvarande)
knapp för att räkna ut ett resultat (=)
appen ska ha en tydlig design (förklara för användaren hur man förväntas använda den, användaren ska inte behöva gissa vad en knapp gör)
appen ska versionshanteras med Git och vara publicerad på GitHub

*/window.addEventListener('load', () => {
    
    //Make new Vue object
	new Vue({
        
        //Get element
		el: '.calculator',
        
        //Define data
		data: {
            display: '',
            lastNumber: '',
            currentNumber: '',
            result : '',
            operator: '',
            decimalAdded: false,
		},
        
        //Define methods/functions
		methods: {
            
			value: function (value) {
                
                //save currenumber
                this.currentNumber += value;
                
                console.log("nyaste numret: " + this.currentNumber);
                
                //show currentnumber in display
                this.display = this.currentNumber;
                   
			},
            
            opp: function(value) {
                
                //if a operator is pressed
                if(value !== "+" || "-" || "*" || "/") {
                    
                    this.operator = value;
                    
                    console.log(this.operator);
                    
                    //move the first number to lastnumber
                    this.lastNumber = this.currentNumber;
                    
                    console.log("senaste numret:" + this.lastNumber)
                    
                    //clear firstnumber
                    this.currentNumber = '';
                } 
            },
            equal: function(value) {
                
                //when equal is pressed, check status of operator
                if (this.operator === "+") {
                    this.result = Number(this.lastNumber) + Number(this.currentNumber);
                } else if (this.operator === "-") {
                    this.result = Number(this.lastNumber) - Number(this.currentNumber);
                } else if (this.operator === "*") {
                    this.result = Number(this.lastNumber) * Number(this.currentNumber);
                } else if (this.operator === "/") {
                    this.result = Number(this.lastNumber) / Number(this.currentNumber);
                }
                
                this.currentNumber = this.result;
                
                this.display = this.result;
                
            },
            //Single function raised in two
			raisedInTwo: function () {
				this.result = Math.pow(this.result, 2)
			},
            //Single function square root
			squareRoot: function () {
				if (this.result < 0) {
					this.disableButton = true;
					console.log('disabled')
				} else {
					this.result = Math.sqrt(this.result)
					this.disableButton = false;
					console.log('enabled')
				}
			},
            //clear numbers and result
			clear: function () {
				this.display = '',
                this.lastNumber = '',
                this.currentNumber = '',
                this.result = '',
                this.operator = ''
			},
		}
	});






















});