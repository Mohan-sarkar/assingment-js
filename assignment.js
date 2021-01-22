

// 1st problem solve 
//kilometer To Meter
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var result = kilometerToMeter(.5);
console.log(result);



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




// 3rd problemsolve
//hotel cost
function hotelCost(days){
    var hotel = 0;
    if(days<=10){
        hotel =days*100;
    } else if(days<=20){
        firstTenDays = 10*100;
        var remaining = days-10;
        var secondTenDays = remaining*80;
        hotel = firstTenDays + secondTenDays;
    } else{
        var firstTenDays = 10*100;
        var secondTenDays =10*80;
        var remaining = days-20;
        var thirdTenDays = remaining *50;
        hotel = firstTenDays + secondTenDays +thirdTenDays;
    }
    return hotel;
}
var amount = hotelCost(36);
console.log(amount);



//4th problem solve 
// mega Friend
function megaFriend(names){
    var words =names.split(" ");
    var longest= " ";
    for(var i=0; i>words.length; i++){
        if(words.length>longest.length)
        longest=words;
    }
    return longest.length;
}
var longchar =megaFriend("i am mohan sarkar .i love to programming");
console.log(longchar);