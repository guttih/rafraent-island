# Þjóðskrá REST þjónusta skrifuð í  TypeORM

## Ræsa þjónustu og gagnagrunn með docker
Ef ræsa skal þjónustu með docker skal gera eftirfarandi
### Forskilyrði
Docker þarf að vera uppsett á tölvunni til að hægt sé að keyra postgres container.  Sjá `README.md` á rót reposins til að sjá hvernig skal starta postgres í container.
### Ræsing
```
docker rm thjodskra-api
docker run -p 3000:3000 --name thjodskra-api --link=postgres:database  thjodskra-api:latest
```


## Ræsa þjónustuna handvirkt
### Forskilyrði
Postgres þjónn þarf að vera keyrandi áður en þjónustan er ræst.  Til að stilla gagnagrunninn sem tengjast skal, þarf að stilla gildin í skránni `src\connection\Connection.ts`.

### Ræsing
Ef þjónustunni er startað handvirkt þá þarf a gera eftirfarandi.
```
npm i 
npm start
```
Opnaðu svo vafra og vafraðu á slóðina `http://localhost:3000` til að fá upplýsingar um hvaða föll eru til.
