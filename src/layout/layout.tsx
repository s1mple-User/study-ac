import { FunctionComponent } from 'react';
import Header from './header/header';
import { LayoutProps } from './layout.props';
import Sidebar from './sidebar/sidebar';
import styles from './layout.module.css';
import { AppContextProvider, IAppContext } from '../context/app.cotext';
import { ScrollUp } from '../components';
import { useRouter } from 'next/router';

import Seo from './seo/seo';
import Footer from './header/footer/footer';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer} />
			<ScrollUp />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		const router = useRouter();

		return (
			<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
				{router.asPath === '/' ? (
					<Seo>
                      <Component {...props} />
					</Seo>
				) : (
					<Layout>
						<Component {...props} />
					</Layout>
				)}
			</AppContextProvider>
		);
	};
};