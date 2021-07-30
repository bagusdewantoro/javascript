
let defaultCreateTimeStamp = () => new Date().toISOString();

function createCallLog(createTimeStamp = defaultCreateTimeStamp) {
  // set state:
  let callLog = [];
  return {
    add: (type, phoneNumber) => {
      callLog.push({
        type,
        phoneNumber,
        timestamp: createTimeStamp(),
      });
    },
    getRecent: (maxNum) => {
      return callLog.slice(-maxNum);
    },
  }
}

let myLog = createCallLog();
myLog.add('INCOMING', '+17777555212');
myLog.add('OUTGOING', '+6585964698');
myLog.add('MISSED', '+42654896355');
let recentList = myLog.getRecent(2);
console.log(recentList);
