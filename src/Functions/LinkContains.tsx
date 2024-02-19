/*
## LinkContains Function

### Description
The `LinkContains` function is a utility function designed for use in React applications with React Router. It checks whether a given `linkText` contains a specified `includeText` in a case-insensitive manner. If the inclusion condition is met, it returns the specified `returnText`; otherwise, an empty string is returned.

### Parameters
- `linkText` (string): The text to be checked for inclusion.
- `includeText` (string): The text to check for inclusion within `linkText`. The check is case-insensitive.
- `returnText` (string): The text to return if `includeText` is found within `linkText`.

### Returns
- Returns the specified `returnText` if `includeText` is found within `linkText`; otherwise, returns an empty string.
*/

function linkContains(linkText: string, includeText: string, returnText: string) {
    const lowercaseLinkText = linkText.toLowerCase();
    const lowercaseIncludeText = includeText.toLowerCase();

    return lowercaseLinkText.includes(lowercaseIncludeText) ? returnText : "";
}
export default linkContains