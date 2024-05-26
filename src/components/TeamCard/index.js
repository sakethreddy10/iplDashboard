// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails

  return (
    <li className="item">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={name} className="img" />
        <p className="name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
