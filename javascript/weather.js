class WeatherService {
    constructor() {
        this.apiKey = '0daa2dee4953447ba8c74609242711';
        this.baseUrl = 'https://api.weatherapi.com/v1/current.json';
    }

    async getWeatherByLocation(latitude, longitude) {
        try {
            const response = await fetch(
                `${this.baseUrl}?key=${this.apiKey}&q=${latitude},${longitude}&lang=zh`
            );
            const data = await response.json();
            
            if (data.error) {
                throw new Error(data.error.message);
            }

            return this.formatWeatherData(data);
        } catch (error) {
            console.error('獲取天氣數據失敗:', error);
            throw error;
        }
    }

    formatWeatherData(data) {
        try {
            let iconUrl = data.current?.condition?.icon || '';
            if (iconUrl && iconUrl.startsWith('//')) {
                iconUrl = 'https:' + iconUrl;
            }

            return {
                location: data.location?.name || '未知位置',
                temperature: Math.round(data.current?.temp_c) || '--',
                description: data.current?.condition?.text || '無法獲取天氣描述',
                icon: iconUrl,
                humidity: data.current?.humidity || '--',
                windSpeed: data.current?.wind_kph || '--'
            };
        } catch (error) {
            console.error('格式化天氣數據失敗:', error);
            return {
                location: '數據錯誤',
                temperature: '--',
                description: '無法獲取天氣資訊',
                icon: '',
                humidity: '--',
                windSpeed: '--'
            };
        }
    }
}

// 初始化天氣顯示
document.addEventListener('DOMContentLoaded', () => {
    const weatherService = new WeatherService();
    const refreshButton = document.getElementById('refreshWeather');

    async function updateWeather() {
        try {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        try {
                            const { latitude, longitude } = position.coords;
                            const weatherData = await weatherService.getWeatherByLocation(latitude, longitude);
                            
                            // 更新 UI
                            document.getElementById('locationName').textContent = weatherData.location;
                            document.getElementById('temperature').textContent = weatherData.temperature;
                            document.getElementById('weatherDescription').textContent = weatherData.description;
                            if (weatherData.icon) {
                                document.getElementById('weatherIcon').src = weatherData.icon;
                            }
                            document.getElementById('humidity').textContent = `${weatherData.humidity}%`;
                            document.getElementById('windSpeed').textContent = `${weatherData.windSpeed} m/s`;
                        } catch (error) {
                            console.error('處理天氣數據失敗:', error);
                            document.getElementById('locationName').textContent = '數據獲取失敗';
                            document.getElementById('weatherDescription').textContent = '請稍後再試';
                        }
                    },
                    (error) => {
                        console.error('獲取位置失敗:', error);
                        document.getElementById('locationName').textContent = '無法獲取位置';
                        document.getElementById('weatherDescription').textContent = '請允許位置存取權限';
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0
                    }
                );
            } else {
                throw new Error('瀏覽器不支持地理位置功能');
            }
        } catch (error) {
            console.error('更新天氣失敗:', error);
            document.getElementById('locationName').textContent = '無法獲取位置';
            document.getElementById('weatherDescription').textContent = '請確認瀏覽器支援地理位置功能';
        }
    }

    // 初始更新天氣
    updateWeather();

    // 點擊刷新按鈕更新天氣
    refreshButton.addEventListener('click', () => {
        document.getElementById('locationName').textContent = '更新中...';
        document.getElementById('weatherDescription').textContent = '載入中...';
        updateWeather();
    });

    // 每30分鐘自動更新一次天氣
    setInterval(updateWeather, 30 * 60 * 1000);
}); 