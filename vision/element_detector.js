export function detectElements(pageContent) {
    if (!pageContent) {
        return [];
    }

    const elements = [];

    // Detect buttons
    const buttons =
        pageContent.match(/<button[^>]*>(.*?)<\/button>/gis) || [];

    buttons.forEach(button => {
        elements.push({
            type: "button",
            content: button.replace(/<[^>]+>/g, "").trim()
        });
    });

    // Detect links
    const links =
        pageContent.match(/<a[^>]*>(.*?)<\/a>/gis) || [];

    links.forEach(link => {
        elements.push({
            type: "link",
            content: link.replace(/<[^>]+>/g, "").trim()
        });
    });

    // Detect input fields
    const inputs =
        pageContent.match(/<input[^>]*>/gi) || [];

    inputs.forEach(input => {
        const typeMatch = input.match(/type=["']([^"']+)["']/i);

        elements.push({
            type: "input",
            inputType: typeMatch ? typeMatch[1] : "text"
        });
    });

    return elements;
}
