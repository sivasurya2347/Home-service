const services = [
  {
    Service: 'Handyman',
    description: 'A versatile professional skilled in a wide range of repair and maintenance tasks around the home.',
    cloudImageUrl: 'https://images.pexels.com/photos/2387625/pexels-photo-2387625.jpeg'
  },
  {
    Service: 'Plumber',
    description: 'Specializes in installing and repairing pipes, fixtures, and other plumbing systems to ensure proper water flow and sanitation.',
    cloudImageUrl: 'https://images.pexels.com/photos/3579246/pexels-photo-3579246.jpeg'
  },
  {
    Service: 'Electrician',
    description: 'Expert in electrical systems, responsible for installing, maintaining, and repairing electrical wiring and equipment.',
    cloudImageUrl: 'https://images.pexels.com/photos/1068471/pexels-photo-1068471.jpeg'
  },
  {
    Service: 'HVAC Technician',
    description: 'Provides services related to heating, ventilation, and air conditioning systems to ensure climate control and air quality.',
    cloudImageUrl: 'https://images.pexels.com/photos/4144225/pexels-photo-4144225.jpeg'
  },
  {
    Service: 'Painter',
    description: 'Specializes in applying paint, varnishes, and finishes to surfaces, including walls, ceilings, and woodwork.',
    cloudImageUrl: 'https://images.pexels.com/photos/2905535/pexels-photo-2905535.jpeg'
  },
  {
    Service: 'Landscaper',
    description: 'Focuses on the design, installation, and maintenance of outdoor spaces, including gardens, lawns, and hardscapes.',
    cloudImageUrl: 'https://images.pexels.com/photos/1336582/pexels-photo-1336582.jpeg'
  },
  {
    Service: 'Carpenter',
    description: 'Skilled in working with wood to build, install, and repair structures, furniture, and fixtures.',
    cloudImageUrl: 'https://images.pexels.com/photos/3586690/pexels-photo-3586690.jpeg'
  },
  {
    Service: 'Homecleaner',
    description: 'Provides professional cleaning services to maintain the cleanliness and hygiene of residential spaces.',
    cloudImageUrl: 'https://images.pexels.com/photos/4144226/pexels-photo-4144226.jpeg'
  }
];

const Cards = () => {
  return (
    <div className="grid-container">
        {services.map((service, index) => (
          <div key={index} className="card">
            <img src={service.cloudImageUrl} alt={service.Service} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{service.Service}</h2>
              <p className="card-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Cards