# Css Vars

To keep your tokens compatible with Material UI's CSS variable system (introduced in v6), the best approach is to use the built-in `createTheme` with the `cssVariables` option. This ensures that naming conventions, "channel" tokens (for opacity), and typography scaling all match MUI's internal logic.

## 1. The MUI-Native Approach (Recommended)

This snippet shows how to initialize your `tokens.json` in a way that MUI automatically generates the CSS variables on the `:root` element.

```javascript
import { createTheme } from '@mui/material/styles';
import tokens from './tokens.json';

// 1. Create the theme with CSS variables enabled
const theme = createTheme({
  ...tokens,
  cssVariables: true, // This enables the automatic CSS variable generation
});

// 2. The CSS variables are now available via theme.vars
// For example: theme.vars.palette.primary.main => 'var(--mui-palette-primary-main)'

export default theme;
```

---

## 2. Manual Generator Snippet (For Static CSS)

If you need to generate a physical CSS string (e.g., to write to a `.css` file or for a global style tag) while following MUI’s exact naming convention (`--mui-path-key`), you can use the following utility function.

This function handles nested objects (like `typography` and `palette`) and converts them into the flat `--mui-*` format.

```javascript
/**
 * Converts a tokens object into a CSS variables string
 * following MUI's naming convention.
 */
function generateMuiCssVariables(tokens, prefix = '--mui') {
  const variables = [];

  function flatten(obj, path = []) {
    for (const key in obj) {
      const value = obj[key];
      const newPath = [...path, key];

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        flatten(value, newPath);
      } else {
        // Convert camelCase or nested path to kebab-case
        const variableName = `${prefix}-${newPath.join('-')}`;
        // Ensure values like spacing (8) get a unit (px)
        const formattedValue = typeof value === 'number' && key !== 'fontWeight' && key !== 'opacity' 
          ? `${value}px` 
          : value;
        
        variables.push(`${variableName}: ${formattedValue};`);
      }
    }
  }

  flatten(tokens);
  return `:root {\n  ${variables.join('\n  ')}\n}`;
}

// Usage:
import tokens from './tokens.json';
const cssString = generateMuiCssVariables(tokens);
console.log(cssString);
```

## Key Compatibility Details

* **Prefix**: MUI uses `--mui` by default. You can change this via `cssVarPrefix` in the theme config.
* **Color Channels**: When you use `createTheme({ cssVariables: true })`, MUI also generates "channel" variables (e.g., `--mui-palette-primary-mainChannel: 0 120 191`). These allow you to use alpha transparency in your CSS: `rgba(var(--mui-palette-primary-mainChannel) / 0.5)`. The manual script above does not generate these, so using `createTheme` is highly preferred.
* **Typography**: In MUI, typography variants (like `h1`) are flattened. `theme.typography.h1.fontSize` becomes `--mui-typography-h1-fontSize`.
* **Spacing**: If your `tokens.json` has `spacing: 8`, MUI usually translates this into a utility, but for CSS variables, it often creates a base `--mui-spacing` variable.

## How to use the variables in your CSS

Once the theme is loaded, you can reference your tokens in any CSS file without needing JavaScript:

```css
.my-custom-button {
  background-color: var(--mui-palette-primary-main);
  font-family: var(--mui-typography-fontFamily);
  font-size: var(--mui-typography-button-fontSize);
  padding: var(--mui-spacing); /* Assuming spacing is a single value */
}
```
