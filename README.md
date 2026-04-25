# Techghar Frontend Part

## Executive Summary
Techghar is a modern, production-ready full-stack React application designed to deliver a seamless user experience. This project leverages the latest web technologies and best practices to ensure scalability, maintainability, and security. It is optimized for remote development and deployment, making it an ideal choice for remote teams.

## Tech Stack
### Frontend
- **Framework**: React
- **State Management**: Zustand
- **Routing**: React Router
- **Styling**: Tailwind CSS, Tailwind Merge, Tailwind Animate
- **Build Tool**: Vite
- **Type Checking**: TypeScript
- **Icons**: React Icons, Lucide React
- **UI Libraries**: Radix UI, @radix-ui/react-slot, @react-icons/all-files, @stripe/react-stripe-js, @stripe/stripe-js, @tanstack/react-table, @uploadthing/react, recharts, swiper, motion
- **State Management**: React Hook Form, Zustand
- **API Client**: Axios
- **Internationalization**: i18next, react-i18next
- **Notifications**: React Hot Toast, React Toastify
- **Testing**: Vite, Vitest, @testing-library/react, @testing-library/jest-dom, @testing-library/user-event, @types/jest, @testing-library/react-hooks, @testing-library/react-refresh
- **Linting**: ESLint, Prettier, @eslint/js, @eslint/plugin-prettier, @eslint/plugin-react-hooks, @eslint/plugin-react-refresh, @typescript-eslint
- **Font**: @fontsource/play, @fontsource/poppins
- **Dev Tools**: @tanstack/react-query-devtools, @react-router/dev, @vitejs/plugin-react, @vitejs/plugin-react-swc, vite-tsconfig-paths, tw-animate-css


### DevOps
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Deployment**: Kubernetes, AWS ECS, Google Cloud Run, Azure Container Apps, Digital Ocean App Platform, Fly.io, Railway

## System Architecture
Techghar follows a modular and scalable architecture, adhering to the **Clean Architecture** principles. The application is structured into distinct layers to ensure separation of concerns and maintainability.

- **Presentation Layer**: Handles user interface and interactions.
- **Application Layer**: Manages business logic and use cases.
- **Domain Layer**: Contains core business rules and entities.
- **Infrastructure Layer**: Provides external services and data access.

## Key Technical Features
- **Optimistic UI Updates**: Implemented with TanStack Query to enhance user experience and reduce perceived latency.
- **Scalable Middleware for RBAC**: Architected to support Role-Based Access Control, ensuring fine-grained access control and security.
- **Error Handling**: Consistent error boundaries and try-catch blocks, with professional logging using Winston.
- **State Management**: Utilized Zustand for efficient and predictable state management.
- **API Client**: Custom Axios instance with interceptors for request and response handling.
- **Security**: JWT for authentication, Zod for input validation, and secure HTTP headers.
- **Performance**: Caching with Redis, server-side rendering (SSR), and lazy loading of components.

## Folder Structure
```
client/
├── .dockerignore
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── components.json
├── Dockerfile
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── REVIEW.md
├── skills-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── src/
    ├── assets/
    ├── components/
    ├── features/
    │   └── auth/
    │       ├── auth.store.ts
    │       └── auth.types.ts
    ├── hooks/
    │   ├── useAuth.ts
    │   └── useAxiosInstance.ts
    ├── pages/
    ├── services/
    ├── styles/
    ├── utils/
    └── App.tsx
```

### Directory Descriptions
- **assets**: Stores static assets like images and fonts.
- **components**: Contains reusable UI components.
- **features**: Organizes related components, hooks, and services into feature folders.
- **hooks**: Custom React hooks for reusable logic.
- **pages**: High-level components representing different pages of the application.
- **services**: API clients and utility functions for external services.
- **styles**: Global and component-specific styles.
- **utils**: Utility functions and helper methods.
- **App.tsx**: Entry point of the application.

## Performance & Security
- **Security**:
  - **JWT**: Used for secure authentication and authorization.
  - **Zod**: Ensures input validation and data integrity.
  - **Secure HTTP Headers**: Configured to enhance security.
- **Performance**:
  - **SSR**: Server-side rendering improves initial load times and SEO.
  - **Lazy Loading**: Components are loaded on-demand to reduce initial bundle size.

## Installation & Deployment
### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo-url.git
   cd client
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Your application will be available at `http://localhost:5173`.

### Deployment
#### Docker Deployment
1. **Build the Docker image**:
   ```bash
   docker build -t my-app .
   ```

2. **Run the container**:
   ```bash
   docker run -p 3000:3000 my-app
   ```

#### DIY Deployment
If you're familiar with deploying Node applications, the built-in app server is production-ready. Make sure to deploy the output of `npm run build`.

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
└── build/
    ├── client/    # Static assets
    └── server/    # Server-side code
```

## Styling
This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with Kazi Mehedi Hasan using React Router.