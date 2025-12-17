import AboutSymbol from '../../assets/icons/about-us.svg?react'
import './Heading.css'

export function Title({title, children, align="start"}) {
    return(
        <div className={`title-context title-context--${align}`}>
            <div className='title-context__mini'>
                <AboutSymbol />
                <h5>{title}</h5>
            </div>
            <h2 className='title-context__max'>
                {children}
            </h2>
        </div>
    )
}