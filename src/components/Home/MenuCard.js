import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const navItems = [
    {
        id: 0,
        page: 'Home',
        link: '/'
    },
    {
        id: 1,
        page: 'Examples',
        link: '/'
    },
    {
        id: 2,
        page: 'Contact',
        link: '/'
    },
    {
        id: 3,
        page: 'About',
        link: '/'
    }
];

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
);


export default function MenuCard() {
    const [selected, setSelected] = useState(0);

    const handleClick = (id) => () => {
        setSelected(id);
    };
    return (
        <Box sx={{ maxWidth: 255 }}>
            <Card variant="outlined">
                <CardContent>
                <Typography sx={{ fontSize: 22, color: '#000', fontWeight: '600', textAlign: 'center' }} gutterBottom>
                    Submenu
                </Typography>
                <>
                    {navItems.map((item) => (
                        <Link key={item.id} to={item.link} className={selected == item.id ? 'menu-active' : 'menu-links'} onClick={handleClick(item.id)} >
                            <Typography>
                                {item.page}
                            </Typography>
                        </Link>
                    ))}
                </>
            </CardContent>
            </Card>
        </Box>
    );
}