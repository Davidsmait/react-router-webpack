import React from 'react';
import { Icon, Header } from 'semantic-ui-react';

import Layout from './Layout';

const NoMatch = () => {
    return (
        <Layout>
            <Icon name="minus circle" size="big" />
            <strong>Página No Encontrada!</strong>
        </Layout>
    );
};

export default NoMatch;
