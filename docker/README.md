# EmojiGen Dockerfile

## Build Dockerfile
```shell
docker build -t emojigen -f docker/Dockerfile .
```

## Running the image

Running the image as follows will expose the application on `localhost:3000`.
```shell
docker run -d -p 3000:3000 emojigen
```