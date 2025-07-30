import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './menu.module.css';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { firstLevelMenu } from '../../helpers/constants';
import { IFirstLevelMenu, MenuItem, PageItem } from '../../interfaces/menu.interface';
import { useState } from 'react';

const staticMenu: MenuItem[] = [
	{
		_id: { secondCategory: 'Frontend' },
		isOpened: true,
		pages: [
			{ alias: 'js-course', title: 'JavaScript Pro', _id: '1', category: 'Courses' },
			{ alias: 'react-course', title: 'React Intensive', _id: '2', category: 'Courses' },
		],
	},
	{
		_id: { secondCategory: 'Backend' },
		isOpened: false,
		pages: [
			{ alias: 'python-course', title: 'Python API', _id: '3', category: 'Courses' },
			{ alias: 'golang-course', title: 'GoLang Design', _id: '4', category: 'Courses' },
		],
	},
			{
		_id: { secondCategory: 'Mobile' },
		isOpened: false,
		pages: [
			{ alias: 'flutter-course', title: 'Flutter from Zero', _id: '5', category: 'Courses' },
			{ alias: 'react-native', title: 'React Native App', _id: '6', category: 'Courses' },
		],
	},
];

const staticFirstCategory = 0; 

const Menu = () => {
	const [menuState, setMenuState] = useState(staticMenu);
	const router = useRouter();

	const variants = {
		visible: { marginBottom: 20, transition: { when: 'beforeChildren', staggerChildren: 0.1 } },
		hidden: { marginBottom: 0 },
	};

	const variantsChildren = {
		visible: { opacity: 1, height: 30 },
		hidden: { opacity: 0, height: 0 },
	};

	const openSecondBlock = (category: string) => {
		setMenuState(prev =>
			prev.map(c =>
				c._id.secondCategory === category ? { ...c, isOpened: !c.isOpened } : c
			)
		);
	};

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(c => (
					<div key={c.route}>
						<Link href={`/${c.route}/${staticMenu[0].pages[0]._id}`}>
							<div
								className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: c.id === staticFirstCategory,
								})}
							>
								{c.icon}
								<span>{c.name}</span>
							</div>
						</Link>
						{c.id === staticFirstCategory && buildSecondLevel(c)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: IFirstLevelMenu) => (
		<div className={styles.secondBlock}>
			{menuState.map(q => {
				if (q.pages.map(p => p._id).includes(router.asPath.split('/')[2])) {
					q.isOpened = true;
				}
				return (
					<div key={q._id.secondCategory}>
						<div className={styles.secondLevel} onClick={() => openSecondBlock(q._id.secondCategory)}>
							{q._id.secondCategory}
						</div>
						<motion.div
							variants={variants}
							layout
							initial={q.isOpened ? 'visible' : 'hidden'}
							animate={q.isOpened ? 'visible' : 'hidden'}
							className={cn(styles.secondLevelBlock)}
						>
							{buildThirdLevel(q.pages, menuItem.route)}
						</motion.div>
					</div>
				);
			})}
		</div>
	);

	const buildThirdLevel = (pages: PageItem[], route: string) =>
		pages.map(p => (
			<motion.div key={p._id} variants={variantsChildren}>
				<Link
					href={`/${route}/${p._id}`}
					className={cn(styles.thirdLevel, {
						[styles.thirdLevelActive]: `/${route}/${p._id}` === router.asPath,
					})}
				>
					{p.title}
				</Link>
			</motion.div>
		));

	return <div className={styles.menu}>{buildFirstLevel()}</div>;
};

export default Menu;
