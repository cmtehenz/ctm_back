import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';

import { swaggerDocument } from '@shared/docs/docSwagger';

import aircraftsRouter from '@modules/aircrafts/infra/http/routes/aircrafts.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/profile', profileRouter);
routes.use('/password', passwordRouter);
routes.use('/aircrafts', aircraftsRouter);

export default routes;
