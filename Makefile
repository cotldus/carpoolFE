
delete-containers:
	docker rm -f $$(docker ps -a -q)

delete-volumes:
	docker volume rm $$(docker volume ls -q)

delete-images:
	docker image rm $$(docker image ls -q)

delete-all:
	docker rm -f $$(docker ps -a -q) && \
	docker volume rm $$(docker volume ls -q) && \
	docker image rm $$(docker image ls -q)

server-build:
	docker build --tag fe-carpool .

.PHONY: postgres createdb dropdb migrateup migratedown sqlc server