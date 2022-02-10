import {
  PlanetContainer,
  PlanetImage,
  PlanetName,
  PlanetDescribe,
} from './styledComponents'

const PlanetItem = props => {
  const {planet} = props
  const {imageUrl, name, description} = planet
  return (
    <PlanetContainer>
      <PlanetImage src={imageUrl} alt={`planet ${name}`} />
      <PlanetName>{name}</PlanetName>
      <PlanetDescribe>{description}</PlanetDescribe>
    </PlanetContainer>
  )
}

export default PlanetItem
