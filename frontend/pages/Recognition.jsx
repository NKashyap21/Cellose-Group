import React from "react";
import Navbar from "./Navbar";

const Recognition = () => {
  const recognitions = {
    mudrika: [
      "Appointed as Dean of Alumni Relations of Indian Institute of Technology, Hyderabad in April 2022.",
      "Received prestigious “Women Excellence Award” 2022 of Science and Engineering Research Board (SERB), Department of Science and Technology, Government of India.",
      "Received “Faculty Research Excellence” award from the Indian Institute of Technology Hyderabad for the year 2021, in recognition of her outstanding research contribution (below 40 years age category).",
      "Inducted as Young Associate of the Indian National Academy of Engineering in 2020.",
      "Received Platinum Jubilee Young Scientist Award National Academy of Sciences India 2021.",
      "Received Young Engineer Award from Indian National Academy of Engineers 2020.",
    ],
    others: [
      "Urbashi Mahanta secured Excellence in Research Awards during Ph.D at IIT Hyderabad in 2022.",
      "Vikram Kishore Bharti secured First Prize in Chemical Sciences category in the Saransh, a National Level Science Communication Competition organized by INYAS.",
      "Shivakalyani Adepu received INYAS Excellence in Nano Innovation Award 2020.",
      "Divya Anand bagged the GYTI (Gandhian Young Technological Innovation) award for conducting composites, in the year 2016.",
      "Shivakalyani Adepu received BIRAC BIG grant 14th call, 2019.",
      'Shivakalyani secured "Excellence in Research award" during Ph.D at IIT Hyderabad in 2018.',
      "Shivakalyani secured GYTI (Gandhian Young Technological Innovation) award for developing a novel drug delivery coating for cardiac stent, in the year 2016.",
    ],
  };

  const tweet = {
    img: "https://people.iith.ac.in/mudrika/img/tweet1.png",
    alt: "Tweet about our lab",
  };

  const news = [
    {
      img: "https://people.iith.ac.in/mudrika/img/media%202.png",
      alt: "News 1",
    },
    {
      img: "https://people.iith.ac.in/mudrika/img/media%203.png",
      alt: "News 2",
    },
    {
      img: "https://people.iith.ac.in/mudrika/img/media%201.png",
      alt: "News 3",
    },
  ];

  const videos = [
    {
      src: "https://www.youtube.com/embed/Rs9pnopU7ME",
      title: "Video 1",
    },
    {
      src: "https://www.youtube.com/embed/PxNrbl61x4U",
      title: "Video 2",
    },
    {
      src: "https://www.youtube.com/embed/CNPEIFPRCFw",
      title: "Video 3",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="w-[90%] max-w-6xl m-auto mt-12">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#b33c00] mb-12">
          Recognition & Awards
        </h1>

        {/* Achievements Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Mudrika */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-[#2bbbad] pb-2">
              Mudrika Khandelwal
            </h2>
            <div className="space-y-4">
              {recognitions.mudrika.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-md transition text-gray-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Others */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-[#2bbbad] pb-2">
              Other Achievements
            </h2>
            <div className="space-y-4">
              {recognitions.others.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-md transition text-gray-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tweets Section */}
      <div className="w-[85%] max-w-5xl m-auto mt-20">
        <h1 className="text-3xl font-bold text-center text-[#2bbbad] mb-10">
          Tweets About Us
        </h1>
        <div className="flex justify-center">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition w-full md:w-2/3 border border-gray-200">
            <img
              src={tweet.img}
              alt={tweet.alt}
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Lab in News Section */}
      <div className="w-[90%] max-w-6xl m-auto mt-20">
        <h1 className="text-3xl font-bold text-center text-[#2bbbad] mb-12">
          Lab in News
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition border border-gray-200"
            >
              <img
                src={article.img}
                alt={article.alt}
                className="w-full h-64 object-cover"
              />
              <div className="p-3 text-center text-gray-600 text-sm">
                {article.alt}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Videos Section */}
      <div className="w-[90%] max-w-6xl m-auto mt-20 mb-16">
        <h1 className="text-3xl font-bold text-center text-[#2bbbad] mb-12">
          Videos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-white"
            >
              <iframe
                className="w-full h-64"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recognition;
