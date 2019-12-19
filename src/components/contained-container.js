/** @jsx jsx */
import { jsx, Container } from "theme-ui"

export default ({ children, parentStyle, childStyle }) => {
  return (
    <div sx={{ py: 1, ...parentStyle }}>
      <Container sx={{ my: 3, ...childStyle }}>{children}</Container>
    </div>
  )
}
