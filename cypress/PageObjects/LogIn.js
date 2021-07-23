class Login {
  Login = "div.HPHeaderLogin"
  EmailInput ="#ctl00_MainContent_LoginControl1_TextBoxEmail"
  Password ="#ctl00_MainContent_LoginControl1_TextBoxPassword"
  LoginButton ="div.HPLoginBtnDiv"
  Error ="#ErrorMessageText"
}
module.exports= new Login();