import { SearchProps } from './search.props';
import styles from './search.module.css';
import cn from 'classnames';
import Input from '../input/input';
import Button from '../button/button';
import SearchIcon from './search.svg';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { PageItem } from '../../interfaces/menu.interface';

const staticMenu: PageItem[] = [
	{ _id: '1', alias: 'js-course', title: 'JavaScript Pro', category: 'Courses' },
	{ _id: '2', alias: 'react-intensive', title: 'React Intensive', category: 'Courses' },
	{ _id: '3', alias: 'frontend-mastery', title: 'Frontend Mastery', category: 'Courses' },
	{ _id: '4', alias: 'algorithms-js', title: 'JS Algorithms', category: 'Courses' },
	{ _id: '5', alias: 'python-basic', title: 'Python Basic', category: 'Courses' },
	{ _id: '6', alias: 'golang-api', title: 'GoLang API Design', category: 'Courses' },
];

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState('');
	const [response, setResponse] = useState<PageItem[]>([]);
	const router = useRouter();

	const searchHandler = (id: string) => {
		router.push(`/${router.query?.type || 'courses'}/${id}`);
		setResponse([]);
		setSearch('');
	};

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearch(value);

		const results = staticMenu.filter(item =>
			item.title.toLowerCase().includes(value.toLowerCase())
		);
		setResponse(value ? results : []);
	};

	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input
				placeholder="Search..."
				className={styles.input}
				value={search}
				onChange={changeHandler}
			/>
			<Button appearance="primary" className={styles.button}>
				<SearchIcon />
			</Button>

			{response.length > 0 && (
				<div className={styles.searchResponse}>
					{response.map(item => (
						<div onClick={() => searchHandler(item._id)} key={item._id}>
							{item.title}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Search;
