import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from './Layout';

const DynamicPage = () => {
    return (
        <Layout>
            <Header as="h2">Página Dinámica</Header>
            <p>Esta página fue cargada asincrónicamente!!!</p>
        </Layout>
    );
};

export default DynamicPage;
