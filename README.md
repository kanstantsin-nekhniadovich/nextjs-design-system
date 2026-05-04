# @kanstantsin-nekhniadovich/nextjs-design-system

Reusable React UI primitives and shared design tokens for Next.js applications.

The package currently ships three atoms:

- Button
- Link
- Text

It publishes compiled JavaScript, TypeScript declarations, and a public stylesheet entry that exposes the token layer used by the components.

## Requirements

- React 19
- React DOM 19
- A bundler that can consume ESM packages and CSS imports from node modules

## Installation

Configure npm for your GitHub Packages scope in the consuming repository or in your user npm config:

```ini
@kanstantsin-nekhniadovich:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Then install the package in a consumer app:

```bash
npm install @kanstantsin-nekhniadovich/nextjs-design-system react react-dom
```

## Import The Styles Once

Import the public stylesheet once at the application entry. This stylesheet pulls in the design tokens used by every component.

### Next.js App Router

```tsx
import "@kanstantsin-nekhniadovich/nextjs-design-system/styles.css";
import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
```

### Next.js Pages Router

```tsx
import "@kanstantsin-nekhniadovich/nextjs-design-system/styles.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
```

## Usage

```tsx
import { Button, Link, Text } from "@kanstantsin-nekhniadovich/nextjs-design-system";

export function ExampleCard() {
	return (
		<section>
			<Text variant="h2">Design system package</Text>
			<Text color="secondary">
				Shared primitives with a single token source.
			</Text>

			<div>
				<Button>Save changes</Button>
				<Button variant="secondary">Cancel</Button>
				<Link href="/docs">Read documentation</Link>
			</div>
		</section>
	);
}
```

## Public API

### Button

Extends the native button element props.

- Variants: primary, secondary, ghost
- Sizes: sm, md, lg
- Supports className and all standard button attributes

```tsx
import { Button } from "@kanstantsin-nekhniadovich/nextjs-design-system";

<Button variant="primary" size="lg" type="submit">
	Continue
</Button>;
```

### Link

Extends the native anchor element props.

- Variants: default, subtle, muted, unstyled
- Supports asChild for wrapping another React element
- Supports className and all standard anchor attributes

```tsx
import { Link } from "@kanstantsin-nekhniadovich/nextjs-design-system";

<Link href="/pricing" variant="subtle">
	Pricing
</Link>;
```

Using asChild:

```tsx
import NextLink from "next/link";
import { Link } from "@kanstantsin-nekhniadovich/nextjs-design-system";

<Link asChild variant="default">
	<NextLink href="/dashboard">Dashboard</NextLink>
</Link>;
```

### Text

Typography primitive with semantic defaults and configurable color.

- Variants: h1, h2, h3, lead, body, small, caption
- Colors: primary, secondary, muted, accent, inverse
- Supports overriding the rendered element through as

```tsx
import { Text } from "@kanstantsin-nekhniadovich/nextjs-design-system";

<Text variant="lead" color="accent">
	Launch faster with a shared visual language.
</Text>;
```

## Styling Model

- Importing @kanstantsin-nekhniadovich/nextjs-design-system/styles.css loads the token definitions used by all components.
- Component internals use CSS Modules and do not require consumer-side class wiring.
- Consumers can still pass className to compose local styles on top of the component defaults.

## Build Output

The package publishes the following public surface:

- dist/index.js
- dist/index.d.ts
- dist/styles.css

Build the package locally with:

```bash
npm run build
```

## Development

Useful commands during package development:

```bash
npm run lint
npm run compile
npm run test -- --runInBand
npm run build
```

## Publishing Notes

- The published JavaScript entry is ESM.
- The stylesheet must be imported once by the consuming application.
- This package is configured for GitHub Packages under the personal scope @kanstantsin-nekhniadovich.
- Publish with a token that has package write access:

```ini
@kanstantsin-nekhniadovich:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

```bash
npm publish
```
