# Build stage
FROM node:20.11.1-alpine3.19 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:1.25.4-alpine3.18
# Update libxml2 to fix vulnerabilities
RUN apk update && \
    apk upgrade libxml2>=2.13.4-r4 && \
    rm -rf /var/cache/apk/*

COPY --from=build /app/dist /usr/share/nginx/html
# Add nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]