import { $ } from '@wdio/globals'
import Page from './page.js';

class HomePage{
      async openMenu(menu){
        await $(`wid:tab-${menu}`).click()
      }
}

export default new HomePage();
