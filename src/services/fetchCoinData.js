import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinData(page = '1', currency = 'usd') {
    const perPage = 10;
    try {

        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${page}&order=market_cap_desc`);
        console.log(response);

        return response;
    }
    catch (error) {
        console.error("Error fetching coin data:", error);
        return null;
        // throw error;
    }


}