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
            currentNumber: '',
            lastNumber: [],
            result : '',
            operator: ''
		},
        
        //Define methods/functions
		methods: {
            
            //Get number values (REWRITE THIS FUNCTION CAUSE IT SUX)
			value: function (value) {
                
                this.currentNumber += value;
                
                this.display = this.currentNumber;
            
			},
            
            opp: function(value) {
                
                if(value === "+") {
                    
                    this.lastNumber.push(this.currentNumber);
                    
                    this.currentNumber = '';
                    
                    this.display = this.currentNumber;
                    
                    console.log(this.lastNumber);

                }

            },
            
            equal: function() {
                
                
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
				this.result = '';
				this.num = '';
			},
		}
	});






















});