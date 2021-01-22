//2nd problem solve
//budget Calculator

function budgetCalculator(watch,phone,laptop){
    var watchPrice=50;
    watch= watchPrice*2;

    var phonePrice=100;
    phone=phonePrice*4;

    var laptopPrice=500;
    laptop=laptopPrice*7;
    var totalcost= watch+phone+laptop;
    return totalcost;
}
var result=budgetCalculator();
console.log(result);