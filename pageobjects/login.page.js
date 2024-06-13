import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage{
      getEmail(){
        return $('id:email')
      }

      getPassword(){
        return $('android=new UiSelector().text("Password")')
      }

      getBtnLogin(){
        return $('~Login')
      }

      async login(email, password){
        await this.email.setValue(email)
        await this.password.setValue(password)
        await this.getBtnLogin.click()
      }
}

export default new LoginPage();