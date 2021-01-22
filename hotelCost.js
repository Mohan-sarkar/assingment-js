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