export const config = {
    //runner: 'local',
    //port: 4723,
    
    user: 'oauth-carloshenrique39-92c9c',
    key: '*****b6b3',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
   
    maxInstances: 1,
    capabilities:/* [{
        
        'platformName': 'Android',
        'appium:platformVersion': '8.0',
        'appium:deviceName': 'ebac-qe',
        'appium:automationName': 'UiAutomator2',
        'appium:app': (process.cwd(), './app/ebacshop.apks'),
        'appium:appWaitActivity': '.MainActivity',
        'appium:disableIdLocatorAutocompletion': true

    }]*/
       [{ platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'sauce:options': {
           build: 'appium-build-teste-ebacshop',
           name: 'EBAC TEST',
           deviceOrientation: 'PORTRAIT',
        },
        'appium:disableIdLocatorAutocompletion': true
         }],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
