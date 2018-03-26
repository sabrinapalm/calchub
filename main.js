window.addEventListener('load', () => {


  new Vue({
    el: '.calculator',
    data: {
        result: '',
        input: ''
    },
    methods: {
        clear: function(event) {
            console.log(`You clicked C`);
            this.result = 0;
        },
        raisedInTwo: function(event) {
            this.result = Math.pow(this.result, 2)
            
        },
        squareRoot: function(event) {
            console.log(Math.sqrt(this.result))
            this.result = Math.sqrt(this.result)
        }, 
        divide: function(event) {
            console.log(`You clicked Divide`)
            console.log()
        },
        multiplicate: function(event) {
            console.log(`You clicked Multiplicate`)
        },
        minus: function(event) {
            console.log(`You clicked Minus`)
        },
        plus: function(event) {
        console.log(`You clicked Plus`)
        },
        equalTo: function(event) {
        console.log(`You clicked Equal To`)
        } 
    }
  });































});
