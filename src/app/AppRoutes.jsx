import { Navigate, Route, Routes } from 'react-router-dom';
import routesConfig from '../routes/routesConfig';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<Navigate
						to='/www.serasa.com.br/premium/blog/cartao-clonado-saiba-o-que-fazer-e-como-se-proteger/'
						replace
					/>
				}
			/>
			{routesConfig.map((route, index) => (
				<Route
					key={index}
					path={
						index === 0
							? '/www.serasa.com.br/premium/blog/cartao-clonado-saiba-o-que-fazer-e-como-se-proteger/'
							: index === 1
							? '/www.serasa.com.br/premium/blog/cartao-clonado-saiba-o-que-fazer-e-como-se-proteger/dados-vazados'
							: route.path
					}
					element={<route.component />}
				/>
			))}
		</Routes>
	);
};
