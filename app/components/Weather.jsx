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
        isLoading: false
      }
  },

  handleNewCity: function(city) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      city: undefined,
      temp: undefined
    });

    var that = this;

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

componentDidMount: function() {
    // the prop of the rendered component is location which has a query for city
     var city = this.props.location.query.city;

     if (city && city.length >0) {
       this.handleNewCity(city);
       // console.log("Window.location.hash is - " + window.location.hash);
       window.location.hash = '#/';
     }
},

// componentWillMount: function() {
//   this.setState({
//     city: undefined,
//     temp: undefined,
//     isLoading: false
//   });
// },

componentWillReceiveProps: function(newProps) {
  // console.log("this.props.location.query.city << " + this.props.location.query.city + "newProps.props.location.query.city << " + newProps.props.location.query.city);
  var city = newProps.location.query.city;

  if (city && city.length >0) {
    this.handleNewCity(city);
    // console.log("Window.location.hash is - " + window.location.hash);
    window.location.hash = '#/';
  }
},
  render: function(){
    // var city = this.state.city;
    // var message = this.state.temp;
    var {isLoading, city, temp, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather....</h3>;
      } else if (location && city) {
        // location is the whole url that is searched!
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
