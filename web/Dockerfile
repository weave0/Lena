# Vercel Dockerfile for Web App
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY web/package*.json ./web/
COPY shared/package*.json ./shared/

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy source code
COPY web ./web
COPY shared ./shared

# Build web app
WORKDIR /app/web
RUN npx vite build

# Production stage with nginx
FROM nginx:alpine

COPY --from=builder /app/web/dist /usr/share/nginx/html
COPY web/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
