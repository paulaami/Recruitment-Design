const _getDOMElem = (id) => {
 return document.getElementById(id);
}

export const mapListToDOMElems = (idList) => {
 const _viewElems = {}

 for (const id of idList) {
  _viewElems[id] = _getDOMElem(id);
 }

 return _viewElems;
}
