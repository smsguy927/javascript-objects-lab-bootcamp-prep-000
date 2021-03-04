function updateObjectWithKeyAndValue(obj, key, val) {
  // NON-DESTRUCTIVE!
  let resultObj = {};
  resultObj = Object.assign(resultObj, obj);
  resultObj[key] = val;
  return resultObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {

}

function deleteFromObjectByKey(obj, key) {
  // NON-DESTRUCTIVE!
}

function destructivelyDeleteFromObjectByKey(object, key) {

}
