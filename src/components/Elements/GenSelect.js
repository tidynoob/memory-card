import React from "react";
import { Select } from "@chakra-ui/react";

function GenSelect(props) {
  const { setGen, ...rest } = props;

  const handleChange = (e) => {
    if (e.target.value === "") {
      setGen(null);
      return;
    }
    setGen(e.target.value);
  };

  return (
    <Select defaultValue="" onChange={handleChange} {...rest}>
      <option value="">All Gens</option>
      <option value="1">Gen 1</option>
      <option value="2">Gen 2</option>
      <option value="3">Gen 3</option>
      <option value="4">Gen 4</option>
      <option value="5">Gen 5</option>
      <option value="6">Gen 6</option>
      <option value="7">Gen 7</option>
      <option value="8">Gen 8</option>
    </Select>
  );
}

export default GenSelect;
