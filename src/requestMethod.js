import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmFkMTBkZWE3MTAwNzY0MTY1MzcwMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDUzMTE0NSwiZXhwIjoxNjgwNzkwMzQ1fQ.QvLmqCEGmS0Gtq-zkf_N8Dko9HGVoW1z_WWnggTwAhg";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
