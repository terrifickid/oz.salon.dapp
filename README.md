# salon.fund

A Vue 3 frontend for salon.fund. This frontend pairs with the Node.js backend at [salondao/salonnode](https://github.com/salondao/salonnode).

## Prerequisites

- Node.js (v16.x or later recommended for Vue 3)
- npm (v8.x or later, typically bundled with Node.js)
- Backend server: Follow setup instructions in [salondao/salonnode](https://github.com/salondao/salonnode)

## Project Setup

1. Install dependencies:

```bash
npm install
```

2. Configure the environment variable:
   - Create a `.env` file in the project root.
   - Add the following line, replacing `[your-backend-uri]` with the URL of the salonnode backend (e.g., `http://localhost:3000` for local development):
     ```env
     VUE_APP_URI=[your-backend-uri]
     ```

## Scripts

### Development Server

Run the app with hot-reloading:

```bash
npm run serve
```

### Production-Mode Development Server

Run the app in production mode with hot-reloading:

```bash
npm run live
```

### Production Build

Compile and minify for production:

```bash
npm run build
```

### Development Build

Compile for development (non-minified):

```bash
npm run dev
```

### Linting

Lint and fix files:

```bash
npm run lint
```

## Key Dependencies

- **Vue 3**: Frontend framework
- **TailwindCSS**: Styling
- **Axios**: API requests to the salonnode backend
- **Vue Router**: Routing
- **Vuex**: State management
- **Vue3 Carousel & Vue Fullpage.js**: UI components

## Customize Configuration

See [Vue CLI Configuration Reference](https://cli.vuejs.org/config/).

## License

[Specify license, e.g., MIT, or state "Proprietary" if not open-source.]