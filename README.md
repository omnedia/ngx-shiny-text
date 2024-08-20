# ngx-shiny-text

`@omnedia/ngx-shiny-text` is an Angular library that provides a shimmering text animation effect. This component allows you to easily add a glowing, moving shimmer effect over text, making your text stand out with a visually appealing style.

## Features

- Shimmering animation effect for text.
- Customizable shimmer color, text color, and shimmer width.
- Lightweight and easy to integrate as a standalone component.

## Installation

Install the library using npm:

```bash
npm install @omnedia/ngx-shiny-text
```

## Usage

Import the `NgxShinyTextComponent` in your Angular module or component:

```typescript
import { NgxShinyTextComponent } from '@omnedia/ngx-shiny-text';

@Component({
  ...
  imports: [
    ...
    NgxShinyTextComponent,
  ],
  ...
})
```

Use the component in your template:

```html
<om-shiny-text
  [text]="'Shiny Text Effect!'"
  [shimmerColor]="'rgba(255, 255, 255, 0.8)'"
  [textColor]="'#000'"
  [shimmerWidth]="'150px'"
  styleClass="custom-shiny-text"
></om-shiny-text>
```

## API

```html
<om-shiny-text
  [text]="text"
  [shimmerColor]="shimmerColor"
  [textColor]="textColor"
  [shimmerWidth]="shimmerWidth"
  styleClass="your-custom-class"
></om-shiny-text>
```
- `text` (required): The text content to be displayed with the shimmering effect.
- `shimmerColor` (optional): The color of the shimmer effect. Accepts any valid CSS color value.
- `textColor` (optional): The color of the text. Accepts any valid CSS color value.
- `shimmerWidth` (optional): The width of the shimmer effect in pixels or percentages. Defaults to 100px.
- `styleClass` (optional): A custom CSS class to apply to the shimmering text element.

## Example

```html
<om-shiny-text
  [text]="'Welcome to our site!'"
  [shimmerColor]="'rgba(255, 215, 0, 0.8)'"
  [textColor]="'#333'"
  [shimmerWidth]="'200px'"
  styleClass="shiny-text-style"
></om-shiny-text>
```

This will create a shimmering text effect where the text "Welcome to our site!" is displayed with a golden shimmer and a custom text color.

## Styling

To customize the appearance of the shimmering text or container, use the styleClass input to apply your own CSS classes.

```css
.shiny-text-style {
  font-size: 36px;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
}
```

This will style the shimmering text with a custom font size, weight, and font family.

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License.