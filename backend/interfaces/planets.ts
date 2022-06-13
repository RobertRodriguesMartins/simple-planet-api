interface Planets {
  basicDetails: Array<{mass: string, volume: string}>,
  description: string,
  id: number
  imgSrc: Array<{img: string, imgDescription: string}>
  key: string,
  name: string,
  planetOrder: string,
  source: string,
  wikiLink: string
}

export default Planets;