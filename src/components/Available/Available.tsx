import styles from '@components/Available/Available.module.css'

type Props = {
  available: boolean
}

export function Available({ available }: Props) {
  return (
    <div
      role="figure"
      className={`${styles.available_circle}
        ${available ? styles.is_available : styles.not_available}
        `}
    />
  )
}
