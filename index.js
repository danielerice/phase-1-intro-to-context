function createEmployeeRecord ([firstName, familyName, title, payPerHour]) {
//takes 4 args, 3 strings, followed by number. returns obj
let newEmployee = {
    "firstName": firstName,
    "familyName": familyName,
    "title": title,
    "payPerHour": payPerHour,
    "timeInEvents": [],
    "timeOutEvents": []
};
return newEmployee;
};

function createEmployeeRecords (newEmployeeArray) {
//takes an array of newEmployee arrays and calls createEmployeeRecord on each and returns an array of objs
let recordArray = [];

newEmployeeArray.forEach(newEmployee => {
    recordArray.push(createEmployeeRecord(newEmployee))
});

return recordArray;
};

function createTimeInEvent (employeeRecord, date) {
//takes an employee record obj and a date stamp and adds the date to the timeInEvents array of the given employee
employeeRecord.timeInEvents.push({
    "type": "TimeIn",
    "hour": parseInt(date.slice(-4)),
    "date": date.slice(0,10)
});

return employeeRecord
};


function createTimeOutEvent (employeeRecord, date) {
    //takes an employee record obj and a date stamp and adds the date to the timeOutEvents array of the given employee
    employeeRecord.timeOutEvents.push({
        "type": "TimeOut",
        "hour": parseInt(date.slice(-4)),
        "date": date.slice(0,10)
    });
    
    return employeeRecord
    };

function hoursWorkedOnDate (employeeRecord, date) {
//takes an employee obj and a date("YYYY-MM-DD") as args, and returns the hours elapsed between the timeIn and Out evetn on givrn date, as int
return ((employeeRecord.timeOutEvents.find(timeEvent => timeEvent.date === date).hour)-(employeeRecord.timeInEvents.find(timeEvent => timeEvent.date === date).hour))/100
}