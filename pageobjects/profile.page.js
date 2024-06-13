import { $ } from '@wdio/globals'
import Page from './page.js';

class ProfilePage {
      async profileName(name){
        return await $(`//android.widget.TextView[@text="${name}"]`)
      }
}

export default new ProfilePage();