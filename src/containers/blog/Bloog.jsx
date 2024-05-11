import React from 'react'
import {Article} from '../../components'
import './blog.css'
import {blog01, blog02, blog03, blog04,blog05} from './imports'
const Bloog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
    <div className='gpt3__blog-heading'>
      <h1 className='gradient__text'>A lot is happening, 
        We are blogging about it.
      </h1>
    </div>
    <div className='gpt3__blog-container'>
      <div className='gpt3__blog-container__groupA'>
      <Article imageUrl={blog01} date="May 6, 1999" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
      </div>
      <div className='gpt3__blog-container__groupB'>
      <Article imageUrl={blog02} date="Jun 4, 2017" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
      <Article imageUrl={blog03} date="Jun 13, 1972" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
      <Article imageUrl={blog04} date="Jun 23, 1998" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
      <Article imageUrl={blog05} date="May 10, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
      </div>
    </div>
    </div>
  )
}

export default Bloog