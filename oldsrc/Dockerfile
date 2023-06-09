FROM nginx:stable-alpine
LABEL author="John Farrell"
COPY ./dist/tmc /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
ENTRYPOINT ["nginx","-g","daemon off;"]