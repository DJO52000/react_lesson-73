import { Link } from "react-router-dom"
import teamMembers from './teamMembers.json';

//GO AROUND REFRESH PAGE Y USE LINK
export function TeamNav() {
    return (
        <nav>
            <ul>
                {teamMembers.map((member) => (
                    <li key={member.id}>
                        <Link to={member.id}>Team - {member.name}</Link>
                    </li>
                ))}
                <li>
                    <Link to="new">New Team Member</Link>
                </li>
            </ul>
        </nav>
    )
}
