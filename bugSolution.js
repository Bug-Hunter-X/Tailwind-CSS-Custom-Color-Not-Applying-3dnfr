```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff', //Example custom color
      }
    }
  },
  plugins: [],
}
```

```html
<!-- index.html -->
<div class="bg-custom-blue p-4">
  <h1>This is a test</h1>
</div>
```

**Explanation:**
Ensure that the `tailwind.config.js` file is correctly configured and that your custom color is defined in the `theme.extend.colors` section.  In addition, ensure that you've run `npm run build` (or your equivalent build command) after making changes to `tailwind.config.js` to ensure Tailwind compiles with your updated configuration. If you are using a framework like Next.js, refer to their documentation for configuring Tailwind and handling custom colors.  Double-check for typos and ensure the color value is a valid CSS color code.