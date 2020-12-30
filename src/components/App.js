import React, {useState} from 'react'

const App = () => {
    
    const [sliderValues, setSliderValue] = useState({
        sliderValue1: "10",
        sliderValue2: "20",
        sliderValue3: "30",
        sliderValue4: "40"
    });

    const handleSliderValues = (e) => {
        setSliderValue({
            ...sliderValues,
            [e.target.name]: e.target.value
        })
    }

    const styles = {
        borderRadius: `${sliderValues.sliderValue1}% ${sliderValues.sliderValue2}% ${sliderValues.sliderValue3}% ${sliderValues.sliderValue4}%`
    }


    return (
        <div>
            <div className="center-text margin-bottom-header">
                <h1>Border Radius Previewer! 🤓</h1>
            </div>
            <div className="wrapper ">
                <div className="center-element margin-bottom-3">
                    <div style={styles} className="content-width border-radius-element"></div>
                </div>
                <div className="center-element margin-botton-3">
                    <div className="border-radius-values">
                        border-radius: {sliderValues.sliderValue1}% {sliderValues.sliderValue2}% {sliderValues.sliderValue3}% {sliderValues.sliderValue4}% 
                        </div>
                </div>
                <div className="center-element">
                    <div className="sliders">
                        <input
                            type="range"
                            name="sliderValue1"
                            min="0"
                            max="100"
                            value={sliderValues.sliderValue1}
                            className="slider-1"
                            onChange={handleSliderValues} />
                        <input
                            type="range"
                            name="sliderValue2"
                            min="0"
                            max="100"
                            value={sliderValues.sliderValue2}
                            className="slider-2"
                            onChange={handleSliderValues}
                        />
                        <input
                            type="range"
                            name="sliderValue3"
                            min="0"
                            max="100"
                            value={sliderValues.sliderValue3}
                            onChange={handleSliderValues}
                            className="slider-3" />
                        <input
                            type="range"
                            name="sliderValue4"
                            min="0"
                            max="100"
                            value={sliderValues.sliderValue4}
                            onChange={handleSliderValues}
                            className="slider-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
