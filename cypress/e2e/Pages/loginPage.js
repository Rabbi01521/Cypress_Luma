class login{
    loginProcess(){
        const data = require('./loginPageLoctorsAndData.json');
        console.log(data)
        const method = require('../Utilities/commonMethods');
        console.log(method)
        method.titleVerify('OrangeHRM');
        method.time();
        method.dataSend(data.userName, data.user_value);
        method.time();
        method.dataSend(data.password, data.user_pass);
        method.time();
        method.takeSpecificSC(data.submit, 'submitButton');
        cy.xpath(data.submit).click();
        method.time();
        method.takeFullScreenshot('afterLogin');
    }

}export default login;