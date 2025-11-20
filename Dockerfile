# Multi-stage build for production

# Stage 1: Build all workspaces
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY web/package*.json ./web/
COPY backend/package*.json ./backend/
COPY mobile/package*.json ./mobile/
COPY shared/package*.json ./shared/

# Install dependencies
RUN npm ci --workspaces

# Copy source code
COPY . .

# Build all projects
RUN npm run build

# Stage 2: Production backend
FROM node:18-alpine AS backend

WORKDIR /app

# Copy only backend production files
COPY --from=builder /app/backend/dist ./backend/dist
COPY --from=builder /app/backend/package*.json ./backend/
COPY --from=builder /app/shared ./shared

# Install production dependencies only
RUN cd backend && npm ci --production

EXPOSE 3000

CMD ["node", "backend/dist/server.js"]

# Stage 3: Production web (for static hosting)
FROM nginx:alpine AS web

COPY --from=builder /app/web/dist /usr/share/nginx/html
COPY web/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
