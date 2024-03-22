/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { cn } from 'utils/cn'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = 'up'
}: {
  images: string[]
  children: React.ReactNode
  overlay?: React.ReactNode
  overlayClassName?: string
  className?: string
  autoplay?: boolean
  direction?: 'up' | 'down'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [loadedImages, setLoadedImages] = useState<string[]>([])

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    )
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    loadImages()
  }, [])

  const loadImages = () => {
    setLoading(true)
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = image
        img.onload = () => resolve(image)
        img.onerror = reject
      })
    })

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages as string[])
        setLoading(false)
      })
      .catch((error) => console.error('Failed to load images', error))
  }
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        handleNext()
      } else if (event.key === 'ArrowLeft') {
        handlePrevious()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    // autoplay
    let interval: any
    if (autoplay) {
      interval = setInterval(() => {
        handleNext()
      }, 5000)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      clearInterval(interval)
    }
  }, [])

  const areImagesLoaded = loadedImages.length > 0

  return (
    <div
      className={cn(
        'overflow-hidden h-[85vh] w-full relative flex flex-col items-start justify-start',
        className
      )}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div className={cn('absolute inset-0  z-40', overlayClassName)} />
      )}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            alt="Slideshow Hero"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: {
                duration: 1,
                ease: 'easeInOut'
              },
              scale: { duration: 5, ease: 'linear' }
            }}
            className=" absolute inset-0 size-full object-cover object-center"
          />
        </AnimatePresence>
      )}
    </div>
  )
}
