var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

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
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(city).then(function(temp){
      // NOTE: 'this' binding does not work in this function, so need to define it outside
      that.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
      errorMessage: e.message});
    });
  },

  render: function(){
    // var city = this.state.city;
    // var message = this.state.temp;
    var {isLoading, city, temp, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather....</h3>;
      } else if (city && location) {
        return <WeatherMessage city={city} temp={temp} />;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <div><WeatherForm updatedCityName = {this.handleNewCity}/></div>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
