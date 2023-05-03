class createUser {
  createProcess() {
    const data = require("./createUserLocatorAndData.json");
    const createData = require("../../../filePath.json");
    const method = require("../Utilities/commonMethods");
    console.log(data, method);

    cy.xpath(data.create_user).click();
    // method.time();
    method.fullName();
    // cy.log(method.fullName().firstName)
    method.dataSend(data.firstName, method.fullName().firstName);
    // method.time();
    method.dataSend(data.lastName, method.fullName().lastName);
    method.scrolDown();
    // const randomEmail = method.generateRandomEmail();
    // const randomPassword = method.generateRandomPassword();

    // cy.log(randomEmail, randomPassword);

    // const CreateUserData = { email: randomEmail, password: randomPassword };

    // cy.log(CreateUserData)

    // const folderName = "MyFolder";
    // const fileName = "random-data.json";
    // const filePath = `./${folderName}/${fileName}`;
    // const jsonString = JSON.stringify(CreateUserData);
    // const newData = CreateUserData;
    // cy.log(newData)

    cy.readFile("filePath.json").then((data) => {
      const email = data.email;
      const password = data.password;
      // const oldData = { email: email, password: password };

      // const newDataString = JSON.stringify(CreateUserData);
      // const oldDataString = JSON.stringify(oldData);

      // if (newDataString === oldDataString) {
      //   cy.log("Both Are Same");
      // } else {
      //   cy.writeFile("example-new.json", newDataString).then(() => {
      //     cy.log(`Random email and password written to ${filePath}`);
      //   });
      //   cy.log("not same")
      // }
      cy.log(`email: ${email}, password: ${password}`);
    });

    method.dataSend(data.email, createData.email);
    method.dataSend(data.password, createData.password);
    method.dataSend(data.conPassword, createData.password);

    method.time();

    cy.xpath(data.create_button).click();
    method.time();
  }
}
export default createUser;
