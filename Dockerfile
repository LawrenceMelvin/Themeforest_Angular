# Stage 1: Build the Angular application
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine
COPY --from=build /app/dist/themeforest/browser /usr/share/nginx/html
COPY --from=build /app/src/assets /usr/share/nginx/html/assets

# Configure Nginx for Angular routing
RUN echo '                                              \
server {                                               \
    listen 80;                                         \
    server_name localhost;                             \
    root /usr/share/nginx/html;                        \
    index index.html;                                  \
    location / {                                       \
        try_files $uri $uri/ /index.html;             \
    }                                                  \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80