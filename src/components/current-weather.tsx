import type { GeocodingResponse, WeatherData } from "@/api/types"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

interface CurrentWeatherProps{
    data:WeatherData,
    locationName?: GeocodingResponse,
}

const CurrentWeather = ({data, locationName}: CurrentWeatherProps)=> {

    const {
        weather: [currentWeather],
        main: {temp, feels_like, temp_min, temp_max, humidity},
        wind:{speed},
    } = data;

    const formatTemp = (temp:number) => `${Math.round(temp)}°` 

    console.log(locationName?.name);


    return (
        <Card className="overflow-hidden">
            <CardContent className="p-6 ">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex items-end gap-1">
                                <h2 className="text-2xl font-bold tracking-tighter">{locationName?.name}</h2>
                                {locationName?.state && (
                                <span className="text-muted-foreground">
                                    , {locationName.state}
                                </span>
                                )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {locationName?.country}
                            </p>

                            <div className="flex items-center gap-2">
                                <p className="text-7xl font-bold tracking-tighter">{formatTemp(temp)}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">
                                    Feels Like{formatTemp(feels_like)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CurrentWeather
