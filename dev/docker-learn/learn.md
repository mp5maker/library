## DOCKER INSTALLATION ##
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

## DOCKER UNINSTALL ##
sudo apt-get purge docker-ce docker-ce-cli containerd.io
sudo rm -rf /var/lib/docker

## DOCKER EXAMPLE ##
git clone https://github.com/dockersamples/node-bulletin-board
cd node-bulletin-board/bulletin-board-app
docker build --tag bulletinboard:1.0 .
docker run --publish 8000:8080 --detach --name bb bulletinboard:1.0
docker rm --force bb

## DOCKER VERSION ##
docker --version

## DOCKER IMAGES ##
docker image ls

## DOCKER PROCESS STATUS ##
docker ps --all

## PUBLISH ##
--publish asks Docker to forward traffic incoming on the host’s port 8000 to the container’s port 8080.
Containers have their own private set of ports, so if you want to reach one from the network, you have to forward traffic to it in this way.
Otherwise, firewall rules will prevent all network traffic from reaching your container, as a default security posture.

## DETACH ##
--detach asks Docker to run this container in the background.

## NAME ##
--name specifies a name with which you can refer to your container in subsequent commands, in this case bb.

## FORCE ##
--force option stops a running container, so it can be removed.
If you stop the container running with docker stop bb first, then you do not need to use --force to remove it.
