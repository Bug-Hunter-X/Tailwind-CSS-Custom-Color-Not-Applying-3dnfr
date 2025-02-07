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