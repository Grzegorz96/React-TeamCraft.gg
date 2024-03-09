// Create an array containing the alphabet letters.
export const alphabet = Array.from(Array(26))
    .map((_, i) => i + 65) // Map ASCII values for uppercase letters (65 to 90).
    .map((x) => String.fromCharCode(x)); // Convert ASCII values to corresponding letters.
