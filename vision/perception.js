import { detectElements } from "./element_detector.js";

export function perceive(pageContent) {
    if (!pageContent) {
        return {
            elements: [],
            count: 0,
            message: "No page content provided"
        };
    }

    const elements = detectElements(pageContent);

    return {
        elements,
        count: elements.length
    };
}
