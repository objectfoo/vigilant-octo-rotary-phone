# Css Vars with global json object fallback

Since `window.WhsTokens` is a runtime object, you need to ensure your MUI theme and CSS variables are initialized *after* that object is available. 

Here are the two ways to integrate this: the **React/MUI way** (for your components) and the **Global Injection way** (to make `var(--mui-*)` work in standard CSS files).

## 1. The MUI Theme Integration (React)

This is the most critical part. You should pass the window object directly into `createTheme`. By enabling `cssVariables: true`, MUI will automatically take everything inside `window.WhsTokens` and turn them into CSS variables.

```jsx
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

// 1. Fallback tokens in case window.WhsTokens isn't loaded yet
const defaultTokens = { palette: { mode: 'light' } };

export function App() {
  // 2. Access the tokens from the window object
  const tokens = window.WhsTokens || defaultTokens;

  const theme = createTheme({
    ...tokens,
    cssVariables: true, // This is the "magic" switch
  });

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline is required to actually inject the variables into :root */}
      <CssBaseline />
      <YourAppContent />
    </ThemeProvider>
  );
}
```

---

## 2. Immediate Global CSS Injection (Vanilla JS)

If you have legacy CSS files or external styles that need those variables immediately (and you don't want to wait for React to mount), you can use this snippet. It converts the `window` object into CSS variables and injects a `<style>` tag into the `<head>`.

```javascript
(function injectTokensAsCssVars() {
  const tokens = window.WhsTokens;
  if (!tokens) return;

  const style = document.createElement('style');
  style.id = 'whs-token-variables';
  
  let cssContent = ':root {\n';

  // Recursive function to flatten the JSON into --mui-prefix variables
  function flatten(obj, path = []) {
    for (const key in obj) {
      const val = obj[key];
      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
        flatten(val, [...path, key]);
      } else {
        const varName = `--mui-${[...path, key].join('-')}`;
        // Add px to spacing or font sizes if they are pure numbers
        const unit = (typeof val === 'number' && !['opacity', 'fontWeight'].includes(key)) ? 'px' : '';
        cssContent += `  ${varName}: ${val}${unit};\n`;
      }
    }
  }

  flatten(tokens);
  cssContent += '}';
  style.textContent = cssContent;
  document.head.appendChild(style);
})();
```

---

## 3. Handling "Flash of Unstyled Content" (FOCU)

If `window.WhsTokens` is being loaded asynchronously (e.g., from a database or external script), your UI might flicker. You can handle this by delaying the render:

```jsx
function AppWrapper() {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    // Check if tokens exist, or wait for a custom event/timeout
    if (window.WhsTokens) {
      setIsReady(true);
    }
  }, []);

  if (!isReady) return <div />; // Or a loading spinner

  return <App />;
}
```

## Pro-Tip: Accessing in styled-components

Once integrated, you don't need to check the `window` object anymore. Use the `theme` object provided by MUI, which will now point to your CSS variables:

```javascript
const StyledBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.vars.palette.primary.main, // Accesses var(--mui-palette-primary-main)
  padding: theme.spacing(2),
  fontFamily: theme.vars.typography.fontFamily,
}));
```

**Which approach fits your project better?** Are you loading `window.WhsTokens` via a script tag in the HTML head, or is it being fetched dynamically?
