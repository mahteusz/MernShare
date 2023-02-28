interface IProps {
  text: string,
  onClick: React.MouseEventHandler,
  styleProps: IStyleProps
}

interface IStyleProps {
  disabled: boolean,
  marginTop?: number,
  marginRight?: number,
  marginBottom?: number,
  marginLeft?: number
}

export { type IProps, type IStyleProps }