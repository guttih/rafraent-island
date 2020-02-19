docker build -t gudni:test .

docker run -dti -p 4000:4000 -e NODE_ENV=dev --name gudni gudni:test

