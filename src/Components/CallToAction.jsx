const CallToAction = () => {
  return (
    <section className='py-12 pb-32' id='cta'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='grid grid-cols-3 bg-gradient-to-br from-orange-400 to-orange-500 shadow-xl rounded-xl overflow-hidden'>
          <div className='col-span-2 text-amber-900 p-12 pb-16'>
            <h2 className='text-4xl font-bold mb-8'>
              Get your first meal for free!
            </h2>
            <p className='text-lg mb-12 leading-relaxed'>
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <form
              className='grid grid-cols-2 gap-6'
              name='sign-up'
              method='post'
            >
              <div>
                <label
                  htmlFor='full-name'
                  className='block text-sm font-medium mb-3'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  id='full-name'
                  name='full-name'
                  placeholder='John Smith'
                  required
                  className='w-full p-3 text-lg bg-orange-50 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium mb-3'
                >
                  Email address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='me@example.com'
                  required
                  className='w-full p-3 text-lg bg-orange-50 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200'
                />
              </div>
              <div>
                <label
                  htmlFor='select-where'
                  className='block text-sm font-medium mb-3'
                >
                  Where did you hear from us?
                </label>
                <select
                  id='select-where'
                  name='select-where'
                  required
                  className='w-full p-3 text-lg bg-orange-50 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200'
                >
                  <option value=''>Please choose one option:</option>
                  <option value='friends'>Friends and family</option>
                  <option value='youtube'>YouTube video</option>
                  <option value='podcast'>Podcast</option>
                  <option value='ad'>Facebook ad</option>
                  <option value='others'>Others</option>
                </select>
              </div>
              <button className='bg-amber-900 text-orange-50 font-semibold py-3 px-6 rounded-lg hover:bg-orange-50 hover:text-amber-900 transition duration-300 self-end'>
                Sign up now
              </button>
            </form>
          </div>
          <div
            className="bg-[url('../img/eating.jpg')] bg-cover bg-center col-span-1"
            role='img'
            aria-label='woman enjoying food'
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
