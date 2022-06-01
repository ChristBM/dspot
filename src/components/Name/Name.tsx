import styles from '@components/Name/Name.module.css'

type Props = {
  mode: 'list' | 'details'
  name: string
}

export function Name({ mode, name }: Props) {
  return (
    <h3
      className={`${styles.name}
        ${mode === 'list' ? styles.name_list : ''}
        ${mode === 'details' ? styles.name_details : ''}
      `}
    >
      {name}
    </h3>
  )
}
