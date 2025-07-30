import { CoursePageComponentProps } from './course-page-component.props';
import styles from './course-page-component.module.css';
import { Advantages, Heading, HhData, Product, Sort, Tag, Text } from '../../components';
import { useReducer, useEffect } from 'react';
import { sortReducer } from './sort.reducer';
import { SortEnum } from '../../components/sort/sort.props';
import { AnimatePresence } from 'framer-motion';

const CoursePageComponent = ({ page, products }: CoursePageComponentProps): JSX.Element => {
	const [state, dispatch] = useReducer(sortReducer, { sort: SortEnum.Rating, products });

console.log('page:', page);
console.log('products:', products);
		if (!page || !products) {
		return <div>Loading...</div>;
	}


	const setSort = (sort: SortEnum) => {
		dispatch({ type: sort });
	};
	const spring = {
		type: 'spring',
		stiffness: 500,
		damping: 10,
	};

	const animations = {
		initial: { scale: 0 },
		animate: { scale: 1 },
		exit: { scale: 1 },
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Heading tag='h1'>{page.title}</Heading>
				<Sort sort={state.sort} setSort={setSort} />
			</div>

			<AnimatePresence>
				{state.products.map((product, idx) => (
					<Product
						key={idx}
						layout
						transition={spring}
						{...animations}
						product={product}
					/>
				))}
			</AnimatePresence>

			{/* HH DATA */}
			{page.hh && (
				<>
					<div className={styles.hhTitle}>
						<Heading tag='h2'>Вакансии – {page.category}</Heading>
						<Tag color='red' size='m'>hh.uz</Tag>
					</div>
					<HhData {...page.hh} />
				</>
			)}

			{/* ADVANTAGES */}
			{page.advantages?.length > 0 && (
				<>
					<Heading tag='h2'>Преимущества</Heading>
					<Advantages advantages={page.advantages} />
				</>
			)}

			{/* DESCRIPTION */}
			<Text>{page.description}</Text>

			{/* TAGS */}
			{page.tags.map(t => (
				<Tag key={t} color='primary'>
					{t}
				</Tag>
			))}
		</div>
	);
};

export default CoursePageComponent;
