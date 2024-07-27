import axios from "axios";
const Api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});
const ApiJson = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});
//configurations for axios
const config = {
    headers: {
        "authorization": `Bearer ${localStorage.getItem("token")}`,
    },
};

export const loginApi = (data) => ApiJson.post("/api/users/login", data);
export const registerApi = (data) => ApiJson.post("/api/users/register", data);
// ------------------------------Property Type API ------------------------------
export const getPropertyTypes = () => Api.get("/api/propertytypes");
export const addPropertyType = (data) => ApiJson.post("/api/propertytypes/add", data, config);

// ------------------------------Countrie Type API ------------------------------
export const getAllCountriesApi = () => ApiJson.get("/api/countries");
export const getCountryByIdApi = (id) => ApiJson.get(`/api/countries/${id}`);
export const addCountryApi = (data) => ApiJson.post("/api/countries/add", data, config);
export const updateCountryApi = (id, data) => ApiJson.put(`/api/countries/update/${id}`, data, config);

// ------------------------------State Type API ------------------------------
export const getAllStatesApi = () => ApiJson.get("/api/states");
export const getStateByIdApi = (id) => ApiJson.get(`/api/states/${id}`);
export const addStateApi = (data) => ApiJson.post("/api/states/add", data, config);
export const updateStateApi = (id, data) => ApiJson.put(`/api/states/update/${id}`, data, config);

// ------------------------------Cities Type API ------------------------------
export const getAllCitiesApi = () => ApiJson.get("/api/cities");
export const getCityByIdApi = (id) => ApiJson.get(`/api/cities/${id}`);
export const addCityApi = (data) => ApiJson.post("/api/cities/add", data, config);
export const updateCityApi = (id, data) => ApiJson.put(`/api/cities/update/${id}`, data, config);

// Property API
export const getAllPropertiesApi = () => ApiJson.get("/api/properties");
export const getPropertyByIdApi = (id) => ApiJson.get(`/api/properties/${id}`);
export const addPropertyApi = (data) => Api.post("/api/properties/add", data, config);
export const updatePropertyApi = (id, data) => Api.put(`/api/properties/update/${id}`, data, config);
export const getPropertiesByUserId = (id) => Api.get(`/api/properties/users/${id}/properties`);
