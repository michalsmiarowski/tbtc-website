// Chunks integration items into rows of a given column number
import ImageLink from "./ImageLink";
import React from "react";

/**
 *
 * Chunks ImageLink items into rows of a given column number
 *
 * If last row has less items than {numColumns} then add uneven class to this row
 *
 * @param {Object[]} items
 * @params {string} items[].url - url to external site
 * @params {string} items[].label - name that will show in the link
 * @params {Object} items[].logo
 * @params {string} items[].logo.alt - alternative text for the image
 * @params {Object} items[].logo.childImageSharp
 * @params {Object|string|element} items[].logo.image - either object, string (path to the image) or React element that returns the image
 * @param {number} numColumns - number of columns you want to have
 * @param {string} key - prefix for key
 * @return {unknown[]}
 */
export function formatImageLinkRows(items, numColumns, key) {
  const chunks = []
  while (items.length) {
    chunks.push(items.splice(0, numColumns))
  }

  return chunks.map((chunk, i) => (
    <ul
      className={`row-ul-container ${
        chunk.length < numColumns ? "uneven" : ""
      }`}
      key={`${key}-ul-${i}`}
    >
      {chunk.map((item, j) => (
        <li className={`row-li-container`} key={`${key}-ul-${i}-li-${j}`}>
          <ImageLink
            url={item.url}
            label={item.name}
            image={item.logo}
            className="image-link"
          />
        </li>
      ))}
    </ul>
  ))
}