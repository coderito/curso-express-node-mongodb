const leerUrls = async (req,res) => {
    const urls = [
        {origin: "www.google.com", shortURL: "gsadga"},
        {origin: "www.google.com1", shortURL: "gsadga"},
        {origin: "www.google.com2", shortURL: "gsadga"},
    ]

  res.render("home", {urls: urls})
}

module.exports = {
    leerUrls
}