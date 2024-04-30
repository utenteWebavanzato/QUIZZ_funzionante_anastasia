import { Link } from "react-router-dom";
export default function navbar () {
    return <>
    <p>La mia navbar</p>
    <ul>
        <li>
            <Link to="/quiz"> quiz </Link>
        </li>
        <li>
            <Link to="/dashboard"> dashboard </Link>
        </li>
    </ul>
</>

}