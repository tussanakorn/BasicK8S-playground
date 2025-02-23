# Base Image: php:8.3-fpm-alpine
FROM php:8.3-fpm-alpine

# Install Dependencies
RUN docker-php-ext-install pdo_mysql mysqli bcmath

# Set Working Directory
WORKDIR /var/www/html/

# Expose Port
EXPOSE 9000