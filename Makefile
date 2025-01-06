up:
	docker compose up -d

build:
	docker compose build

down:
	docker compose down --remove-orphans

logs:
	docker compose logs app -f

exec:
	docker compose exec -it app /bin/sh 