window.addEventListener('load', () => {
    
    //Make new Vue object
	new Vue({
        
        //Get element
		el: '.calculator',
        
        //Define data
		data: {
			result: '',
			num: '',
			operator: '',
			disableButton: true,
			listNum: [],
		},
        
        //Define methods/functions
		methods: {
            
            //Get number values (REWRITE THIS FUNCTION CAUSE IT SUX)
			value: function (event) {
                this.num += event.target.innerHTML;
                this.result = this.num;
			},
            //Evaluate numbers
			eval: function (event) {
				this.result = eval(this.num);
                Math.round(this.result);
                this.listNum.push(`${this.num} ${event.target.innerHTML} ${this.result}`);
				console.log(this.listNum)
				this.num = '';
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