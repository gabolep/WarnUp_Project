FROM node:16 as build


WORKDIR /app/warnupapp
COPY . .


RUN npm install
RUN npm run build

FROM node:16

WORKDIR /app/warnupapp

COPY --from=build /app/warnupapp/dist ./dist
COPY --from=build /app/warnupapp/package.json ./

RUN npm install --prod

EXPOSE 4000

CMD ["npm", "run", "start:prod"]
