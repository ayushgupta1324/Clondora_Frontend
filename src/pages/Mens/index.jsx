import "./styles.scss";
import React, { useEffect, useState } from "react";
import { Box, Grid, Heading, HStack, Select, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import axios from "axios";
import SkeletonComponent from "components/SkeletonComponent";
import Product from "components/product";

const MensPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts();
  }, [sort]);

  const getProducts = async () => {
    const { data } = await axios.get(
      `https://gentle-tan-starfish.cyclic.app/products?category=Men&price=${sort}`
    );
    setProducts(data);
    setIsLoading(false);
  };

  const changeCategory = (category) => {
    navigate(`/${category}`);
  };

  return (
    <>
      <Box className="page-container" pb="50px">
        <div className="page-heading" fontSize="16px">
          Men’s Outerwear
        </div>
        <Text fontSize="14px" m="auto" maxW={["70%", "50%", "30%"]}>
          Honouring the spirit of adventure inherent in every Clondora garment,
          the men’s outerwear collection mixes timeless trench coats with modern
          puffer jackets in seasonal Night Check.
        </Text>

        <Box
          mt="50px"
          mb="40px"
          borderTop="1px solid #e4e4e4"
          borderBottom="1px solid #e4e4e4"
        >
          <HStack
            justifyContent="flex-start"
            fontWeight="500"
            textTransform="uppercase"
            fontSize="14px"
            spacing="30px"
            px="20px"
            py="10px"
          >
            <Select
              border="none"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              maxW="100px"
              placeholder="Price"
              cursor={"pointer"}
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </Select>
            <Select
              onChange={(e) => changeCategory(e.target.value)}
              border="none"
              maxW="150px"
              placeholder="Category"
              cursor={"pointer"}
            >
              <option value="womens">Womens</option>
              <option value="mens">Mens</option>
              <option value="kids">Kids</option>
            </Select>
          </HStack>
        </Box>
        <Text fontSize="12px">{products.length} results</Text>
        <Text fontWeight="500">Discover Heritage Trench Coats</Text>
        {isLoading ? (
          <SkeletonComponent />
        ) : (
          <div className="product-container">
            {products.map((item) => {
              return <Product key={item._id} {...item} />;
            })}
          </div>
        )}
      </Box>
    </>
  );
};

export default MensPage;
