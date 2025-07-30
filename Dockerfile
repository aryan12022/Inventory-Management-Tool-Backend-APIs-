# Use official Node image
FROM node:18-slim

# Create app directory
WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install --omit=dev

# Copy all project files
COPY . .

# Expose port (your app will still read from PORT env)
EXPOSE 3000

# Start the app
CMD ["sh", "-c", "node app.js"]
