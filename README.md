# salon.fund

A Vue 3 frontend for salon.fund, a platform for connecting salons with customers or funding salon businesses.

## Prerequisites

- Node.js (v16.x or later recommended for Vue 3)
- Yarn (v1.x)

## Project Setup

1. Install dependencies:

```bash
yarn install
```

2. Configure the environment variable:
   - Create a `.env` file in the project root.
   - Add the following line, replacing `[your-backend-uri]` with the backend API URL:
     ```env
     VUE_APP_URI=[your-backend-uri]
     ```

## Scripts

### Development Server

Run the app with hot-reloading:

```bash
yarn serve
```

### Production-Mode Development Server

Run the app in production mode with hot-reloading:

```bash
yarn live
```

### Production Build

Compile and minify for production:

```bash
yarn build
```

### Development Build

Compile for development (non-minified):

```bash
yarn dev
```

### Linting

Lint and fix files:

```bash
yarn lint
```

## Key Dependencies

- **Vue 3**: Frontend framework
- **TailwindCSS**: Styling
- **Axios**: API requests
- **Vue Router**: Routing
- **Vuex**: State management
- **Vue3 Carousel & Vue Fullpage.js**: UI components

## Customize Configuration

See [Vue CLI Configuration Reference](https://cli.vuejs.org/config/).

## License

[Specify license, e.g., MIT, or state "Proprietary" if not open-source.]