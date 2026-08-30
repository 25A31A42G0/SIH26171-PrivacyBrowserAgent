function redactPII(text) {
    return text
        .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, "[EMAIL]")
        .replace(/\b\d{10}\b/g, "[PHONE]")
        .replace(/\b\d{4}\s?\d{4}\s?\d{4}\b/g, "[AADHAAR]");
}

// Test
const text = "My email is test@example.com and phone is 9876543210";

console.log("Original:", text);
console.log("Redacted:", redactPII(text));