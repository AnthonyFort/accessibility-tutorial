# Web Accessibility Tutorial

## Introduction

I made the Web Accessibility Tutorial so that I could learn more about accessibility best practices and practise implementing some of those best practices myself.

The first version was completed in four days (10/01/24 - 13/01/24). Currently, it is only suitable for desktop, but I hope to make it suitable for a wider range of devices in the future. Indeed, this is an important accessibility feature in itself.

## Languages Used

HTML, CSS, JavaScript

## Planning and Execution

- Day 1: I made a written brief of the project.
- Day 2: Working from the brief, I produced a [wireframe](https://www.figma.com/file/B4S2ADKNtlOMnnx31wkY7D/Accessibility-Tutorial?type=design&node-id=0-1&mode=design&t=ePtCZfP6809pnS46-0).
- Day 3: I coded most of the tutorial in VS code.
- Day 4: I finished coding and deployed the tutorial on Netlify.

## Challenges

### Creating Mobile-Friendly Version

In the desktop version, each topic is covered on a single page with no scrolling necessary. A mobile-friendly version would either need to split into two pages or introduce scrolling. I have a slight preference for creating a new page (I realise this is debatable), but implementing this would require me to rethink the JavsScript logic for the page navigation.

### Font Resizing

There was not much text on the page, but were where to be more, a larger font size could well create issues for page layout. 

Also, I didn't succeed in finding an effective way to rescale the SVG images such that they all increased and decreased to a satisfactory degree. As such, I did not include an SVG rescaling feature.

### Information Density

I opted for very brief descriptions of each topic. I believe this made content easier to process, but it comes at the expense of exploring a topic in detail. In future tutorial projects, I would like to explore ways of increasing the information density while maintaining a clean layout.