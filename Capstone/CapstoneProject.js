const _ = {
  
  clamp (number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  
  inRange (number, start, end) {
    if (end === undefined) {
        end = start;
        start = 0;	
        };
    if (start > end) {
        let temp = end;
      	end = start;
      	start = temp;
        };
    if (number >= start && number < end) {
      return true;
    } else {
      return false
    }
  },
  
  words (string) {
    const result = string.split(' ');
    return result;
  },
  
  pad (string, length) {
    if (length < string.length) {
        return string;
        };
    const start = Math.floor((length - string.length) / 2);
    const end = (length - string.length) - start;
    paddedString = ' '.repeat(start) + string + ' '.repeat(end);
    return paddedString;
  },
  
  has (object, key) {
   if (object.hasOwnProperty(key)) {
     return true;
   } else {
     return false;
   }
  },
  
  invert (object) {
    let invertedObject = {};
    for (let key in object) {
      const originalValue = object[key];
      invertedObject = {originalValue : key}
    }
    return invertedObject;
  },
  
  findKey (object, predicate) {
    for (let key in object) {
      let value = object[key];
     	let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
          return key;
          };  
  		}
    undefined
    return undefined;
  },
  
  drop (array, number) {
    if (number === undefined) {
        number = 1;
        }
    let newArray = array.slice(number);
    return newArray;
  },
  
  dropWhile (array, predicate) {
    const cb = (element, index) => {
      return !predicate(element, index, array);
    }
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  
  chunk (array, size) {
    if (size === undefined) {
      size = 1;
    };
    let chunks = [];
    for (let i = 0; i < array.length; i+= size) {
      let chunk = array.slice(i, i+size);
      chunks.push(chunk);
    };
    return chunks;
  }

};




// Do not write or modify code below this line.
module.exports = _;