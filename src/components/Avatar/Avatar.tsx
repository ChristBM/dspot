import Image from 'next/image'
import React from 'react'
import styles from '@components/Avatar/Avatar.module.css'

type Props = {
  mode: 'list' | 'details' | 'gallery'
  img: string
}

export function Avatar({ mode, img }: Props) {
  return (
    <div
      className={
        `${styles.img}
        ${mode === 'list' ? styles.img_list : ''}
        ${mode === 'details' ? styles.img_details : ''}
        ${mode === 'gallery' ? styles.img_gallery : ''}`
      }
    >
      <Image src={img} alt="user avatar" loading="lazy" />
    </div>
  )
}
