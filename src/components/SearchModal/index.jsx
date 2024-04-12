import './styles.scss'
import { useState } from 'react'
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchModal = () => {

  const [searchList, setSearchList] = useState([])
  const [suggestionAreaVisible, setSuggestionAreaVisible] = useState(false)

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
      if (e.target.value) {
        const { data } = await axios.get(`https://gentle-tan-starfish.cyclic.app/products?search=${e.target.value}`);
        setSearchList(data)
      } else {
        setSearchList([])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const debounceWrapper = debounce(handleSearch, 300)

  return (
    <div className="search-container">
      <InputGroup className="input-group">
        <Input onChange={(e) => debounceWrapper(e)} placeholder="Search Products" onFocus={() => setSuggestionAreaVisible(true)} onBlur={() => setSuggestionAreaVisible(false)} />
        <InputRightElement>
          <AiOutlineSearch />
        </InputRightElement>
      </InputGroup>
      {suggestionAreaVisible && searchList.length > 0 && <div className={`suggestion-area ${suggestionAreaVisible && searchList.length ? 'focus' : ''}`} ></div>}
    </div>
  );
};

export default SearchModal;
