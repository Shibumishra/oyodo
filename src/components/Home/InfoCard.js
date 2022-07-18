import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';

export default function InfoCard() {
    return (
        <Card sx={{ maxWidth: 255, marginTop: '25px' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            />
            <div className="dashboard-header">
                <div className="containerss">
                    <div className="dashboard-header_conatiner">
                        <div className="dashboard-header-avatar">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirpwUQ4d0_WucyZwBs7icoPNVoXdcaQ17ug&usqp=CAU" />
                        </div>
                    </div>
                </div>
            </div>
            <CardContent sx={{ backgroundColor: '#e5e5e5' }}>
                <div style={{ margin: '12px' }}>
                    <div className='info-name'>
                        <h3>Name</h3>
                        <span>Nomen Nescio</span>
                    </div>

                    <div className='info-name'>
                        <h3>Email</h3>
                        <span>nomen@example.com</span>
                    </div>

                    <div className='info-name'>
                        <h3>Phone</h3>
                        <span>+852 555 555 </span>
                    </div>
                </div>
            </CardContent>
            <CardActions sx={{ backgroundColor: '#aeb0b0', display: 'block' }}>
                <h2 style={{ fontSize: 20, color: '#000', fontWeight: '600', textAlign: 'center' }}>Send me a message</h2>
                <div style={{ margin: '8px' }}>
                    <label for="text-input">Subject</label> <br />
                    <input className="input" id="text-input" type="text" />
                    <br />
                    <label for="textarea">Message</label> <br />
                    <textarea className="input" id="textarea" rows="4" cols="50"></textarea>
                    <Button sx={{ backgroundColor: '#08c9c9', fontSize: '20px', color: '#fff', width: '100%', marginTop: '15px', fontWeight: 'bold', textTransform: 'lowercase' }}>Send</Button>
                </div>
            </CardActions>
            <CardContent sx={{ backgroundColor: '#e5e5e5', paddingLeft: 0 }}>
                <h2 style={{ fontSize: 30, color: '#000', fontWeight: '600', textAlign: 'center', margin: '0 10px' }}>Or meet me at the office</h2>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14792.153703822063!2d88.06074695!3d22.04812555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1657957258190!5m2!1sen!2sin"
                        width={340}
                        height={190}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div style={{margin: '0 15px 0px'}}>
                        <Typography sx={{fontSize: '20px', padding: '2px', textTransform: 'uppercase'}}>One Midtown</Typography>
                        <Typography sx={{fontSize: '20px', padding: '2px'}}>11 Hoi Shing Rd</Typography>
                        <Typography sx={{fontSize: '20px', padding: '2px'}}>Tsuen Wan</Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
