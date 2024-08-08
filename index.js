// Define the characters to use for password generation

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
    "X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x",
    "y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_",
    "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

    // Get the elements to display the generated passwords
 const generatePasswordOne = document.getElementById("passpace1")
 console.log(generatePasswordOne)
 const generatePasswordTwo = document.getElementById("passpace2")
 console.log(generatePasswordTwo)

 // Get the button element
const btn = document.getElementById("generate-btn")

// Set the password length
let passwordLength = 12

// Function to generate a random character
function generateRandomCharacter(){
    let randomchar = Math.floor(Math.random() * characters.length)
     return characters[randomchar]
}

// Function to generate a password
function generatePassword(){
    let randomPass = ""
    for(let i = 0; i < passwordLength; i ++){
        randomPass = randomPass + generateRandomCharacter()
    }
    return randomPass
}


// Add event listener to the button
btn.addEventListener("click", function() {
    const genPassword = generatePassword() 
    generatePasswordOne.textContent = genPassword
    generatePasswordTwo.textContent = genPassword

})