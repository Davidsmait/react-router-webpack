import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
    return (
        <Layout>
            <p>Hola Mundo de React y Webpack!</p>
            <p>
                <Link to="/dynamic">Navegar a Página Dinámica</Link>
            </p>
        </Layout>
    );
};

export default Home;
