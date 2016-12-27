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
    <div className="row">
      <div className="columns medium-6 large-4 small-centered">
          {props.children}
      </div>
    </div>
  </div>
  )
};

module.exports = Main;
