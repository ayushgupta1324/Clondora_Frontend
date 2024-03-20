import './styles.scss'
import { useState } from 'react'
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchModal = () => {

  const [searchList, setSearchList] = useState([])

  const debounce = (func, delay) => {
    let timer;

    return function (e) {
      clearTimeout(timer)

      timer = setTimeout(() => {
        func(e)
      }, delay)
    }
  }

  const handleSearch = async (e) => {
    try {
      const { data } = await axios.get(`https://gentle-tan-starfish.cyclic.app/products?search=${e.target.value}`);
      console.log(data)
      setSearchList(data)
    } catch (error) {
      console.log(error)
    }
  }

  const debounceWrapper = debounce(handleSearch, 500)

  return (
    <div className="search-container">
      <InputGroup className="input-group">
        <Input onChange={(e) => debounceWrapper(e)} placeholder="Search Products" />
        <InputRightElement>
          <AiOutlineSearch />
        </InputRightElement>
      </InputGroup>
      <div className='suggestion-area'>

      </div>
    </div>
  );
};

export default SearchModal;
