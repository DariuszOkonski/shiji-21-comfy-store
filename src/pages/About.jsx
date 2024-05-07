import React from 'react';

const About = () => {
  return (
    <React.Fragment>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>

      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        labore ipsam totam veniam. Neque illum aliquid nesciunt! Ipsum possimus
        maxime non sint, accusamus adipisci facilis aut distinctio et iste
        voluptatum soluta quasi vero nihil deserunt, sapiente eos velit tempora.
        Omnis!
      </p>
    </React.Fragment>
  );
};

export default About;
