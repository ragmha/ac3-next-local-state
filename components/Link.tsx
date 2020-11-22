import classnames from "classnames"
import { ReactChildren } from "react"

type LinkProps = {
  setFilter: () => void
  active: boolean
  children: ReactChildren
}
export const Link = (props: LinkProps) => {
  const anchorClassName = classnames({ selected: props.active })
  return (
    <a
      className={anchorClassName}
      style={{ cursor: "pointer" }}
      onClick={props.setFilter}
    >
      {props.children}
    </a>
  )
}

export default Link
