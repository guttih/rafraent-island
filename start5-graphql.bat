cd graphQL
::docker docker stop graphql
::docker docker rm graphql
::docker docker build -t graphql:test .
::docker run -dti -p 4000:4000 -e NODE_ENV=dev --name graphql graphql:test
::@ping 127.0.0.1 -n 1 > nul
npm i && npm start
