function reverseStr(str){
    // var listOfChar = str.split('');
    // var reveresedListOfChar = listOfChar.reverse();
    // var reversedStr = reveresedListOfChar.join('');

    var rev = str.split('').reverse().join('');
    return rev;
}

function isPalindrome(str){
    var reverse = reverseStr(str);

    // if(reverse === str){
    //     console.log("Palindrome")
    // }else{
    //     console.log("Not a palindrome");
    // }
    return str === reverse;
}

function convertDateToString(date){
    var dateStr = {day: '', month:'', year:''};

    console.log(date.day + date.month + date.year)
    if(date.day < 10){
        dateStr.day = '0' + date.day;
    }else{
        dateStr.day = date.day.toString();
    }

    if(date.month < 10){
        dateStr.month = '0' + date.month;
    }else{
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();

    return dateStr;
}

function getAllDateFormats(date){
    var dateStr = convertDateToString(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]
}

function checkPalindromeForAllFormats(date){
    var listOfFormats = getAllDateFormats(date);

    var flag = false;

    for(var i = 0; i<listOfFormats.length; i++){

        if(isPalindrome(listOfFormats[i])){
            console.log("Here")
            flag = true
            break;  
        }
    }
    return flag;
}

var date = {
    day: 01,
    month: 030,
    year: 10
}

isPalindrome('oyo')

console.log(checkPalindromeForAllFormats(date))