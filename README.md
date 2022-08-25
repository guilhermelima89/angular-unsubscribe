# ANGULAR UNSUBSCRIBE

## Front-End

- Angular
- Boostrap
- Rxjs

#

### POC abordando conceito unsubscribe do observable.

#

- Emitindo um valor via imput que é consumido pelos componentes através do serviço.

<img src=".docs/images/img-02.png" alt="image"/>

- Os componentes são destruídos, porém um componente sem a funcionalidade de se desinscrever continua lendo informações.

<img src=".docs/images/img-03.png" alt="image"/>

- Componente sem unsubscribe recebendo informação mesmo depois de destruído (sem apresentar na tela).

<img src=".docs/images/img-01.png" alt="image"/>
