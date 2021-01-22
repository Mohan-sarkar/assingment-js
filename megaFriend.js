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
    