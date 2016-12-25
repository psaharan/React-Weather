var React = require('react');
var Navigation = require('Navigation');

// var Main = React.createClass({
//   render: function() {
//     return(
//       <div>
//         <Navigation />
//         <h2>Get Weather</h2>
//         {this.props.children}
//       </div>
//     );
//   }
//
// });

var Main = (props) => {
  return (<div>
    <Navigation />
    <h2>Get Weather</h2>
    {props.children}
  </div>
  )
};

module.exports = Main;
