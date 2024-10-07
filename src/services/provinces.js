import axios from "axios";

const GetProvince = async () => {
  const response = await axios.get("/src/api/provinces");
  console.log('service', response)
  return await response.data;
};

export default {
    GetProvince
}