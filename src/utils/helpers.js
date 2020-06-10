export default {
  getImageMap: (images, regex, hasMultipleImages = false, limit = 3) => {
    return images.reduce((map, image) => {
      const slug = image.node.relativePath.match(regex)[0]
      if (hasMultipleImages) {
        if (map.hasOwnProperty(slug)) {
          if (map[slug].length <= limit)
            map[slug].push(image.node.childImageSharp.fluid)
        } else {
          const arr = []
          arr.push(image.node.childImageSharp.fluid)
          map[slug] = arr
        }
      } else {
        map[slug] = image.node.childImageSharp.fluid
      }
      return map
    }, {})
  },
}
