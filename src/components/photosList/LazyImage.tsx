import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Photo } from 'types'

const placeHolder = 'https://via.placeholder.com/150'

const Image = styled.img`
  display: block;
  height: 150px;
  width: 150px;
  @keyframes loaded {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }

  &.loaded:not(.has-error) {
    animation: loaded 300ms ease-in-out;
  }

  &.has-error {
    content: url(${placeHolder});
  }
`

interface OwnProps {
  photo: Photo
}

const LazyImage: React.FC<OwnProps> = ({ photo }) => {
  const [imageSrc, setImageSrc] = useState(placeHolder)
  const [imageRef, setImageRef] = useState()

  const onLoad = event => {
    event.target.classList.add('loaded')
  }

  const onError = event => {
    event.target.classList.add('has-error')
  }

  useEffect(() => {
    let observer
    let didCancel = false

    if (imageRef && imageSrc !== photo.thumbnailUrl) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(photo.thumbnailUrl)
                observer.unobserve(imageRef)
              }
            })
          },
          {
            threshold: 0.01,
            rootMargin: '75%'
          }
        )
        observer.observe(imageRef)
      } else {
        // Old browsers fallback
        setImageSrc(photo.thumbnailUrl)
      }
    }
    return () => {
      didCancel = true
      if (observer && observer.unobserve && imageRef) {
        observer.unobserve(imageRef)
      }
    }
  }, [ photo.thumbnailUrl, imageSrc, imageRef ])

  return (
    <Image
      ref={setImageRef}
      src={imageSrc}
      alt={photo.title}
      onLoad={onLoad}
      onError={onError}
    />
  )
}

export default LazyImage
