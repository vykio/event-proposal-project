FROM node:22-alpine
WORKDIR /app

# Copy only the files needed to install dependencies
COPY package.json package-lock.json* ./

# Install dependencies with the preferred package manager
RUN npm ci

# Copy the rest of the files
COPY . .

EXPOSE 3000

# Run development build with the preferred package manager
CMD npm run dev