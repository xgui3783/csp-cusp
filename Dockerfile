FROM node:8

COPY . /csp-cusp
WORKDIR /csp-cusp
RUN npm i

ENTRYPOINT ["npm", "run", "start"]
