import { GetServerSideProps } from 'next';
import { withLayout } from '../../layout/layout';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import { PageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';
import { firstLevelMenu } from '../../helpers/constants';
import { CoursePageComponent } from '../../page-components';
import Seo from '../../layout/seo/seo';
import { page, products } from '../../page-components/course-page-component/data';


const Index = () => {
	
	return <Seo>
		 <CoursePageComponent page={page} products={products}   firstCategory={0}  />
	</Seo>
};

export default withLayout(Index);
