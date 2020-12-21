/* GET 'about us' page */
module.exports.about = function (req, res) {
  res.render('generic-text', {
    title: 'About Us',
    content:
      'Web application development is not what it used to be even a couple of years back. Today, there are so many options, and the uninitiated are often confused about what’s good for them. This applies not just to the broad stack (the various tiers or technologiesused), but also to the tools that aid in development; there are so many choices. This bookstakes a claim that the MERN stack is great for developing a complete web application,and it takes the reader through all that is necessary to get it done.In this chapter, I’ll give a broad overview of the technologies that make up the MERNstack. I won’t go into details or examples in this chapter; I’ll just introduce the high-levelconcepts. This chapter will focus on how these concepts affect an evaluation of whetherMEAN is a good choice for your next web application project.',
  })
}
