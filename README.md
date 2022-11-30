# Proyecto base TS con Docker

## Para correr el proyecto
1. Deberas tener instalado docker desktop
2. Deberas correr alguno de los siguientes comandos
    - Correr el comando `docker-compose up -d --build` para produccion
    - Correr el comando `docker-compose -f docker-compose.dev.yml up -d --build` para desarrollo
3. Para terminar la ejecucion del proyecto deberas correr alguno de los siguientes comandos
    - Correr el comando `docker-compose down` para produccion
    - Correr el comando `docker-compose -f docker-compose.dev.yml down` para desarrollo
