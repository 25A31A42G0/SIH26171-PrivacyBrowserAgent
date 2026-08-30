export function perceive(pageContent) {
    if (!pageContent) {
        return {
            elements: [],
            message: "No page content provided"
        };
    }

    const elements = [];

    // Detect buttons
    const buttons =
        pageContent.match(/<button[^>]*>(.*?)<\/button>/gi) || [];

    buttons.forEach(button => {
        elements.push({
            type: "button",
            content: button.replace(/<[^>]+>/g, "").trim()
        });
    });

    // Detect links
    const links =
        pageContent.match(/<a[^>]*>(.*?)<\/a>/gi) || [];

    links.forEach(link => {
        elements.push({
            type: "link",
            content: link.replace(/<[^>]+>/g, "").trim()
        });
    });

    return {
        elements: elements,
        count: elements.length
    };
}
