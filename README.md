# Klarden UI

**Refined components for design engineers. Built with tactile precision and fluid motion.**

Klarden UI is an ecosystem of high-end React primitives designed for modern interfaces. Unlike traditional UI libraries, Klarden follows the **Registry Pattern**, allowing you to add individual, high-quality components directly into your source code.

## 🚀 Quick Start

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
