import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Button from './Button'

ReactDOM.render(
  <React.StrictMode>
    <App 
      direction='col'
      space='large'
      align='start'
    >
      <Button>hello</Button>
      <button>hhhhh</button>
      <button>hhhhh</button>
      <button style={{margin:'40px', alignSelf:'center'}}>hhhhh</button>
      <button style={{width:'10%'}}>hhhhh</button>
      <button>hhhhh</button>
      <button>hhhhh</button>
      <button>hhhhh</button>
      <div>
        <p>Creates styles attached to a locally scoped class name.</p>
        <p>CSS Variables, simple pseudos, selectors and media/feature queries are all supported.</p>
        <p>Selectors can also contain references to other scoped class names.</p>
      </div>    </App>

    <App wrap='nowrap' space='large'>
      <div>
        <p>Creates styles attached to a locally scoped class name.</p>
        <p>CSS Variables, simple pseudos, selectors and media/feature queries are all supported.</p>
        <p>Selectors can also contain references to other scoped class names.</p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ullam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto quasi, nam eius aut asperiores repellat fuga laboriosam ipsa unde mollitia nesciunt. Similique ab doloribus ullam et ducimus esse id.</p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ullam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto quasi, nam eius aut asperiores repellat fuga laboriosam ipsa unde mollitia nesciunt. Similique ab doloribus ullam et ducimus esse id.</p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ullam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto quasi, nam eius aut asperiores repellat fuga laboriosam ipsa unde mollitia nesciunt. Similique ab doloribus ullam et ducimus esse id.</p>
      </div>
    </App>


  </React.StrictMode>,
  document.getElementById('root')
)
