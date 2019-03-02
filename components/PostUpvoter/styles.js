import styled from "@emotion/styled";

export const Button = styled("button")({
  backgroundColor: "transparent",
  border: "1px solid #e4e4e4",
  color: "#000",
  ":active": {
    backgroundColor: "transparent"
  },
  ":before": {
    alignSelf: "center",
    borderColor: "transparent transparent #000000 transparent",
    borderStyle: "solid",
    borderWidth: "0 4px 6px 4px",
    content: '""',
    height: 0,
    marginRight: "5px",
    width: 0
  }
});
