const Footer = () => {
  return (
    <footer className="w-full py-8 mt-8">
      <div 
        className="w-full h-px mb-6"
        style={{
          background: 'linear-gradient(to right, orange, #a770ad)'
        }}
      />
      <div className="text-center space-y-2 mt-7">
      <p className="text-lg font-semibold font-mono">
          Created by{' '}
          <span 
            className="italic"
            style={{
              background: 'linear-gradient(to right, orange, #a770ad)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Akhmadillo Mamirov
          </span>
        </p>
        <p className="text-sm text-white font-medium font-mono">
          Last updated: Sep 20, 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
