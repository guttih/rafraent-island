# Þjóðskrá REST þjónusta skrifuð í  TypeORM

## Ræsa þjónustu og gagnagrunn með docker
Ef ræsa skal þjónustu með docker skal gera eftirfarandi
### Forskilyrði
Docker þarf að vera uppsett á tölvunni.

### Ræsing



## Ræsa þjónustuna handvirkt
Ef þjónustunni er startað handvirkt þá þarf a gera eftirfarandi.
### Forskilyrði
Postgres þjónn þarf að vera keyrandi áður en þjónustan er ræst.  Til að stilla gagnagrunninn sem tengjast skal, þarf að stilla gildin í skránni `src\connection\Connection.ts`.

### Ræsing
```
npm i 
npm start
```
Opnaðu svo vafra og vafraðu á slóðina `http://localhost:3000` til að fá upplýsingar um hvaða föll eru til.
