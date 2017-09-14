var allUserData = [];
var generalLastName = 'Clinton';

function logStuff(userData) {
    if (typeof userData === "string") {
        console.log(userData);
    }
    else if (typeof userData === "object") {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }

    }
}

function getInput(options, callback) {
    allUserData.push(options);
    // make sure the callback is a function before exceuting
    if (typeof callback === 'function') {
        callback(generalLastName, options);
    } else {
        console.log('callback is not excute as callback is not a function');
    }

}


getInput({ name: "Rich", speciality: "JavaScript" }, logStuff);


// define an object with some properties and a method
var clientData = {
    id: 094545,
    fullName: 'not set',
    setUserName: function (first, last) {
        this.fullName = first + ' ' + last;
    }
}

function getUserInput1(first, last, callback) {
    callback(first, last);
}

// getUserInput1('wilkins', 'liang', clientData.setUserName);
// console.log(clientData.fullName);
// console.log(fullName);

// using the call() or apply() to preserve this keyword
function getUserInput2(first, last, callback, callbackObj) {
    callback.call(callbackObj, first, last);
}
getUserInput2('wilkins', 'liang', clientData.setUserName,clientData);
console.log(clientData.fullName);