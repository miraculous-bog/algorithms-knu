import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUsersStore } from '../../store/selectors';
import { USER_ROLE_ADMIN } from '../../constants';

const PrivateRouter = ({ children }) => {
	const location = useLocation();
	const userInfo = useSelector(getUsersStore);
	if (userInfo.role !== USER_ROLE_ADMIN)
		return <Navigate to='../courses' state={{ from: location }} />;

	return children;
};

PrivateRouter.propTypes = {
	children: PropTypes.element,
};

export default PrivateRouter;
