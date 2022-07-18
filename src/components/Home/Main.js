import React from 'react'
import Details from './Details';
import MoreSeries from './MoreSeries';

const Main = () => {
    return (
        <div className='submenu-container'>
            <div style={{ margin: '0 20px 0' }}>
                <h1>Justo Vulputate Tortor Sem</h1>
                <h4 className='submenu-min-heading'>Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua . Ut enim ad minim veniam , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat . </h4>
                <p className='text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium , totam rem aperiam , eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo . Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit , sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                <div>
                    <p className='text'>Cras justo odio , dapibus ac facilisis in , egestas eget quam .
                        Donec id elit non mi porta gravida at eget metus .
                        Nulla vitae elit libero , a pharetra augue nesciunt .
                        Neque porro quisquam est , qui dolorem ipsum quia dolor sit amet ,
                        consectetur , adipisci velit , sed quia non numquam eius modi tempora incidunt ut
                        <p className='text-left'>
                            labore et dolore
                            magnam aliquam quaerat voluptatem . Ut enim ad minima veniam ,
                            quis nostrum exercitationem ullam corporis suscipit laboriosam ,
                            nisi ut aliquid ex ea commodi consequatur ?
                            Etiam porta sem malesuada magna mollis euismod . Cras justo odio , dapibus ac facilisis in ,
                            egestas eget quam . Donec ullamcorper
                        </p>
                        nulla non metus auctor fringilla . Maecenas sed diam eget risus varius blandit sit amet non magna . Nullam quis risus eget urna mollis ornare vel eu leo .
                    </p>
                    <div className='text-right'>
                        <p style={{ fontSize: '22px', color: 'rgb(96 157 171)', fontWeight: '400', fontFamily: 'inherit' }}>Purus sociis natoque penatibus et magnis dis parturient montes , nascetur ridiculus mus .
                            Nullam id dolor id nibh ultricies vehicula ut id elit .
                        </p>
                        <p style={{ float: 'right', padding: 0, margin: 0 }}>-Jane Doe</p>
                    </div>
                </div>
                <MoreSeries />
            </div>
            <div>
                <Details />
            </div>
        </div>
    )
}

export default Main;