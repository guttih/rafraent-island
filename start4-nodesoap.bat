@echo off
echo þessi docker er ekki með aðgang að visual studio projectinu
echo Run Soap service first /vinnumalastofnun/vinnumalastofnun
exit
pause
@echo on

cd vinnumalastofnun\nodesoap
docker stop nodesoap-api
docker rm nodesoap-api
docker run -p 8000:8000 --name nodesoap-api nodesoap-api:latest

