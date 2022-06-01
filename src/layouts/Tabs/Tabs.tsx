/* eslint-disable no-undef */
import styles from '@layouts/Tabs/Tabs.module.css'

type Props = {
  children: JSX.Element | JSX.Element[]
}

export function Tabs({ children }: Props) {
  return (
    <div className={styles.mytabs}>
      {children}
    </div>
  )
}
