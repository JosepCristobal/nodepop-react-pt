

const filterByName = (advert, filterSearh) => {
    if (!filterSearh.name)return true;

    return advert.name.toLowerCase().includes(filterSearh.name.toLowerCase()) ;
};

const filterBySale= (advert, filterSearh) => {


    
export const filtersAdverts = (adverts, filterSearh) => {
    return adverts.filter (advert => {
        return (
            filterByName(advert, filterSearh)          
        );
    });
  };

