import React from 'react';


const MoreSeries = () => {
    return (
        <div className='more-Series-container'>
            <div className="separator">
                <div className="line"></div>
                <h1>More in this series</h1>
                <div className="line"></div>
            </div>
            <div className='more-series'>
                <div>
                    <img src='https://mui.com/static/images/cards/contemplative-reptile.jpg' alt='' />
                </div>
                <div className='more-series-text'>
                    <h1>Porta Parturient Fermentum Euismod</h1>
                    <p>Nulla vitae elit libero , a pharetra augue . Morbi leo risus , porta ac consectetur ac , vestibulum at eros . Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </div>
            </div>

            <div className='more-series'>
                <div>
                    <img src='https://mui.com/static/images/cards/contemplative-reptile.jpg' alt='' />
                </div>
                <div className='more-series-text'>
                    <h1>Euismod Fermentum Ornare</h1>
                    <p>Aenean lacinia bibendum nulla sed consectetur . Nulla vitae elit libero , a pharetra augue . Aenean eu leo quam . Pellentesque ornare sem lacinia quam venenatis vestibulum . Donec sed odio dui . Aenean lacinia bibendum nulla sed consectetur . Nullam id dolor id nibh ultricies vehicula ut id elit .</p>
                </div>
            </div>
        </div>
    )
}

export default MoreSeries