class TodoPage {
  //Project elements 
  Header ="td.HeaderTd"
  ProjectTitle ="#CurrentProjectTitle"
  AddProject = "div.AddProjectLiDiv"
  AddprjInput = "#NewProjNameInput"
  AddprjButton = "#NewProjNameButton"
  Newproject = "li.BaseProjectLi:nth-child(6) div:nth-child(1) tr:nth-child(1)  td:nth-child(3)"
  //items elements
  noitems = "div.NoItems"
  AddItem ='#NewItemContentInput'
  Itembutton = "#NewItemAddButton"
  ItemContent = "div.ItemContentDiv"
  Donebox ="#ItemCheckBox"
  donecount = "#DoneItemsCount"
}
module.exports= new TodoPage();
