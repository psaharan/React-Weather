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
    <p>The weather of {city} is {temp}</p>
  );
};

module.exports = WeatherMessage;
