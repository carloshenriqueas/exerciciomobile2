import { $ } from '@wdio/globals'
import Page from './page.js';

class CadastroPage{
      getFirstName(){
        return $('id:firstName')
      }

      getLastName(){
        return $('id:lastName')
      }

      getPhone(){
        return $('id:phone')
      }

      getEmail(){
        return $('id:email')
      }

      getPassword(){
        return $('id:password')
      }

      getRepassword(){
        return $('id:repassword')
      }

      getSignUp(){
        return $('xpath://android.view.ViewGroup[@content-desc="Sign up"]/android.widget.TextView')
      }
      getBtnCadastro(){
        return $('id:create')
      }

      async cadastro(firstname, lastname, phone, email, password, repassword){
        await this.getSignUp.click()
        await this.firstname.setValue(firstname)
        await this.lastname.setValue(lastname)
        await this.phone.setValue(phone)
        await this.email.setValue(email)
        await this.password.setValue(password)
        await this.repassword.setValue(repassword)
        await this.getBtnCadastro.click()
      }
}

export default new CadastroPage();