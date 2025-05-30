function analyzeCountries(data) {
  const countries=[...data];
  const totalCountries=countries.length;
  const totalPopulation=countries.reduce((sum,c)=> sum +c.population,0);
  const averagePopulation=Math.round(totalPopulation/totalCountries);
  const top5MostPopulated=[...countries]
  .sort((a,b)=> b.population-a.population)
  .slice(0,5)
  .map (c => c.name);
  const populationByRegion=countries.reduce((acc,c)=>{
    acc[c.region]=(acc[c.region]|| 0)+c.population;
    return acc;
  },{});
  const highestDensityCountries=countries
  .map(c => ({
    name:c.name,
    density:Math.round(c.population/c.area)
  }))
  .sort((a,b)=>b.density-a.density)
  .slice(0,3);
  const smallCountries=countries
  .filter(c => c.area<500000)
  .map(c =>c.name);
  return{
    totalCountries,
    averagePopulation,
    top5MostPopulated,
    populationByRegion,
    highestDensityCountries,
    smallCountries
  };
  }