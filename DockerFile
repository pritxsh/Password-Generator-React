FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# This Dockerfile creates a multi-stage build for a Node.js application.
# The first stage uses a Node.js 18 Alpine image to install dependencies and build the application
# The second stage uses an Nginx Alpine image to serve the built application.
# The final image is lightweight and optimized for serving static files.
# The application listens on port 80.
# The final command starts the Nginx server in the foreground.
# The final image is lightweight and optimized for serving static files.
