import React from 'react'

const Section = props => {
  var requestURL = 'http://localhost:4000/videos'
  var request = new XMLHttpRequest()

  request.open('GET', requestURL)
  request.responseType = 'text'
  request.send()

  // request.onload = function() {
  //   const filtervidstext = request.response
  //   const filtervids = filtervidstext.filter(
  //     event => event.categories === 'Cat A'
  //   )
  //   const final = JSON.parse(filtervids)
  //   // populateHeader(final)
  //   console.log(final)
  // }
  // function populateHeader(jsonObj) {
  //   var myH1 = document.createElement('h1')
  //   myH1.textContent = jsonObj['categories']
  //   header.appendChild(myH1)
  // }
  // }
  request.onload = filtervidstext =>
    JSON.parse(request.response.filter(event => event.categories === 'Cat A'))
}

export default Section
