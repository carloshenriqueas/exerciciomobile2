import { expect, driver} from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import cadastroPage from '../pageobjects/cadastro.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('Cadastro novo', () => {
    it('cadastro com credenciais validas', async () => {
      await homePage.openMenu('profile')
      await cadastroPage.cadastro('Carlos', 'Santos', '77-999913026', 'carloshenrique@ebac.com', '123456', '123456')
      expect((await profilePage.profileName('EBAC Store')).isDisplayed()).toBeTruthy()
      await driver.pause(10000)
    })
})