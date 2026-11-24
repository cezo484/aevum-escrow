# Freelance Escrow demo page — packaged demo image.
# No dependencies: the server is plain Node, the page is static.
# NOTE: not build-tested in the dev VM (no Docker there);
# build on any machine with Docker before relying on it.
#   docker build -t aevum-escrow .
#   docker run -p 3000:3000 aevum-escrow
# Then open http://localhost:3000
FROM node:20-alpine
WORKDIR /app
COPY package.json ./
COPY src/ ./src/
COPY public/ ./public/
EXPOSE 3000
CMD ["node", "src/cli.js", "serve"]
