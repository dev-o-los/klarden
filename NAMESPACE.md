# @klarden Namespace Documentation

## Overview

The `@klarden` namespace allows you to install components directly from the Klarden UI registry using the shadcn CLI. This provides a seamless developer experience similar to official shadcn components.

## Configuration

### For Component Users

To use the `@klarden` namespace in your project, add the registry configuration to your `components.json`:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "registries": {
    "@klarden": "https://klarden.vercel.app/registry/{name}.json"
  }
}
```

### For Development

The namespace is already configured in this project at `components.json`. The API endpoint is located at:
- `app/api/registry/[name]/route.ts`

This endpoint serves registry items dynamically based on the component name.

## Usage

### Installing Components

```bash
# Install a single component
pnpm dlx shadcn@latest add @klarden/rich-button

# Install multiple components
pnpm dlx shadcn@latest add @klarden/rich-button @klarden/command-orbit @klarden/magnetic-dock

# Search for @klarden components
pnpm dlx shadcn@latest search @klarden

# Preview component details
pnpm dlx shadcn@latest view @klarden/rich-button
```

### Available Components

All components listed in `registry.json` are available via the namespace:

- `@klarden/rich-button` - Enhanced button with rich styling
- `@klarden/command-orbit` - Circular command menu
- `@klarden/orbit-context-menu` - Radial context menu
- `@klarden/accordion` - Premium accordion component
- `@klarden/magnetic-dock` - Magnetic dock navigation
- `@klarden/portal-uploader` - Orbital upload dropzone
- `@klarden/tactile-highlight` - Viewport-aware text highlight
- `@klarden/spotify-card` - Spotify metadata card
- `@klarden/blur-reveal` - Blur reveal animation
- `@klarden/shimmer-text` - Shimmer text effect
- `@klarden/label-input` - Floating label input

## How It Works

1. **Registry Configuration**: The `components.json` file maps `@klarden` to the registry URL pattern.

2. **API Endpoint**: When you run `shadcn add @klarden/button`, the CLI:
   - Replaces `{name}` with `button` in the URL pattern
   - Fetches `https://klarden.vercel.app/registry/button.json`
   - Parses the registry item metadata
   - Downloads the component files to your project

3. **Registry JSON**: The `registry.json` file contains metadata for each component:
   - Name, title, description
   - File paths and types
   - Dependencies and registry dependencies
   - Category information

## Adding New Components to the Namespace

To add a new component to the `@klarden` namespace:

1. **Create the component file** in `registry/klarden-ui/your-component.tsx`

2. **Add to registry.json** - Add a new item to the `items` array:
   ```json
   {
     "name": "your-component",
     "type": "registry:component",
     "title": "Your Component",
     "description": "Description of your component",
     "files": [
       {
         "path": "registry/klarden-ui/your-component.tsx",
         "type": "registry:component"
       }
     ],
     "dependencies": ["dependency-name"],
     "registryDependencies": [],
     "category": "category-name"
   }
   ```

3. **Build the registry**:
   ```bash
   pnpm registry:build
   ```

4. **Test installation**:
   ```bash
   pnpm dlx shadcn@latest add @klarden/your-component
   ```

## Authentication (Optional)

For private registries, you can add authentication:

```json
{
  "registries": {
    "@klarden": {
      "url": "https://klarden.vercel.app/registry/{name}.json",
      "headers": {
        "Authorization": "Bearer ${REGISTRY_TOKEN}"
      }
    }
  }
}
```

Store your token in `.env.local`:
```
REGISTRY_TOKEN=your_token_here
```

## Troubleshooting

### Component Not Found

If you get a "Component not found" error:
1. Verify the component name in `registry.json`
2. Ensure the registry has been built (`pnpm registry:build`)
3. Check that the API endpoint is accessible

### Build Errors

If the registry build fails:
1. Validate `registry.json` syntax
2. Ensure all file paths exist
3. Check for TypeScript errors

### API Endpoint Issues

If the API endpoint returns errors:
1. Verify the deployment URL in `.env.example`
2. Check Next.js server logs
3. Ensure the route file exists at `app/api/registry/[name]/route.ts`

## Best Practices

1. **Semantic Versioning**: Pin dependency versions in `registry.json`
2. **Descriptive Names**: Use clear, descriptive component names
3. **Categories**: Assign appropriate categories for better organization
4. **Documentation**: Always include clear descriptions
5. **Testing**: Test component installation before publishing

## Resources

- [shadcn Registry Documentation](https://ui.shadcn.com/docs/registry/namespace)
- [Klarden UI Documentation](https://klarden.vercel.app)
- [GitHub Repository](https://github.com/dev-o-los/klarden)
