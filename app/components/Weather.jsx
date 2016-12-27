var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  // getDefaultProps: function(){
  //   return {
  //     city: "Helsinki",
  //     temp: 88
  //   }
  // },

  getInitialState: function() {
      return {
        // city: 'Helsinki',
        // temp: 5
        isLoading: false
      }
  },

  handleNewCity: function(city) {
    // this.setState({
    //   city: city,
    //   temp: 23
    // });
    var that = this;

    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(city).then(function(temp){
      // NOTE: 'this' binding does not work in this function, so need to define it outside
      that.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },

  render: function(){
    // var city = this.state.city;
    // var message = this.state.temp;
    var {isLoading, city, temp} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather....</h3>;
      } else if (city && location) {
        return <WeatherMessage city={city} temp={temp} />;
      }
    }
    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <div><WeatherForm updatedCityName = {this.handleNewCity}/></div>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
