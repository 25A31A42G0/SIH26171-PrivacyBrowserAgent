import { detectElements } from "./element_detector.mjs";

const html = `
<button>Login</button>
<a href="#">Home</a>
<input type="text">
`;

console.log(detectElements(html));