import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import PolicyCard from "../components/PolicyCard";
import { sortPolicy } from "../utilities/common";

const PolicyPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating a 1-second network delay
        setTimeout(() => {
          fetch('/policies.json') // Looking in the public folder
            .then(res => res.json())
            .then(json => {
                console.log(json);
              setData(sortPolicy(json));
              setLoading(false);
            });
        }, 1000);
      }, []);
    
    if (loading) return <p className="flex justify-center m-20">Loading...</p>;

    return <li className="bg-primary-background md:px-50">
        <Pagination 
        items={data} 
        itemsPerPage={3} 
        renderItem={(policy, index) => (
            <ul 
            key={index} 
            className={index === 0 
                ? "pt-4 pb-4 px-6 md:pt-8 md:pb-4 md:px-16" 
                : "px-6 py-4 md:px-16 md:py-4"
            }
            >
            <PolicyCard policy={policy} />
            </ul>
        )}
        />
    </li>
}

export default PolicyPage;