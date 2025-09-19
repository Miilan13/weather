// Weather API Service
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

// Validate API key is loaded
if (!API_KEY) {
  console.error('Weather API key not found. Please add VITE_WEATHER_API_KEY to your .env file');
}

class WeatherService {
  // Get current weather data
  static async getCurrentWeather(location) {
    try {
      const response = await fetch(
        `${BASE_URL}/current.json?key=${API_KEY}&q=${location}&aqi=yes`
      );
      
      if (!response.ok) {
        throw new Error(`Weather API Error: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data: data
      };
    } catch (error) {
      console.error('Error fetching current weather:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get weather forecast (3-14 days)
  static async getWeatherForecast(location, days = 7) {
    try {
      const response = await fetch(
        `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=yes&alerts=yes`
      );
      
      if (!response.ok) {
        throw new Error(`Weather API Error: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data: data
      };
    } catch (error) {
      console.error('Error fetching weather forecast:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Search locations
  static async searchLocations(query) {
    try {
      const response = await fetch(
        `${BASE_URL}/search.json?key=${API_KEY}&q=${query}`
      );
      
      if (!response.ok) {
        throw new Error(`Weather API Error: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data: data
      };
    } catch (error) {
      console.error('Error searching locations:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get weather history (last 7 days)
  static async getWeatherHistory(location, date) {
    try {
      const response = await fetch(
        `${BASE_URL}/history.json?key=${API_KEY}&q=${location}&dt=${date}`
      );
      
      if (!response.ok) {
        throw new Error(`Weather API Error: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data: data
      };
    } catch (error) {
      console.error('Error fetching weather history:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get current location weather using geolocation
  static async getCurrentLocationWeather() {
    try {
      // Check if geolocation is supported
      if (!navigator.geolocation) {
        throw new Error('Geolocation is not supported by this browser.');
      }

      // Get user's coordinates with high accuracy options
      const position = await new Promise((resolve, reject) => {
        const options = {
          enableHighAccuracy: true,
          timeout: 10000, // 10 seconds timeout
          maximumAge: 300000 // 5 minutes cache
        };
        
        navigator.geolocation.getCurrentPosition(
          resolve, 
          reject, 
          options
        );
      });

      const { latitude, longitude, accuracy } = position.coords;
      
      // Log accuracy for debugging
      console.log(`Location accuracy: ${accuracy} meters`);
      
      // Format coordinates with proper precision (6 decimal places for good accuracy)
      const lat = parseFloat(latitude.toFixed(6));
      const lng = parseFloat(longitude.toFixed(6));
      const location = `${lat},${lng}`;
      
      console.log(`Using coordinates: ${location}`);
      
      return await this.getCurrentWeather(location);
    } catch (error) {
      console.error('Error getting current location weather:', error);
      
      // Provide more specific error messages
      let errorMessage = 'Unable to get current location. ';
      
      if (error.code === 1) {
        errorMessage += 'Location access denied. Please enable location permissions.';
      } else if (error.code === 2) {
        errorMessage += 'Location information unavailable.';
      } else if (error.code === 3) {
        errorMessage += 'Location request timeout. Please try again.';
      } else {
        errorMessage += 'Please search for a city instead.';
      }
      
      return {
        success: false,
        error: errorMessage
      };
    }
  }

  // Format weather data for display
  static formatWeatherData(data) {
    if (!data || !data.current) return null;

    const { location, current } = data;
    
    return {
      location: {
        name: location.name,
        region: location.region,
        country: location.country,
        localtime: location.localtime,
        timezone: location.tz_id
      },
      current: {
        temperature: {
          celsius: current.temp_c,
          fahrenheit: current.temp_f
        },
        condition: {
          text: current.condition.text,
          icon: current.condition.icon,
          code: current.condition.code
        },
        feelsLike: {
          celsius: current.feelslike_c,
          fahrenheit: current.feelslike_f
        },
        wind: {
          speed: current.wind_kph,
          direction: current.wind_dir,
          degree: current.wind_degree
        },
        humidity: current.humidity,
        pressure: current.pressure_mb,
        visibility: current.vis_km,
        uvIndex: current.uv,
        cloudCover: current.cloud,
        lastUpdated: current.last_updated
      },
      airQuality: current.air_quality ? {
        co: current.air_quality.co,
        no2: current.air_quality.no2,
        o3: current.air_quality.o3,
        so2: current.air_quality.so2,
        pm2_5: current.air_quality.pm2_5,
        pm10: current.air_quality.pm10,
        usEpaIndex: current.air_quality['us-epa-index'],
        gbDefraIndex: current.air_quality['gb-defra-index']
      } : null
    };
  }

  // Get weather icon URL
  static getWeatherIconUrl(iconCode) {
    return `https:${iconCode}`;
  }

  // Determine weather condition severity
  static getWeatherSeverity(conditionCode) {
    // Severe weather codes
    const severeWeather = [1087, 1273, 1276, 1279, 1282]; // Thunderstorms
    const dangerousWeather = [1114, 1117, 1213, 1216, 1219, 1222, 1225, 1237, 1261, 1264]; // Heavy snow/ice
    
    if (severeWeather.includes(conditionCode)) return 'severe';
    if (dangerousWeather.includes(conditionCode)) return 'dangerous';
    if (conditionCode >= 1063 && conditionCode <= 1201) return 'moderate'; // Rain/drizzle
    return 'normal';
  }
}

export default WeatherService;