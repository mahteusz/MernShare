type Props = {
  text: string,
  onClick: React.MouseEventHandler,
  styleProps: StyleProps
}

type StyleProps = {
  disabled: boolean,
  marginTop?: number,
  marginRight?: number,
  marginBottom?: number,
  marginLeft?: number
}

export { type Props, type StyleProps }