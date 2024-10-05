
import BlogCard from "../BlogCard/BlogCard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import backgroundVideo from "./fitness2.mp4"; 

const HomePage = () => {
  return (
    <>
     <Navbar/>
    <div className="relative h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Profile Section */}
      <div className="absolute top-10 left-10 bg-blue-950 p-4 rounded-full flex items-center space-x-4 shadow-lg">
        <img
          src="https://randomuser.me/api/portraits/men/4.jpg"
          alt="profile"
          className="w-16 h-16 rounded-full border-4 border-white object-cover"
        />
        <div className="text-white">
          <h2 className="text-xl font-bold">Welcome!</h2>
          <p>Join my journey</p>
        </div>
      </div>
      <div className="absolute bottom-10 right-10 bg-opacity-90 bg-gray-950 p-6 rounded-lg shadow-xl max-w-lg">
        <h2 className="text-white text-lg font-bold mb-4">Featured Post</h2>
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
          alt="featured post"
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="text-white text-lg font-semibold mt-4">
          Top Hikes In Australia
        </h3>
        <p className="text-gray-400 text-sm">October 05, 2024 · 2 min read</p>
        <p className="text-gray-300 mt-2">
          Create a blog post subtitle that summarizes your post in a few short,
          punchy sentences...
        </p>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default HomePage;