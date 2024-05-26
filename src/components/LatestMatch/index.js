// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props

  const {
    completingTeam,
    date,
    venue,
    result,
    completeTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="l-container">
      <h1 className="heading">Latest Matches</h1>
      <div className="card">
        <div className="logo-container">
          <div className="latest-match-details-1">
            <p className="team-name">{completingTeam}</p>
            <p className="date">{date}</p>
            <p className="p">{venue}</p>
            <p className="p">{result}</p>
          </div>
          <img
            src={completeTeamLogo}
            alt={`latest match ${completingTeam}`}
            className="img"
          />
        </div>
        <hr className="separator" />
        <div className="latest-match-details-2">
          <p className="label">First Innings</p>
          <p className="value">{firstInnings}</p>
          <p className="label">Second Innings</p>
          <p className="value">{secondInnings}</p>
          <p className="label">Man of The Match</p>
          <p className="value">{manOfTheMatch}</p>
          <p className="label">Umpires</p>
          <p className="value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
