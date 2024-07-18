# Use the official Node.js image.
FROM node:18-alpine3.18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.cd
RUN npm install

# Copy local code to the container image.
COPY . .

# Build the Next.js application.
RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "start" ]
