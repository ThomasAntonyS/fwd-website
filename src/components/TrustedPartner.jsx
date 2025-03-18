'use client';
import Image from 'next/image';

import Patner1 from '../assests/Patners_1.webp';
import Patner2 from '../assests/Patners_2.jpg';
import Patner3 from '../assests/Patners_3.png';
import Patner4 from '../assests/Patners_4.jpg';
import Patner5 from '../assests/Patners_5.jpg';
import Patner6 from '../assests/Patners_6.webp';
import Patner7 from '../assests/Patners_7.png';

const partners = [
  { name: 'Partner 1', logo: Patner1 },
  { name: 'Partner 2', logo: Patner2 },
  { name: 'Partner 3', logo: Patner3 },
  { name: 'Hettich', logo: Patner4 },
  { name: 'Greenlam', logo: Patner5 },
  { name: 'Partner 6', logo: Patner6 },
  { name: 'Partner 7', logo: Patner7 },
];

export default function TrustedPatner() {


  return (
    <div className="bg-white">
      {/* Partners Section */}
      <section className="text-center bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-black">Our trusted partners</h2>
            <p className="text-black">Winning collaborations that produce winning designs.</p>
          </div>
          
          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
            {partners.map((partner, index) => (
              <div key={index} className="p-2 flex justify-center">
                <Image src={partner.logo} alt={partner.name} width={100} height={40} className="aspect-video object-contain mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
