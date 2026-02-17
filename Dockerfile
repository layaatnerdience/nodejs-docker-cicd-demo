# ---------- BUILD STAGE ----------
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the source code
COPY . .

# Run build scripts (if any, optional)
RUN npm run build || echo "No build script found"

# ---------- PRODUCTION STAGE ----------
FROM node:20-alpine

WORKDIR /app

# Copy built app & node_modules from build stage
COPY --from=build /app .

# Expose application port
EXPOSE 3000

# Default command
CMD ["npm", "start"]

