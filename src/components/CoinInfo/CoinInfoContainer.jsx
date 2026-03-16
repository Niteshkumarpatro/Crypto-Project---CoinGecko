import { useQuery } from "@tanstack/react-query";
import CoinInfo from "./CoinInfo";
import currencyStore from "../../state/store"
import { fetchCoinHistoricData } from "../../services/fetchCoinHistoricData";
import PageLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";
import { useState } from "react";

function CoinInfoContainer({ coinId }) {
    const { currency } = currencyStore();
    const [days, setDays] = useState(7);
    const [interval, setCoinInterval] = useState('daily');


    const { data: historicData, isLoading, isError } = useQuery({
        queryKey: ["coin", coinId, currency, days, interval], queryFn: () =>
            fetchCoinHistoricData(coinId, interval, days, currency),
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,


    });

    if (isLoading) {
        return <PageLoader />
    }

    if (isError) {
        return <Alert message="Error fetching data" type="error" />
    }

    return (
        <>
            <CoinInfo
                historicData={historicData}
                setDays={setDays}
                setCoinInterval={setCoinInterval}
                days={days}
                currency={currency} />
        </>
    )

}
export default CoinInfoContainer;