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

function isleapyear(year){
    if(year % 400 === 0){
        return true;
    }
    if(year % 4 === 0){
        return true;
    }
    if(year % 100 === 0){
        return false;
    }
    return false;
}


function getNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(month === 2){
        if(isleapyear(year)){
            if(day > 29){
                day = 1;
                month ++;
            }
        }else{
            if(day>28){
                day = 1;
                month ++;
            }
        }
    }
    else{
        if(day > daysInMonth[month - 1]){
            day = 1;
            month ++;
        }
    }
    if(month > 12){
        month = 1;
        year ++;
    }

    return{
        day: day,
        month: month,
        year: year,
    }

}

function getNextPalindromeDate(date){
    var ctr = 0;
    var nextDate = getNextDate(date)

    while(1){
        ctr ++;
        var isPalindrome = checkPalindromeForAllFormats(nextDate);
        if(isPalindrome){
            break;
        }
        nextDate = getNextDate(nextDate);
    }
    return [ctr, nextDate];
    console.log("print");
}

var date = {
    day: 28,
    month: 02,
    year: 1996,
}

//isPalindrome('oyo')

console.log(getNextPalindromeDate(date))

