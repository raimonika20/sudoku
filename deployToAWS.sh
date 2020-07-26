#!/bin/bash    

PROJECT_FOLDER_NAME="sudoku-design"
KEY_PATH="/atools/aws_resources/ppkKey.pem"
AWS_IP="13.233.104.142"

ng build --prod
cp .htaccess dist/$PROJECT_FOLDER_NAME/.htaccess
cd dist/
zip -r a.zip $PROJECT_FOLDER_NAME/

curl --insecure -v -k --key $KEY_PATH sftp://ubuntu@$AWS_IP/opt/lampp/htdocs/a.zip -T a.zip
ssh -i $KEY_PATH ubuntu@$AWS_IP 'cd /opt/lampp/htdocs/;unzip -q -o a.zip;mv sudoku-design/ Sudoku/;rm a.zip'

# curl --insecure -v -k --key $KEY_PATH sftp://ubuntu@$AWS_IP/opt/Backends/fp -T "b.zip"
# ssh -i $KEY_PATH ubuntu@AWS_IP 'cd /opt/Backends/;unzip -q -o b.zip;cd GMS;pm2 start runConfig.json;'