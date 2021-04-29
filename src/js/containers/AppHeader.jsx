import React from 'react';
import { NavLink } from 'react-router-dom';
//routes
import { routes } from '../routing/routingConstants/RoutesConfig';

const AppHeader = () => (
	<div className="d-flex align-items-center justify-content-center">
		{routes.map((el, i) => (
			<NavLink exact={el.exact} className="link" to={el.path} style={{ padding: 5 }} key={i}>
				{el.label}
			</NavLink>
		))}
	</div>
);

export default AppHeader;
