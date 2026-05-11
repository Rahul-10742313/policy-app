import { PolicyCard } from "../components/PolicyCard";
import { policies } from "../policies";

const PolicyPage = () => {
    return <li className="bg-[#d4d9e3] px-20">
        {
            policies.map((policy, index) => {
                console.log(index);
                return <ul key={index} className={index == 0 ? "pt-16 pb-8 px-16" : "px-16 py-8"}>
                    <PolicyCard policy={policy}></PolicyCard>
                </ul>
            })
        }
    </li>
}

export default PolicyPage;