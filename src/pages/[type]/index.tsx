import { GetServerSideProps } from 'next';
import React from 'react';
import { firstLevelMenu } from '../../helpers/constants';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import { withLayout } from '../../layout/layout';

const Type = () => {
	return <div>Type</div>;
};

export default withLayout(Type);
