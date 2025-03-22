const EMAIL = [
    98, 114, 109, 50, 49, 54, 55, 64, 103, 46, 114, 105, 116, 46, 101, 100, 117
];

/**
 * Enables the clickable email
 */
function enable_email() {
    let email_display = document.getElementById("ritemail");
    if (!email_display) console.error("No email display found");

    let email = "mailto:";
    for (let i = 0; i < EMAIL.length; i++) {
        let char = String.fromCharCode(EMAIL[i]);
        email += `${char}`;
    }

    email_display.href = email;
}

/**
 * Hides the clickable email
 */
function hide_email() {
    let email_display = document.getElementById("ritemail");
    if (!email_display) console.error("No email display found");

    email_display.href = "";
}

/**
 * Updates the contents of an HTML tag with the id `ritemail` with an obfuscated
 * email built from an array of ASCII values and punctuated by invisible span
 * tags.
 */
function write_obfuscated_email() {
    let email_display = document.getElementById("ritemail");
    if (!email_display) console.error("No email display found");

    let email = "";
    for (let i = 0; i < EMAIL.length; i++) {
        let char = String.fromCharCode(EMAIL[i]);
        email += `${char}<span class="obfuscate">NO BOTS PLS</span>`;
    }

    email_display.innerHTML = email;
}