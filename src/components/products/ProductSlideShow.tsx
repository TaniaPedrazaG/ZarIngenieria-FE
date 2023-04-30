import { FC } from "react"
import { Slide } from "react-slideshow-image"
import styles from './ProductSlideShow.module.css'

interface Props {
    images: string[]
}

export const ProductSlideShow:FC<Props> = ({images}) => {
    return (
        <Slide
            easing="ease"
            duration={7000}
            indicators
        >
            {images.map(image => (
                <div className={styles['each-slide']} key={image}>
                    <div style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'auto',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    </div>
                </div>
            ))}
        </Slide>
    )
}
