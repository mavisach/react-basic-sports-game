
class Team extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            logo: props.logo,
            shots: 0,
            score: 0,
        }
    }

    shotHandler = () => {
        let score = this.state.score
        if (Math.random() > 0.5) {
            score += 1
        }

        this.setState((state, props) => ({
            shots: state.shots + 1,
            score
        }))
    }

    render() {
        let shotPercentageDiv

        if (this.state.shots) {
            const shotPercentage = Math.round((this.state.score / this.state.shots) * 100)
            shotPercentageDiv = (
                <div>
                    <strong>Shooting %:</strong>{shotPercentage}
                </div>
            )

        }

        return (
            <div className="Team">
                <h2>{this.props.name}</h2>

                <div className="identity">
                    <img src={this.props.logo} alt={this.props.name} width={200} />
                </div>

                <div>
                    <strong>shots:</strong> {this.state.shots}
                </div>

                <div>
                    <strong>Score:</strong> {this.state.score}
                </div>

                {shotPercentageDiv}

                <button onClick={this.shotHandler}>Shoot!</button>
            </div>
        )
    }
}


function Game(props) {
    return (
        <div className="Game">
            <h1>Welcome to {props.venue}</h1>
            <div className="stats">

                <Team
                    name={props.visitingTeam.name}
                    logo={props.visitingTeam.logoSrc}
                />

                <div className="versus">
                    <h1>VS</h1>
                </div>

                <Team
                    name={props.homeTeam.name}
                    logo={props.homeTeam.logoSrc}
                />
            </div>
        </div>
    )


}


function App(props) {
    const cats = {
        name: "Cat Power",
        logoSrc: "./assets/images/catsoccer.jpg"
    }

    const dogs = {
        name: "Dog Power",
        logoSrc: "./assets/images/dogsoccer.jpg"
    }

    const monkeys = {
        name: "Swinging Monkeys",
        logoSrc: "./assets/images/soccermonkey.jpg"
    }

    const bunnies = {
        name: "Fluffy Bunnies",
        logoSrc: "./assets/images/soccerbunny.jpg"

    }
    return (
        <div className="App">
            <Game
                venue="Fiesta 525 Gem"
                homeTeam={dogs}
                visitingTeam={cats}
            />
            <Game
                Venue="Power Arena"
                homeTeam={monkeys}
                visitingTeam={bunnies}
            />
        </div>
    )
}





ReactDOM.render(
    <App />,
    document.getElementById("root")
)