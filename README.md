# Klarden UI

**Refined components for design engineers. Built with tactile precision and fluid motion.**

Klarden UI is an ecosystem of high-end React primitives designed for modern interfaces. Unlike traditional UI libraries, Klarden follows the **Registry Pattern**, allowing you to add individual, high-quality components directly into your source code.

## 🚀 Quick Start

### Using the @klarden Namespace (Recommended)

Install components directly from the Klarden registry using the namespace:

1. **Configure the namespace in your project:**

   Add the following to your `components.json`:

   ```json
   {
     "registries": {
       "@klarden": "https://klarden.vercel.app/registry/{name}.json"
     }
   }
   ```

2. **Install components:**

   ```bash
   pnpm dlx shadcn@latest add @klarden/rich-button
   pnpm dlx shadcn@latest add @klarden/command-orbit
   pnpm dlx shadcn@latest add @klarden/magnetic-dock
   ```

### Development Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dev-o-los/klarden-ui.git
   cd klarden
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the documentation and component showcase.

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Content:** MDX (next-mdx-remote)
- **Syntax Highlighting:** Shiki (Dual-theme support)

## 📦 Namespace Usage

The `@klarden` namespace allows you to install components directly from the Klarden registry without needing to configure a custom registry URL every time.

### Available Commands

```bash
# Install a single component
pnpm dlx shadcn@latest add @klarden/rich-button

# Install multiple components
pnpm dlx shadcn@latest add @klarden/rich-button @klarden/command-orbit

# Search for components
pnpm dlx shadcn@latest search @klarden

# View component details
pnpm dlx shadcn@latest view @klarden/rich-button
```

### Available Components

| Component | Description | Category |
|-----------|-------------|----------|
| `@klarden/rich-button` | Button with rich styling and color variants | Button |
| `@klarden/command-orbit` | Circular command menu with orbiting actions | Navigation |
| `@klarden/orbit-context-menu` | Radial context menu with neumorphic styling | Navigation |
| `@klarden/accordion` | Premium accordion with smooth transitions | Layout |
| `@klarden/magnetic-dock` | Bottom-docked nav with proximity magnification | Navigation |
| `@klarden/portal-uploader` | Central drop zone with orbital animations | Upload |
| `@klarden/tactile-highlight` | Text highlight that reacts to viewport | Typography |
| `@klarden/spotify-card` | Spotify card with real-time metadata | Media |
| `@klarden/blur-reveal` | Smooth reveal with blur and motion effects | Typography |
| `@klarden/shimmer-text` | Text with elegant shimmer animation | Typography |
| `@klarden/label-input` | Beautiful input with floating labels | Form |

---

## 🤝 Contribution Guide

We welcome contributions from design-conscious engineers! Whether you're fixing a bug, improving documentation, or proposing a new tactile module, your help is appreciated.

### How to add a new component

Klarden UI uses a registry system. To add a new component (e.g., `MyNewComponent`), follow these steps:

#### 1. Create the Component

Add your component source code to:  
`registry/klarden-ui/my-new-component.tsx`

Ensure your component follows our standards:

- **TypeScript:** Use strict types, no `any`.
- **Styling:** Use Tailwind CSS.
- **Motion:** Use Framer Motion for all physics-based interactions.
- **Theme-aware:** Must look great in both Light and Dark modes.

#### 2. Register the Component

Add your component to the registry configuration in two places:

- **`registry/components.ts`**: Add a dynamic import to the `registry` object.
- **`registry.json`**: Add the metadata (name, title, dependencies) to the `items` array.

#### 3. Add Documentation

Create a new MDX file at:  
`content/docs/components/my-new-component.mdx`

Use the pre-built MDX components like `<ComponentPreview />`, `<InstallBlock />`, and `<PropsTable />` to document your work.

#### 4. Build the Registry

Run the registry build script to generate the JSON files for the CLI:

```bash
pnpm registry:build
```

### Pull Request Process

1. Create a new branch from `main`.
2. Implement your changes following the steps above.
3. Ensure your code passes linting (`pnpm lint`).
4. Submit a PR with a clear description and a video/GIF of the interaction if it's a new component.

## 📄 License

Licensed under the [MIT License](LICENSE).
