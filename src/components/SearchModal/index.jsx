import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchModal = () => {
  console.log("first");

  return (
    <div className="search-container">
      <InputGroup className="input-group">
        <Input placeholder="Search Products" />
        <InputRightElement>
          <AiOutlineSearch />
        </InputRightElement>
      </InputGroup>
    </div>
  );
};

export default SearchModal;
