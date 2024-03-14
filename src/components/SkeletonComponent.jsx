import { Box, Grid, GridItem, Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const SkeletonComponent = () => {
  const skeletonArray = [1, 2];

  return (
    <>
      {skeletonArray.map((index) => {
        return (
          <Box w="90%" m="auto" zIndex="1">
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
              <GridItem>
                <Stack>
                  <Skeleton height="80px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                </Stack>
              </GridItem>
              <GridItem>
                <Stack>
                  <Skeleton height="80px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                </Stack>
              </GridItem>
              <GridItem>
                <Stack>
                  <Skeleton height="80px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                </Stack>
              </GridItem>
              <GridItem>
                <Stack>
                  <Skeleton height="80px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                </Stack>
              </GridItem>
            </Grid>
          </Box>
        );
      })}
    </>
  );
};

export default SkeletonComponent;
