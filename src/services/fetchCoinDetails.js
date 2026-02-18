import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinDetails(id ) {

    try {

        const response = await axiosInstance.get(`/coins/${id}`);


        return response.data;
    }
    catch (error) {
        console.error("Error fetching coin details:", error);
        return null;
        // throw error;
    }


}