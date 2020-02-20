
```
docker build -t graphql:test .
docker run -dti -p 4000:4000 -e NODE_ENV=dev --name graphql graphql:test
```

