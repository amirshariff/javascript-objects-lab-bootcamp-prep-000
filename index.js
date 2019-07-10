let recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({key:value},object)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    object.key = value
    return object
}

function deleteFromObjectByKey(object, key){
 function a (){
     delete object.key

   }
function b (){
  
}
}

//function deleteFromObjectByKey(object, key){
 // let copy = {...object}
 // delete copy.key
//  return copy
//}

