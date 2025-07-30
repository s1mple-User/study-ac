import axios from 'axios';
import { GetServerSideProps } from 'next';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/layout';
import { HomePageComponent } from '../page-components';
import Seo from '../layout/seo/seo';

const Index = (): JSX.Element => {
	return<Seo> <HomePageComponent />;</Seo>
};

export default withLayout(Index);


