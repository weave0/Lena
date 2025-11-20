# Railway Dockerfile - Backend only
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files for workspace resolution
COPY package*.json ./
COPY backend/package*.json ./backend/
COPY shared/package*.json ./shared/

# Install all dependencies (including devDependencies for build)
RUN npm install --legacy-peer-deps

# Copy source code
COPY backend ./backend
COPY shared ./shared

# Build backend
WORKDIR /app/backend
RUN npx tsc

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built files and package.json
COPY --from=builder /app/backend/dist ./dist
COPY --from=builder /app/backend/package*.json ./
COPY --from=builder /app/shared ../shared

# Install production dependencies only
RUN npm ci --production --legacy-peer-deps || npm install --production --legacy-peer-deps

# Set environment
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {if (r.statusCode !== 200) throw new Error('Health check failed')})"

CMD ["node", "dist/server.js"]
