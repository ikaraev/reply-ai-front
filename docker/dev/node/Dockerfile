# Use the latest Node.js LTS version
FROM node:20

# Set environment variables
ENV HOME=/app
ENV NODE_ENV=development
ENV NODE_PORT=3000

# Create app folder
WORKDIR $HOME

# Copy dependency manifests
COPY package*.json ./

# Copy the app source code
COPY . .

# Expose the port used by Next.js (default: 3000)
EXPOSE 3000

# No CMD — you'll start manually via bash or docker exec
