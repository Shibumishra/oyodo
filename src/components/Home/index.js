import React from 'react'
import Banner from './Banner'
import Main from './Main'
import RelatedArticle from './RelatedArticle'
import './style.css'

const index = () => {
  return (
    <div className='container'>
      <Banner />
      <div style={{ padding: '20px 120px' }}>
        <Main />
        <RelatedArticle />
      </div>
    </div>
  )
}

export default index