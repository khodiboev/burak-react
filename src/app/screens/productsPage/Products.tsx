import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
];

export default function ProductsPage() {
  return (
    <div className={"products-page"}>
      <Container maxWidth={"lg"}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className="avatar-big-box">
            <Box className="page-title">Burak Restaurant</Box>

            <Stack direction="row" className="search-box">
              <input
                type="text"
                placeholder="Type here"
                className="search-input"
              />
              <Button
                variant="contained"
                className="search-btn"
                startIcon={<SearchIcon />}
              >
                SEARCH
              </Button>
            </Stack>
          </Stack>

          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              <Button
                variant={"contained"}
                color={"primary"}
                className={"order"}
              >
                New
              </Button>

              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Price
              </Button>

              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Views
              </Button>
            </Stack>
          </Stack>

          <Stack className={"list-category-section"}>
            <Stack className="left-category-btn">
              <Button
                variant={"contained"}
                color={"primary"}
                className={"order"}
              >
                Dish
              </Button>

              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Salad
              </Button>

              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Drink
              </Button>

              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Desert
              </Button>

              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Other
              </Button>
            </Stack>

            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products.map((product, index) => {
                  return (
                    <Stack key={index} className={"product-card"}>
                      <Stack
                        className={"product-img"}
                        sx={{ backgroundImage: `url(${product.imagePath})` }}
                      >
                        <div className={"product-sale"}>Normal Size</div>

                        <Button className={"shop-btn"}>
                          <img
                            src={"/icons/shopping-cart.svg"}
                            style={{ display: "flex" }}
                            alt=""
                          />
                        </Button>

                        <Button className={"views-btn"} sx={{ right: "36px" }}>
                          <Badge badgeContent={20} color="secondary">
                            <RemoveRedEyeIcon
                              sx={{ color: 20 ? "gray" : "white" }}
                            />
                          </Badge>
                        </Button>
                      </Stack>

                      <Box className={"product-desc"}>
                        <span className={"product-title"}>
                          {product.productName}
                        </span>

                        <div className={"product-desc"}>
                          <MonetizationOnIcon />
                          {12}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">Products are not available</Box>
              )}
            </Stack>
          </Stack>

          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>

      <div className="brands-logo">
        <Container>
          <Stack className="brands-section">
            <Box className="brands-title">Our Family Brands</Box>

            <Stack direction="row" className="brands-wrapper">
              <Box className="brand-card">
                <img src="/img/gurme.webp" alt="" />
              </Box>

              <Box className="brand-card">
                <img src="/img/gurme.webp" alt="" />
              </Box>

              <Box className="brand-card">
                <img src="/img/gurme.webp" alt="" />
              </Box>

              <Box className="brand-card">
                <img src="/img/gurme.webp" alt="" />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </div>

      <div className={"address"}>
        <Container>
          <Stack className={"address-area"}>
            <Box className={"title"}>Our Address</Box>
            <iframe
              title="This is unique iframe"
              style={{ marginTop: "60px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202404.91416826367!2d126.80933064449653!3d37.565033714527516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca28b61c565cd%3A0x858aedb4e4ea83eb!2sSeoul!5e0!3m2!1sen!2skr!4v1771573359956!5m2!1sen!2skr"
              width="1320"
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
