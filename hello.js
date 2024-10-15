alert("welcome to the page");

// Simulated 
const allowedEmails = [
    "mukesh@123456.com",
    "lala@123.com",
    "mukeshlala856@gmail.com"
];

function handleLogin(event) {
    event.preventDefault(); 
    
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    

    if (allowedEmails.includes(email)) {
        if (password) {
            const username = "mukesh"; 
            localStorage.setItem("username", username);
            
        
            window.location.href = "nextpage.html"; 
        } else {
            alert("Please enter a valid password.");
        }
    } else {
        alert("This email is not allowed to login.");
    }
}
