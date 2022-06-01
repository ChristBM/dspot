/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import styles from '@components/TabLabel/TabLabel.module.css'

type Props = {
  labelTxt: string
  isDefaultChecked: boolean
  group: string
  children: JSX.Element | JSX.Element[]
}

export function TabLabel({ labelTxt, isDefaultChecked, group, children }: Props) {
  return (
    <>
      <input
        type="radio"
        value="info"
        id={labelTxt}
        name={group}
        defaultChecked={isDefaultChecked}
        readOnly
        className={styles.input_radio}
      />
      <label htmlFor={labelTxt} className={styles.label_radio}>
        {labelTxt}
        <span />
      </label>
      <div className={styles.tab}>
        { children }
      </div>
    </>
  )
}
