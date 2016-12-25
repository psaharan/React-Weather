var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Navigation = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h2>Navigation menu</h2>
//         <div><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></div>
//         <div><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></div>
//         <div><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></div>
//       </div>
//     );
//   }
// });

var Navigation = () => {
  return(
    <div>
      <h2>Navigation menu</h2>
      <div><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></div>
      <div><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></div>
      <div><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></div>
    </div>
  );
};

module.exports = Navigation;
