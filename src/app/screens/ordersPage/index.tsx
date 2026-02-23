import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box, Divider } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/order.css";

export default function OrdersPage() {
  const [value, setValue] = useState("1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"order-page"}>
      <Container className="order-container">
        {/* LEFT SIDE */}
        <Stack className={"order-left"}>
          <TabContext value={value}>
            <Box className={"order-nav-frame"}>
              <Tabs
                value={value}
                onChange={handleChange}
                className={"table_list"}
              >
                <Tab label="Paused Order" value={"1"} />
                <Tab label="Process Order" value={"2"} />
                <Tab label="Finished Orders" value={"3"} />
              </Tabs>
            </Box>

            <Stack className={"order-main-content"}>
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        {/* RIGHT SIDE */}
        <Stack className={"order-right"}>

          {/* USER INFO */}
          <Box className={"order-info-box"}>
            <Box className={"member-box"}>

              <div className={"order-user-img"}>
                <img
                  src={"/icons/default-user.svg"}
                  alt=""
                  className="order-user-avatar"
                />

                <div className={"order-user-icon-box"}>
                  <img
                    src={"/icons/user-badge.svg"}
                    alt=""
                    className={"order-user-prof-img"}
                  />
                </div>
              </div>

              <h3 className="order-user-name">Justin</h3>
              <p className="order-user-role">USER</p>

              <Divider className="order-divider" />

              <Box className="order-location-box">
                <LocationOnIcon className="location-icon" />
                <span>South Korea, Busan</span>
              </Box>

            </Box>
          </Box>

          {/* PAYMENT BOX */}
          <Box className={"payment-box"}>
            <input
              type="text"
              placeholder="Card number : 5243 4090 2002 7495"
              className="payment-input full"
            />

            <Box className="payment-row">
              <input
                type="text"
                placeholder="07 / 24"
                className="payment-input"
              />
              <input
                type="text"
                placeholder="CVV : 010"
                className="payment-input"
              />
            </Box>

            <input
              type="text"
              placeholder="Justin Robertson"
              className="payment-input full"
            />

            <Box className="payment-icons">
              <img src="/icons/payme.svg" alt="" />
              <img src="/icons/mastercard.svg" alt="" />
              <img src="/icons/paypal.svg" alt="" />
              <img src="/icons/visa.svg" alt="" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}