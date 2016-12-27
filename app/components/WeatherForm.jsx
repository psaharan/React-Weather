var React = require('react');

var WeatherForm = React.createClass ({
  getWeather: function(e){
    e.preventDefault();

    var cityName = this.refs.city.value;

    if (cityName.length > 0) {
        // Show the message by changing state
        this.refs.city.value ='';
        this.props.updatedCityName(cityName);
    }
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.getWeather}>
          <input type="text" placeholder="Enter city name" ref="city"></input>
          <button className="hollow button expanded">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
