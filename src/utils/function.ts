/**
 * Truncates a given text to a specified maximum length and appends "..." if truncated.
 *
 * @param {string} txt - The input text to be sliced.
 * @param {number} [max=70] - The maximum length of the text before truncation (default is 70).
 * @returns {string} - The truncated text with "..." appended if it exceeds the max length.
 *
 * @example
 * console.log(txtSlice("Hello, world!", 5)); // Output: "Hello..."
 * console.log(txtSlice("Short text", 20));   // Output: "Short text"
 */
export function txtSlice(txt: string, max: number = 70) {
    if (txt.length >= max)
        return txt.slice(0, max) + '...';
    return txt;
}
