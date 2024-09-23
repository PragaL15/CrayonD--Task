import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import BillButtons from "../button/billButtons";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import CouponIcon from "@rsuite/icons/Coupon";
import TagIcon from "@rsuite/icons/Tag";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

const style = {
  p: 0,
  width: "220%",
  maxWidth: 470,
  position: "absolute",
  borderRadius: 1,
  border: "0px solid none",
  borderColor: "divider",
  top: "430px",
  left: "825px",
  backgroundColor: "#e8eaf6",
};

export default function ListDividers() {
  return (
    <List sx={style} aria-label="mailbox folders">
      <Divider component="li" />
      <ListItem>
        <BorderColorOutlinedIcon sx={{marginLeft:'120px'}}/>
        <ListItemText
          primary="Add Notes"
          sx={{ color: "black", marginLeft: "8px" }}
        />
      </ListItem>
      <Divider/>
      <Divider component="li" />
      <ListItem sx={{ padding: "7px 7px 7px 7px" }}>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Button
            variant="outlined"
            size="medium"
            startIcon={<AccountBoxOutlinedIcon />}
            sx={{
              borderColor: "black",
              borderRadius: "4px",
              color: "black",
              padding: "0.35",
              fontSize: "10px",
              fontWeight: "Bold",
            }}
          >
            Customer
          </Button>
          <Button
            variant="outlined"
            size="medium"
            startIcon={<CouponIcon />}
            sx={{
              borderColor: "black",
              borderRadius: "4px",
              color: "black",
              marginLeft: "30px",
              fontSize: "10px",
              fontWeight: "Bold",
            }}
          >
            Coupon
          </Button>
          <Button
            variant="outlined"
            size="medium"
            startIcon={<TagIcon />}
            sx={{
              borderColor: "black",
              borderRadius: "4px",
              color: "black",
              marginLeft: "30px",
              fontSize: "10px",
              fontWeight: "Bold",
            }}
          >
            Discount
          </Button>
        </Box>
      </ListItem>

      <Divider component="li" />
      <ListItem sx={{ padding: "12px 12px 12px 12px" }}>
        <BillButtons />
      </ListItem>
      <Divider component="li" />
    </List>
  );
}
