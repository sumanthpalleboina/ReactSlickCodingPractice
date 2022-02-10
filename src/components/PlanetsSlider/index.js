import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import {
  PlanetsSliderContainer,
  ResponsiveContainer,
  PlanetsHeader,
} from './styledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <PlanetsSliderContainer data-testid="planets">
      <PlanetsHeader>PLANETS</PlanetsHeader>
      <ResponsiveContainer>
        <Slider {...settings}>
          {planetsList.map(eachPlanet => (
            <PlanetItem key={eachPlanet.id} planet={eachPlanet} />
          ))}
        </Slider>
      </ResponsiveContainer>
    </PlanetsSliderContainer>
  )
}
export default PlanetsSlider
