import './styles.scss'
import { useState } from 'react'
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchModal = () => {

  const [searchList, setSearchList] = useState([])
  const [isBlurred, setIsBlurred] = useState(false)
  const [inFocus, setInFocus] = useState(false)

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
        setInFocus(true)
      } else {
        setSearchList([])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const debounceWrapper = debounce(handleSearch, 500)

  const handleBlur = () => {
    setIsBlurred(true)
  }

  return (
    <div className="search-container">
      <InputGroup className="input-group">
        <Input onChange={(e) => debounceWrapper(e)} placeholder="Search Products" onFocus={() => setIsBlurred(false)} onBlur={() => handleBlur()} />
        <InputRightElement>
          <AiOutlineSearch />
        </InputRightElement>
      </InputGroup>
      <div className={`suggestion-area ${isBlurred ? 'blurred' : ''} ${inFocus && searchList.length ? 'focus' : ''}`} >

      </div>
    </div>
  );
};

export default SearchModal;
