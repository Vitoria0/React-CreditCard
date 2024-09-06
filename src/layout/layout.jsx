import React from 'react';
import { Menu } from '../components/Menu/Menu';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
	return <Box sx={{ width: '100%', height: 'auto' }}>{children}</Box>;
};

export default Layout;
