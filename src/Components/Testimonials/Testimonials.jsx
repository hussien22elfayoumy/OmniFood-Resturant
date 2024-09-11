import daveImage from '../../assets/img/customers/dave.jpg';
import benImage from '../../assets/img/customers/ben.jpg';
import steveImage from '../../assets/img/customers/steve.jpg';
import hannahImage from '../../assets/img/customers/hannah.jpg';

import gallery1 from '../../assets/img/gallery/gallery-1.jpg';
import gallery2 from '../../assets/img/gallery/gallery-2.jpg';
import gallery3 from '../../assets/img/gallery/gallery-3.jpg';
import gallery4 from '../../assets/img/gallery/gallery-4.jpg';
import gallery5 from '../../assets/img/gallery/gallery-5.jpg';
import gallery6 from '../../assets/img/gallery/gallery-6.jpg';
import gallery7 from '../../assets/img/gallery/gallery-7.jpg';
import gallery8 from '../../assets/img/gallery/gallery-8.jpg';
import gallery9 from '../../assets/img/gallery/gallery-9.jpg';
import gallery10 from '../../assets/img/gallery/gallery-10.jpg';
import gallery11 from '../../assets/img/gallery/gallery-11.jpg';
import gallery12 from '../../assets/img/gallery/gallery-12.jpg';

const Testimonials = () => {
  return (
    <section className="bg-orange-50 py-32" id="testimonials">
      <div className="container mx-auto px-8">
        <div className="lg:flex lg:justify-between lg:items-start">
          {/* Testimonials Section */}
          <div className="lg:w-1/2 lg:pr-12">
            <p className="text-xl uppercase font-semibold text-orange-600 mb-6">
              Testimonials
            </p>
            <h2 className="text-4xl font-bold mb-10 text-gray-900">
              Once you try it, you can&apos;t go back
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Testimonial 1 */}
              <figure>
                <img
                  className="w-16 h-16 rounded-full border-4 border-orange-500 mb-6"
                  src={daveImage}
                  alt="Dave Bryson"
                />
                <blockquote className="text-gray-700 mb-4 text-lg">
                  Inexpensive, healthy, and great-tasting meals, without even
                  having to order manually! It feels truly magical.
                </blockquote>
                <p className="text-sm text-gray-500">&mdash; Dave Bryson</p>
              </figure>

              {/* Testimonial 2 */}
              <figure>
                <img
                  className="w-16 h-16 rounded-full border-4 border-orange-500 mb-6"
                  src={benImage}
                  alt="Ben Hadley"
                />
                <blockquote className="text-gray-700 mb-4 text-lg">
                  The AI algorithm is crazy good, it chooses the right meals for
                  me every time. It&apos;s amazing not to worry about food
                  anymore!
                </blockquote>
                <p className="text-sm text-gray-500">&mdash; Ben Hadley</p>
              </figure>

              {/* Testimonial 3 */}
              <figure>
                <img
                  className="w-16 h-16 rounded-full border-4 border-orange-500 mb-6"
                  src={steveImage}
                  alt="Steve Miller"
                />
                <blockquote className="text-gray-700 mb-4 text-lg">
                  Omnifood is a life saver! I just started a company, so
                  there&apos;s no time for cooking. I couldn&apos;t live without
                  my daily meals now!
                </blockquote>
                <p className="text-sm text-gray-500">&mdash; Steve Miller</p>
              </figure>

              {/* Testimonial 4 */}
              <figure>
                <img
                  className="w-16 h-16 rounded-full border-4 border-orange-500 mb-6"
                  src={hannahImage}
                  alt="Hannah Smith"
                />
                <blockquote className="text-gray-700 mb-4 text-lg">
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
            <div className="grid grid-cols-3 gap-4">
              {[
                gallery1,
                gallery2,
                gallery3,
                gallery4,
                gallery5,
                gallery6,
                gallery7,
                gallery8,
                gallery9,
                gallery10,
                gallery11,
                gallery12,
              ].map((src, index) => (
                <img
                  key={index}
                  className="w-full h-40 object-cover rounded-lg"
                  src={src}
                  alt={`Gallery ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
