// ========================================
// BROWSER AGENT - MEMBER 4
// ========================================

// CLICK
function clickElement(element) {
    if (!element) {
        return "Element not found";
    }

    element.click();
    return "Clicked successfully";
}


// TYPE
function typeText(element, text) {
    if (!element) {
        return "Input element not found";
    }

    element.focus();
    element.value = text;

    element.dispatchEvent(
        new Event("input", { bubbles: true })
    );

    element.dispatchEvent(
        new Event("change", { bubbles: true })
    );

    return `Typed "${text}" successfully`;
}


// SCROLL
function scrollPage() {
    window.scrollBy({
        top: 500,
        behavior: "smooth"
    });

    return "Scrolled down";
}


// FIND SEARCH BUTTON
function findSearchButton() {
    const buttons = document.querySelectorAll("button");

    for (const button of buttons) {
        if (
            button.innerText.trim().toLowerCase() === "search"
        ) {
            return button;
        }
    }

    return null;
}


// FIND LOGIN BUTTON
function findLoginButton() {
    const buttons = document.querySelectorAll("button");

    for (const button of buttons) {
        if (
            button.innerText.trim().toLowerCase() === "login"
        ) {
            return button;
        }
    }

    return null;
}


// FIND SEARCH INPUT
function findSearchInput() {
    const inputs = document.querySelectorAll("input");

    for (const input of inputs) {
        const placeholder =
            (input.placeholder || "").toLowerCase();

        if (
            placeholder.includes("search") ||
            input.type === "search"
        ) {
            return input;
        }
    }

    return null;
}


// MAIN AGENT
function runAgent(command) {

    command = command.toLowerCase().trim();

    console.log("🤖 User command:", command);


    // CLICK
    if (command.includes("click")) {

        if (command.includes("search")) {

            const button = findSearchButton();

            return clickElement(button);
        }

        if (command.includes("login")) {

            const button = findLoginButton();

            return clickElement(button);
        }
    }


    // TYPE
    if (command.includes("type")) {

        const input = findSearchInput();

        if (!input) {
            return "Search input not found";
        }

        let text = command
            .replace("type", "")
            .replace("in search", "")
            .trim();

        if (text.length === 0) {
            return "Please provide text to type";
        }

        return typeText(input, text);
    }


    // SCROLL
    if (command.includes("scroll")) {
        return scrollPage();
    }


    return "Sorry, I don't understand this command.";
}