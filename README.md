# EmojiGen

A simple React app to generate random sequences of emojis.

### Option 1: Building from Source

```shell
git clone https://github.com/ShinraiYeen/EmojiGen.git
cd EmojiGen
npm install

# Run development server
npm run dev
```

### Option 2: Build/Run Docker image

Note that the `Dockerfile` builds and serves a production version of the app.

```shell
docker build -t emojigen -f docker/Dockerfile .
docker run -p 3000:3000 emojigen
```