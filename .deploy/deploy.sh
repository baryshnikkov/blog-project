cd ~/blog-project
npm run build:prod

rm -rf ~/../var/www/production_project/html
mv ~/blog-project/build ~/../var/www/production_project/html
