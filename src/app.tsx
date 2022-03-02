import { memo } from 'react';
import '@/styles';
import classnames from 'classnames';
import c from './app.less';

export interface AppProps {
	name: string;
}

const App = (props: AppProps) => {
	const { name } = props;
	const appClas = classnames(c.app);

	return (
		<p className={appClas}>
			react,
			{name}
		</p>
	);
};

export default memo(App);
