const Banner = () => {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://images.everydayhealth.com/images/healthy-living/fitness/everything-you-need-know-about-fitness-1440x810.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-neutral-content text-center w-[50%]">
    <div className="max-w-[80%]">
      <h1 className="mb-5 text-7xl font-bold">Welcome to Fitness Bazar!</h1>
      <p className="my-5 text-lg font-medium">
      Your ultimate destination for all things fitness. Discover top-quality equipment, apparel, and accessories to fuel your fitness journey. Shop now and take the first step towards a healthier, stronger you!
      </p>
      <p className="text-sm font-semibold">Thank you for choosing Fitness Bazar – your fitness journey starts here!</p>
    </div>
  </div>
</div>
    );
};

export default Banner;