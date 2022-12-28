FROM php:apache 
COPY site/ /var/www/html/
CMD ["apache2-foreground"]
