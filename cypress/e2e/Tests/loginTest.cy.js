import open_url from "../Base/openUrl";
import createUser from "../Pages/Create_user";
// import { openUrl } from "../Base/openUrl";
import login from "../Pages/loginPage";

describe('Swag Labs', ()=>{
    //className objName = new className()
    const url = new open_url();
    // const url = openUrl();
    const loginPage = new login();
    const create_user = new createUser();
    console.log(create_user)
    // console.log(url)

    it('Test', ()=>{
        url.openUrl();
        create_user.createProcess();
        // loginPage.loginProcess();
    })
})