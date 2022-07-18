import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const drawerWidth = 240;
const navItems = [
    {
        id: 0,
        page: 'Home',
        link: '/'
    },
    {
        id: 1,
        page: 'Dapibus',
        link: '/dapibus'
    },
    {
        id: 2,
        page: 'Ultricies',
        link: '/ultricies'
    },
    {
        id: 3,
        page: 'Bebendum',
        link: '/bebendum'
    },
    {
        id: 4,
        page: 'Magna',
        link: '/magna'
    }];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selected, setSelected] = useState(0);

    const handleClick = (id) => () => {
        setSelected(id);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Link to='/' >
                <Typography variant="h6" sx={{ my: 2, flex: 'none' }}>
                    OYODO
                </Typography>
            </Link>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <Link to={item.link}  >
                        <ListItem key={item.id} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item.page} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className='navbar'>
            <Box sx={{ display: 'flex' }}>
                <AppBar component="nav" sx={{ backgroundColor: '#0f2438' }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link to='/'>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ color: '#0fffff', flexGrow: 1, fontSize: '28px', fontWeight: 'bold', display: { xs: 'none', sm: 'block' } }}
                            >
                                OYODO
                            </Typography>
                        </Link>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Link key={item.id} to={item.link} className={selected == item.id ? 'active' : 'links'} onClick={handleClick(item.id)} >
                                    <Button sx={{ color: '#fff', }}>
                                        {item.page}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </div>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;