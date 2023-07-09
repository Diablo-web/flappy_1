import { Button, Flex, Select, useColorModeValue } from "@chakra-ui/react";
import { MdTrendingUp, MdSyncAlt } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterShow, filterSortBy } from "../features";

const FilterSection = () => {
  const selectBgColor = useColorModeValue("blue.300", "blue.700");

  const colorModeValue = useColorModeValue(true, false);
  const { pathname } = useLocation();

  const { sortBy, show } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  return (
    <Flex direction={{ base: "row", lg: "column" }} gap={"4"}>
      {pathname === "/explore" && (
        <>
          <Button
            flexBasis={{ base: "50%", lg: "unset" }}
            leftIcon={<MdTrendingUp />}
            bgColor={selectBgColor ? "blue.300" : "blue.600"}
            color="white"
            variant={show === "Trending" ? "solid" : "outline"}
            onClick={() => dispatch(filterShow("Trending"))}
            _hover={{ bgColor: "blue.400" }}
          >
            Show Trending
          </Button>
          <Button
            flexBasis={{ base: "50%", lg: "unset" }}
            leftIcon={<MdSyncAlt />}
            bgColor={colorModeValue ? "gray.100" : "gray.400"}
            color={selectBgColor}
            variant={show === "Latest" ? "solid" : "outline"}
            onClick={() => dispatch(filterShow("Latest"))}
            _hover={{ bgColor: "white", borderColor: "gray.400" }}
          >
            Show Latest
          </Button>
        </>
      )}
      {pathname === "/" && (
        <Select
          value={sortBy}
          onChange={(e) => dispatch(filterSortBy(e.target.value))}
          bgColor={colorModeValue ? "blue.100" : "gray.600"}
      
        >
          <option
            value={"New to Old"}
        
            bgColor={colorModeValue ? "blue.100" : "gray.600"}
          >
            New to Old
          </option>
  
          <option
            value={"Old to New"}
            bgColor={colorModeValue ? "blue.100" : "gray.600"}
          >
            Old to New
          </option>
        </Select>
      )}
    </Flex>
  );
};

export { FilterSection };