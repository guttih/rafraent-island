@echo off
echo This container does not have access to the visual studio soap service
echo Run Soap service first /vinnumalastofnun/vinnumalastofnun
pause
@echo on

cd vinnumalastofnun\nodesoap
::docker stop nodesoap-api
::docker rm nodesoap-api
::docker run -p 8000:8000 --name nodesoap-api nodesoap-api:latest
npm i && npm start


