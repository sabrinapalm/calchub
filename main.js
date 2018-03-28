window.addEventListener('load', () => {





new Vue({
    el: '.calculator',
    data: {
        result: '',
        input: '',
        num: '',
        operator: ''
    },
    methods: {
        value: function(event) {
            this.num += event.target.innerHTML;
            this.result = this.num;
        },
        operation: function(event) {
          this.num += event.target.innerHTML;
          this.result = this.num
          console.log(this.result);
        },
        clear: function() {
            this.result = '';
            this.input = '';
            this.num = '';
        },
        raisedInTwo: function() {
            this.result = Math.pow(this.result, 2)
        },
        squareRoot: function() {
            this.result = Math.sqrt(this.result)
        },
        eval: function() {
          this.result = eval(this.num);
        }
    }
});



































});
