function budgetCalculator(watch,phone,laptop){
    var watch=50;
    watchcost = watch*2;

    var phone=100;
    phonecost=phone*4;

    var laptop=500;
    laptopcost=laptop*6;
    var totalcost= watchcost+phonecost+laptopcost;
    return totalcost;

}
var result= budgetCalculator(5);
console.log(result);