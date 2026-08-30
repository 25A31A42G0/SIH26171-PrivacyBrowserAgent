function detectPII(text) {
    const patterns = {
        email: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi,
        phone: /\b\d{10}\b/g,
        aadhaar: /\b\d{4}\s?\d{4}\s?\d{4}\b/g
    };

    const detected = {};

    for (const type in patterns) {
        const matches = text.match(patterns[type]);

        if (matches) {
            detected[type] = matches;
        }
    }

    return detected;
}

// Test
const text = "My email is test@example.com and phone is 9876543210";

console.log(detectPII(text));