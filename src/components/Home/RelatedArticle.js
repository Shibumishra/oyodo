import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const RelatedArticle = () => {
    return (
        <div style={{ margin: '50px 10px' }}>
            <div className="separator">
                <div className="line"></div>
                <h1>Related Article</h1>
                <div className="line"></div>
            </div>
            <div className='mainProducts'>
                <div className="card_cont">
                    <Card sx={{ maxWidth: 315, margin: '0 20px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://elearning.fao.org/pluginfile.php/3/theme_mtfaoadvanced/header_course/1647425188/header_course_1380x895_191id1123925.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#08c9c9' }}>
                                    Lorem Cras Pellentesque
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    magnam aliquam quaerat voluptatem . Ut enim ad minima veniam ,
                                    quis nostrum exercitationem ullam corporis suscipit laboriosam.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="card_cont">
                    <Card sx={{ maxWidth: 315, margin: '0 20px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://elearning.fao.org/pluginfile.php/3/theme_mtfaoadvanced/header_course/1647425188/header_course_1380x895_191id1123925.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#08c9c9' }}>
                                    Lorem Cras Pellentesque
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    magnam aliquam quaerat voluptatem . Ut enim ad minima veniam ,
                                    quis nostrum exercitationem ullam corporis suscipit laboriosam.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="card_cont">
                    <Card sx={{ maxWidth: 315, margin: '0 20px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://elearning.fao.org/pluginfile.php/3/theme_mtfaoadvanced/header_course/1647425188/header_course_1380x895_191id1123925.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#08c9c9' }}>
                                    Lorem Cras Pellentesque
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    magnam aliquam quaerat voluptatem . Ut enim ad minima veniam ,
                                    quis nostrum exercitationem ullam corporis suscipit laboriosam.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="card_cont">
                    <Card sx={{ maxWidth: 315, margin: '0 20px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://elearning.fao.org/pluginfile.php/3/theme_mtfaoadvanced/header_course/1647425188/header_course_1380x895_191id1123925.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#08c9c9' }}>
                                    Lorem Cras Pellentesque
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    magnam aliquam quaerat voluptatem . Ut enim ad minima veniam ,
                                    quis nostrum exercitationem ullam corporis suscipit laboriosam.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="card_cont">
                    <Card sx={{ maxWidth: 315, margin: '0 20px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://elearning.fao.org/pluginfile.php/3/theme_mtfaoadvanced/header_course/1647425188/header_course_1380x895_191id1123925.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#08c9c9' }}>
                                    Lorem Cras Pellentesque
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    magnam aliquam quaerat voluptatem . Ut enim ad minima veniam ,
                                    quis nostrum exercitationem ullam corporis suscipit laboriosam.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default RelatedArticle;