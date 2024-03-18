import { Box, Grid, GridItem, Skeleton, Stack, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const SkeletonComponent = () => {
  const skeletonArray = [1, 2];
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {skeletonArray.map((index) => {
        return (
          <Box w="90%" m="auto" mb='40px' zIndex="1">
            <Grid templateColumns={isSmallerThan768 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'} gap={6}>
              <GridItem>
                <Stack>
                  <Skeleton height="200px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                </Stack>
              </GridItem>
              <GridItem>
                <Stack>
                  <Skeleton height="200px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                </Stack>
              </GridItem>
              <GridItem>
                <Stack>
                  <Skeleton height="200px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                </Stack>
              </GridItem>
              <GridItem>
                <Stack>
                  <Skeleton height="200px" />
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
