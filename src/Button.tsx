import * as styles from  './Button.css'

type ButtonProps={
  children?:any;
  margin?: 'small' | 'medium' | 'large' | 'none';
  padding?: 'small' | 'medium' | 'large' | 'none';
  border?: "normal" | "none";
}
const Button = ({
  children,
  margin='small',
  padding='small',
  border='normal',
}:ButtonProps)=>{

  return <div className={`${styles.margin[margin]} ${styles.padding[padding]} ${styles.border[border]}`}> 
     {children}
    </div>
}

export default Button
