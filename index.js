let recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({key:value},object)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   return Object.assign(object,{key:value})
}