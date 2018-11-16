var recipes={}

function updateObjectWithKeyAndValue(recipes,key,value){
  return object.assign({},recipes,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes,key,value){
  recipes[key]=value
  return recipes
}
