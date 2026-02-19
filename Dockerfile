# Use smaller and more secure base image
FROM node:20-alpine

# Create non-root user (security best practice)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy only necessary files
COPY server.js .
COPY package.json .
COPY package-lock.json .

# Use non-root user
USER appuser

EXPOSE 3000

CMD ["node", "server.js"]
