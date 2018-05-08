import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 'audi',
      title: 'Audi Q6',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      category: 'Used',
      type: "Sedan",
      price: 15000,
      image: 'http://2018hybridcars.com/wp-content/uploads/2017/08/jjhh.jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }, {
      id: 'mercedes',
      title: 'Mercedes',
      owner: 'Mike TV',
      city: 'Seattle',
      category: 'Used',
      type: "Sedan",
      price: 16000,
      image: 'https://assets.mbusa.com/vcm/MB/DigitalAssets/Vehicles/Models/2018/E300W/Features/2018-E-CLASS-SEDAN-011-MCFO.jpg',
      description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
    }, {
      id: 'honda',
      title: 'Honda Civic',
      owner: 'Violet Beauregarde',
      city: 'Portland',
      category: 'Used',
      type: "Hatchback",
      price: 12000,
      image: 'https://www.carscoops.com/wp-content/uploads/2016/09/2017-honda-civic-us-pricing-14.jpg',
      description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
    }];
  }
});
