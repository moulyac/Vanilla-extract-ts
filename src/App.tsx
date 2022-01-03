import * as styles from  './App.css'

type AppProps={
  children?:any;
  space?: 'small' | 'medium' | 'large' | 'none';
  align?: "start" | "end" | "center";
  direction?: "row" | "col";
  wrap?: "wrap" | "nowrap";
}
const App = ({
  children,
  space='small',
  align='center',
  direction='row',
  wrap='nowrap'
}:AppProps)=>{
  const appStyles= {}


  return <div className={`${styles.gap[space]} ${styles.align[align]} ${styles.direction[direction]} ${styles.wrap[wrap]}`}> 
     {children}
    </div>
}

export default App
