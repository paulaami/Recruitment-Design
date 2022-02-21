// getting DOM elements by ID ( _ means internal,local function)

const _getDOMElem = (id) => {
 return document.getElementById(id);
}

// iterating over received elements and adding to an object
export const mapListToDOMElems = (idList) => {
 const _viewElems = {}

 for (const id of idList) {
  _viewElems[id] = _getDOMElem(id);
 }

 return _viewElems;
}
