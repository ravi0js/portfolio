const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

// {
//     "image": "https://res.cloudinary.com/dhxrdfio8/image/upload/v1714813551/m1yth7h5opb54deregbw.png",
//     "title": "Attendance Report",
//     "description": "Essential attendance management; automate data capture, generate reports. Web app creates employee attendance reports within set timeframe.",
//     "github": "#",
//     "knowMore": "#"
//   },
//   {
//     "image": "https://res.cloudinary.com/dhxrdfio8/image/upload/v1714813550/fp5hkpi52sgxiz7ybhvj.png",
//     "title": "NextCampus~Blog",
//     "description": "Platform for writers to publish diverse blog posts, connecting with wider audience; offers personal and professional benefits.",
//     "github": "#",
//     "knowMore": "#"
//   },