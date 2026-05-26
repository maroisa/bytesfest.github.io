---
name: Cyanic Tech Narrative
colors:
  surface: '#faf8ff'
  surface-dim: '#ced9ff'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2ff'
  on-surface: '#001847'
  on-surface-variant: '#404752'
  inverse-surface: '#192e5f'
  inverse-on-surface: '#eef0ff'
  outline: '#707783'
  outline-variant: '#c0c7d4'
  surface-tint: '#0060a8'
  primary: '#005ea4'
  on-primary: '#ffffff'
  primary-container: '#0077ce'
  on-primary-container: '#fdfcff'
  inverse-primary: '#a2c9ff'
  secondary: '#006973'
  on-secondary: '#ffffff'
  secondary-container: '#6debfd'
  on-secondary-container: '#006974'
  tertiary: '#4b6333'
  on-tertiary: '#ffffff'
  tertiary-container: '#637c49'
  on-tertiary-container: '#f9ffeb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e4ff'
  primary-fixed-dim: '#a2c9ff'
  on-primary-fixed: '#001c38'
  on-primary-fixed-variant: '#004881'
  secondary-fixed: '#93f1ff'
  secondary-fixed-dim: '#56d7e9'
  on-secondary-fixed: '#001f23'
  on-secondary-fixed-variant: '#004f57'
  tertiary-fixed: '#d0ecaf'
  tertiary-fixed-dim: '#b4cf95'
  on-tertiary-fixed: '#0e2000'
  on-tertiary-fixed-variant: '#374d20'
  background: '#faf8ff'
  on-background: '#001847'
  surface-variant: '#dae2ff'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max-width: 1280px
---

## Brand & Style
The brand personality is precise, innovative, and highly technical. It targets a sophisticated audience that values clarity and futuristic efficiency. The visual style is **Corporate / Modern** with a slight lean into **Minimalism**, emphasizing clear data visualization and structured information architecture. The emotional response should be one of competence, reliability, and forward-thinking momentum.

The design system utilizes the specific "BYTESFEST" palette to create a high-tech atmosphere, using deep blues for grounding and vibrant teals for interactive elements.

## Colors
The palette is derived from the "BYTESFEST" range, moving from deep navy to soft cream. 
- **Primary:** A vibrant mid-blue (#1E88E5) used for primary actions and brand presence.
- **Secondary:** A bright teal (#4DD0E1) used for highlights, toggles, and secondary accents.
- **Tertiary:** A soft lime-green (#C5E1A5) used for success states and data points.
- **Neutrals:** Deep navy (#001A4B) is used for typography and dark backgrounds, while light cream (#FFFDE7) and pale teal (#E0F2F1) provide the primary surface and container backgrounds.

Maintain high contrast for accessibility, particularly when placing navy text over the cream or pale teal surfaces.

## Typography
To replicate the "Rexlia" (technical/industrial) and "Meiland Gorgeous" (modern sans) aesthetic using the available library:
- **Headlines:** Use **Space Grotesk** for its technical, geometric, and futuristic feel. It mirrors the industrial precision required for a high-tech brand.
- **Body:** Use **Hanken Grotesk** for long-form reading. It is clean, sharp, and contemporary, providing excellent legibility.
- **Data & Labels:** Use **JetBrains Mono** for monospaced technical readouts, labels, and small metadata to reinforce the "bytes" and technical narrative.

Scale headlines down for mobile viewports using the defined `-mobile` variants to ensure text remains readable and fits within narrow containers.

## Layout & Spacing
This design system utilizes a **Fixed Grid** approach for desktop and a **Fluid Grid** for mobile. 
- **Desktop:** A 12-column grid with a maximum width of 1280px. Columns are separated by 24px gutters.
- **Mobile:** A 4-column fluid grid with 16px margins and 16px gutters.
- **Rhythm:** All spacing (padding, margins, component heights) must follow a 4px base unit (4, 8, 12, 16, 24, 32, 48, 64).

Information density is medium-high to accommodate data-rich environments without feeling cluttered. Use generous margins between major sections to provide visual "breathing room."

## Elevation & Depth
Depth is communicated through **Tonal Layers** rather than heavy shadows. 
- **Background:** The cream (#FFFDE7) serves as the lowest base layer.
- **Surface:** Main containers use the pale teal (#E0F2F1) to differentiate from the background.
- **Interaction Depth:** Use **Low-Contrast Outlines** (1px solid borders in a slightly darker teal) to define card boundaries. 
- **Shadows:** Only used sparingly for floating elements (modals, dropdowns). Shadows are ultra-diffused, using the Primary Blue at 10% opacity to create a technical "glow" effect rather than a physical shadow.

## Shapes
The shape language is **Soft (0.25rem)**. This provides a balance between technical precision (sharp corners) and modern user-friendliness (fully rounded corners).
- Standard components (buttons, inputs) use a 4px radius.
- Large containers and cards use `rounded-lg` (8px).
- Icons should be geometric and follow the same 4px/8px corner logic to maintain a cohesive visual language.

## Components
- **Buttons:** Primary buttons are solid Blue (#1E88E5) with white text. Secondary buttons use a Teal (#4DD0E1) outline with navy text. Use "Soft" 4px rounding.
- **Chips/Tags:** Utilize the Tertiary Lime-Green (#C5E1A5) for active tags and status indicators to provide a distinct color pop against the blue/teal background.
- **Input Fields:** Use a white background with a 1px Navy (#001A4B) border at 20% opacity. Upon focus, the border becomes Primary Blue with a subtle 2px glow.
- **Cards:** Use Pale Teal (#E0F2F1) backgrounds with no shadows, defined instead by a 1px border slightly darker than the surface.
- **Lists:** Data-heavy lists should use alternating row colors (zebra striping) between the cream background and the pale teal surface to maintain horizontal readability.
- **Checkboxes/Radios:** Use the Primary Blue for selected states to ensure high visibility against the light surfaces.