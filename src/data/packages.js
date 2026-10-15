import fairyMeadows from '../assets/images/fairy-meadows.jpg';
import gwadar from '../assets/images/gwadar.jpg';
import hunza from '../assets/images/hunza.jpg';
import lahore from '../assets/images/lahore.jpg';
import murree from '../assets/images/murree.jpg';
import skardu from '../assets/images/skardu.jpg';

export const packages = [
  {
    id: 1, title: 'Hunza Heritage Escape', destination: 'Hunza Valley', category: 'Mountain',
    days: 6, price: 85000, rating: 4.8, image: hunza, alt: 'Mountain valley in Hunza',
    itinerary: [
      'Day 1: Arrival in Gilgit and drive to Karimabad',
      'Day 2: Baltit Fort and Altit Fort visit',
      'Day 3: Attabad Lake boat ride',
      'Day 4: Passu Cones and Hussaini suspension bridge',
      'Day 5-6: Free exploring and return',
    ],
    inclusions: ['Hotel stay', 'Breakfast and dinner', 'Private van with driver', 'Local guide'],
  },
  {
    id: 2, title: 'Skardu Lakes Journey', destination: 'Skardu', category: 'Mountain',
    days: 7, price: 98000, rating: 4.7, image: skardu, alt: 'Landscape near Skardu',
    itinerary: [
      'Day 1: Flight to Skardu',
      'Day 2: Shangrila Resort and Lower Kachura Lake',
      'Day 3: Shigar Fort and old town',
      'Day 4: Cold desert and Katpana dunes',
      'Day 5-7: Deosai Plains and return',
    ],
    inclusions: ['Hotel stay', 'All meals', 'Jeep transport', 'Entry tickets'],
  },
  {
    id: 3, title: 'Gwadar Sunset Weekend', destination: 'Gwadar', category: 'Beach',
    days: 3, price: 45000, rating: 4.5, image: gwadar, alt: 'Coastline at Gwadar',
    itinerary: [
      'Day 1: Arrival and Padi Zirr beach',
      'Day 2: Hammerhead viewpoint and fishing harbour',
      'Day 3: Sunrise walk and departure',
    ],
    inclusions: ['Beach hotel', 'Breakfast', 'Airport pickup', 'Boat ride'],
  },
  {
    id: 4, title: 'Lahore Culture Trail', destination: 'Lahore', category: 'City',
    days: 3, price: 32000, rating: 4.6, image: lahore, alt: 'Historic city of Lahore',
    itinerary: [
      'Day 1: Badshahi Mosque and Lahore Fort',
      'Day 2: Walled City and Food Street dinner',
      'Day 3: Shalimar Gardens and Wagah Border ceremony',
    ],
    inclusions: ['Hotel stay', 'Breakfast', 'City transport', 'Heritage guide'],
  },
  {
    id: 5, title: 'Fairy Meadows Trek', destination: 'Fairy Meadows', category: 'Adventure',
    days: 4, price: 55000, rating: 4.9, image: fairyMeadows, alt: 'Green meadow near Nanga Parbat',
    itinerary: [
      'Day 1: Drive to Raikot Bridge',
      'Day 2: Jeep ride and trek to Fairy Meadows',
      'Day 3: Hike to Nanga Parbat base camp viewpoint',
      'Day 4: Descent and return',
    ],
    inclusions: ['Camping or huts', 'All meals', 'Jeep ride', 'Trek guide'],
  },
  {
    id: 6, title: 'Murree Pine Retreat', destination: 'Murree', category: 'Mountain',
    days: 2, price: 28000, rating: 4.4, image: murree, alt: 'Pine hills of Murree',
    itinerary: [
      'Day 1: Drive from Islamabad, Mall Road and Pindi Point',
      'Day 2: Patriata chairlift and return',
    ],
    inclusions: ['Hotel stay', 'Breakfast', 'Transport', 'Chairlift tickets'],
  },
];