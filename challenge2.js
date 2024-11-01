let React = require('react')
// let us know who your three favorite codewarriors are!
// mantain this format, but choose any three users you want:
// <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>
var myHeader = <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>

var CodewarsLink = React.createClass({
  render: function() {
    return (
      
    <a href={ `http://www.codewars.com/users/${this.props.user}`}
    
    key={this.props.user}>
    {this.props.user}
    
    
    </a>
    
  );
  
    // a link to the user's profile!
  }
});

var Leaderboard = ({ leaders }) => {
    return (
        <div>
            {leaders.map((user) => (
                <CodewarsLink user={user} key={user} />
            ))}
        </div>
    );
};

// Main App component
const App = () => {
    const leaders = ['Sch3lp', 'nplus', 'noLan', 'jhoffner', 'OverZealous'];

    return (
        <div>
            {myHeader}
            <Leaderboard leaders={leaders} />
        </div>
    );
};

