class TodoPage {
  //Project elements 
  Header ="td.HeaderTd"
  ProjectTitle ="#CurrentProjectTitle"
  AddProject = "div.AddProjectLiDiv"
  AddprjInput = "#NewProjNameInput"
  AddprjButton = "#NewProjNameButton"
  Newproject = "#ListIcon"
  //items elements
  noitems = "div.NoItems"
  AddItem ='#NewItemContentInput'
  Itembutton = "#NewItemAddButton"
  ItemContent = "div.ItemContentDiv"
  Donebox ="#ItemCheckBox"
  donecount = "#DoneItemsCount"
}
module.exports= new TodoPage();