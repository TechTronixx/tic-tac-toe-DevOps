# Build stage
FROM node:20.11.1-alpine3.19 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:1.25.4-alpine3.18

# Update vulnerable packages
RUN apk update && \
    apk upgrade --no-cache \
        curl>=8.9.0-r0 \
        libcurl>=8.9.0-r0 \
        libexpat>=2.6.3-r0 \
        libxml2>=2.13.4-r4 && \
    rm -rf /var/cache/apk/*

COPY --from=build /app/dist /usr/share/nginx/html
# Add nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]