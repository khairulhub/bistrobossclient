import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000/", // Replace with your API base URL
});
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;