import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"

// reactstrap components
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap"

const ImageCarousel = props => {
  const { items } = props
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [animating, setAnimating] = React.useState(false)
  const onExiting = () => {
    setAnimating(true)
  }
  const onExited = () => {
    setAnimating(false)
  }
  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }
  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }
  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }
  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="image-carousel"
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {items.map(item => {
        return (
          <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>
            {/* <img src={item.src} alt={item.altText} /> */}
            <Image fluid={item.fluid} style={{ height: "60vh" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.caption}</h5>
            </div>
          </CarouselItem>
        )
      })}
      <button
        className="carousel-control carousel-control-prev"
        data-slide="prev"
        onClick={e => {
          e.preventDefault()
          previous()
        }}
        role="button"
      >
        <i className="now-ui-icons arrows-1_minimal-left"></i>
      </button>
      <button
        className="carousel-control carousel-control-next"
        data-slide="next"
        onClick={e => {
          e.preventDefault()
          next()
        }}
        role="button"
      >
        <i className="now-ui-icons arrows-1_minimal-right"></i>
      </button>
    </Carousel>
  )
}

ImageCarousel.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ImageCarousel
