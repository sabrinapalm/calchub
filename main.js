window.addEventListener('load', () => {


  new Vue({
    el: '.calculator',
    data: {
        result: '',
    },
    methods: {
        clear: () => {
            this.result = 0;
            console.log(`You clicked C`);
        },
        raisedInTwo: () => {
            console.log(`You clicked Raisen In Two`);
        },
        squareRoot: () => {
            console.log(`You clicked Square Root`)
        }, 
        divide: () => {
            console.log(`You clicked Divide`)
        },
        multiplicate: () => {
            console.log(`You clicked Multiplicate`)
        },
        minus: () => {
            console.log(`You clicked Minus`)
        },
        plus: () => {
        console.log(`You clicked Plus`)
        },
        equalTo: () => {
        console.log(`You clicked Equal To`)
        } 
    }
  });































});
