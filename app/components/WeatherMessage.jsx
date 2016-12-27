var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var {city, temp} = this.props;
//     return(
//       <p>The weather of {city} is {temp}</p>
//     );
//   }
// });

var WeatherMessage = ({city, temp}) => {
  // var {city, temp} = props;
  return(
    <h3 className="text-center">The weather of {city} is {temp} degrees!</h3>
  );
};

module.exports = WeatherMessage;
