export function dataSend(xpath, value){
    return cy.xpath(xpath).type(value);
}

export function titleVerify(expectedTitle){
    return cy.title().should('eq', expectedTitle);
}

export function takeFullScreenshot(scName){
    return cy.screenshot(scName);
}

export function takeSpecificSC(xpath, scName){
    return cy.xpath(xpath).screenshot(scName);
}

export function time(){
    return cy.wait(5000);
}

export function scrolDown(){
    return cy.scrollTo("bottom",{duration: 2000});
}

export function fullName(){
    // Array of common first names
const firstNames = ['John', 'Jane', 'Bob', 'Samantha', 'Alice', 'David', 'Emily', 'Michael', 'Sarah', 'Chris'];

// Array of common last names
const lastNames = ['Smith', 'Johnson', 'Brown', 'Davis', 'Miller', 'Wilson', 'Garcia', 'Jones', 'Taylor', 'Williams'];

// Generate random index values for the first and last name arrays
const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length);
const randomLastNameIndex = Math.floor(Math.random() * lastNames.length);

// Combine the randomly chosen first and last names to create the full name
const randomName = `${firstNames[randomFirstNameIndex]} ${lastNames[randomLastNameIndex]}`;

const firstName = `${firstNames[randomFirstNameIndex]}`;
const lastName = `${lastNames[randomLastNameIndex]}`;
// Output the random name to the console
// cy.log(randomName);

return {firstName, lastName}

}

// Generate a random email address
export function generateRandomEmail() {
    const emailSuffixes = ['@gmail.com', '@yahoo.com', '@hotmail.com', '@outlook.com', '@aol.com'];
    const randomSuffixIndex = Math.floor(Math.random() * emailSuffixes.length);
    const randomString = Math.random().toString(36).substring(2, 8);
    cy.log(`testuser${randomString}${emailSuffixes[randomSuffixIndex]}`);
    return `testuser${randomString}${emailSuffixes[randomSuffixIndex]}`;
}

export function generateRandomPassword() {
    const passwordLength = 12;
    const passwordCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * passwordCharacters.length);
      password += passwordCharacters[randomIndex];
    }
    cy.log(password)
    return password;
}