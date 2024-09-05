import React from 'react';
import daveImage from '../assets/img/customers/dave.jpg';
import benImage from '../assets/img/customers/ben.jpg';
import steveImage from '../assets/img/customers/steve.jpg';
import hannahImage from '../assets/img/customers/hannah.jpg';

import gallery1 from '../assets/img/gallery/gallery-1.jpg';
import gallery2 from '../assets/img/gallery/gallery-2.jpg';
import gallery3 from '../assets/img/gallery/gallery-3.jpg';
import gallery4 from '../assets/img/gallery/gallery-4.jpg';
import gallery5 from '../assets/img/gallery/gallery-5.jpg';
import gallery6 from '../assets/img/gallery/gallery-6.jpg';
import gallery7 from '../assets/img/gallery/gallery-7.jpg';
import gallery8 from '../assets/img/gallery/gallery-8.jpg';
import gallery9 from '../assets/img/gallery/gallery-9.jpg';
import gallery10 from '../assets/img/gallery/gallery-10.jpg';
import gallery11 from '../assets/img/gallery/gallery-11.jpg';
import gallery12 from '../assets/img/gallery/gallery-12.jpg';

const Testimonials = () => {
  return (
    <section className="bg-orange-50 py-24" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="lg:flex lg:justify-between lg:items-start">
          <div className="lg:w-1/2 lg:pr-12">
            <p className="text-lg uppercase font-semibold text-orange-600 mb-4">
              Testimonials
            </p>
            <h2 className="text-4xl font-bold mb-12 text-gray-900">
              Once you try it, you can't go back
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <figure>
                <img
                  className="w-12 h-12 rounded-full border-2 border-orange-500 mb-4"
                  src={daveImage}
                  alt="Dave Bryson"
                />
                <blockquote className="text-gray-700 mb-4">
                  Inexpensive, healthy, and great-tasting meals, without even
                  having to order manually! It feels truly magical.
                </blockquote>
                <p className="text-sm text-gray-500">&mdash; Dave Bryson</p>
              </figure>

              {/* Testimonial 2 */}
              <figure>
                <img
                  className="w-12 h-12 rounded-full border-2 border-orange-500 mb-4"
                  src={benImage}
                  alt="Ben Hadley"
                />
                <blockquote className="text-gray-700 mb-4">
                  The AI algorithm is crazy good, it chooses the right meals for
                  me every time. It's amazing not to worry about food anymore!
                </blockquote>
                <p className="text-sm text-gray-500">&mdash; Ben Hadley</p>
              </figure>

              {/* Testimonial 3 */}
              <figure>
                <img
                  className="w-12 h-12 rounded-full border-2 border-orange-500 mb-4"
                  src={steveImage}
                  alt="Steve Miller"
                />
                <blockquote className="text-gray-700 mb-4">
                  Omnifood is a life saver! I just started a company, so there's
                  no time for cooking. I couldn't live without my daily meals
                  now!
                </blockquote>
                <p className="text-sm text-gray-500">&mdash; Steve Miller</p>
              </figure>

              {/* Testimonial 4 */}
              <figure>
                <img
                  className="w-12 h-12 rounded-full border-2 border-orange-500 mb-4"
                  src={hannahImage}
                  alt="Hannah Smith"
                />
                <blockquote className="text-gray-700 mb-4">
                  I got Omnifood for the whole family, and it frees up so much
                  time! Plus, everything is organic and vegan and without
                  plastic.
                </blockquote>
                <p className="text-sm text-gray-500">&mdash; Hannah Smith</p>
              </figure>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="grid grid-cols-3 gap-2">
              <img
                className="w-full h-32 object-cover"
                src={gallery1}
                alt="Gallery 1"
              />
              <img
                className="w-full h-32 object-cover"
                src={gallery2}
                alt="Gallery 2"
              />
              <img
                className="w-full h-32 object-cover"
                src={gallery3}
                alt="Gallery 3"
              />
              <img
                className="w-full h-32 object-cover"
                src={gallery4}
                alt="Gallery 4"
              />
              <img
                className="w-full h-32 object-cover"
                src={gallery5}
                alt="Gallery 5"
              />
              <img
                className="w-full h-32 object-cover"
                src={gallery6}
                alt="Gallery 6"
              />
              <img
                className="w-full h-32 object-cover"
                src={gallery7}
                alt="Gallery 7"
              />
              <img
                className="w-full h-32 object-cover"
                src={gallery8}
                alt="Gallery 8"
              />
              <img
                className="w-full h-32 object-cover"
                src={gallery9}
                alt="Gallery 9"
              />
              <img
                className="w-full h-32 object-cover"
                src={gallery10}
                alt="Gallery 10"
              />
              <img
                className="w-full h-32 object-cover"
                src={gallery11}
                alt="Gallery 11"
              />
              <img
                className="w-full h-32 object-cover"
                src={gallery12}
                alt="Gallery 12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
