FROM node:18-alpine

WORKDIR /app

# Copy all files
COPY . .

# Install dependencies
RUN npm ci

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "start"]