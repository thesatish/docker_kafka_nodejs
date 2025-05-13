# Demonstrate : A simple microservice project using docker

# Some Important Docker Command
- docker-compose build
- docker-compose up -d

# Mongodb
- docker exec -it mongodb mongosh

# Particular logs
- docker logs kafka
- docker logs mongodb
- docker-compose logs mongodb
- docker logs inventory-service
- docker logs order-service

# Rebuild and Start All Services
- docker-compose up --build

# Stope all services
- docker stop $(docker ps -q)

# Delete all Container
- docker rm -f $(docker ps -aq)

# Remove All Images, Volumes and Network
- docker rmi -f $(docker images -q)
- docker volume rm $(docker volume ls -q)
- docker network prune -f

# Verify
- docker ps -a
- docker-compose ps

# Restart MongoDB Service
- docker-compose restart mongodb

# Changed code or config and want a clean rebuild:
- docker-compose down
- docker-compose up --build -d

# Stops containers (but keeps them)
- docker-compose stop	

# Delete all persistent data too
- docker-compose down -v

# Remove images also:
docker-compose down --rmi all

