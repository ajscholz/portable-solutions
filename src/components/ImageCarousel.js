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
      className="image-carousel h-100"
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {items.map(item => {
        return (
          <CarouselItem
            onExiting={onExiting}
            onExited={onExited}
            key={item.id}
            className="h-100"
          >
            {/* <img src={item.src} alt={item.altText} /> */}
            <Image
              fluid={item.image.fluid}
              style={{ height: "85%" }}
              objectFit="contain"
              imgStyle={{ objectFit: "contain" }}
            />
            <div className="carousel-caption d-block p-0">
              <h4 style={{ marginBottom: 0 }}>{item.name}</h4>
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
