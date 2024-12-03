FROM node:18 AS build

WORKDIR /ui

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build -- --output-path=dist

FROM nginx:stable

COPY --from=build /ui/dist/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]