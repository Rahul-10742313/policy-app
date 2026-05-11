import { useEffect, useState } from "react";
import { PolicyCard } from "../components/PolicyCard";
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
    
    if (loading) return <p>Loading...</p>;

    return <li className="bg-[#d4d9e3] px-20">
        {
            data.map((policy, index) => {
                console.log(index);
                return <ul key={index} className={index == 0 ? "pt-8 pb-4 px-16" : "px-16 py-4"}>
                    <PolicyCard policy={policy}></PolicyCard>
                </ul>
            })
        }
    </li>
}

export default PolicyPage;