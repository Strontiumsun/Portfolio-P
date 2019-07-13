Idea for a new component

This will be a comic viewing component, or a galley component.
How it'll work:
The comics will be presented as thumbnails
Clicking on a thumbnail will pop open a modal with that comic page at a larger size
Navigation buttons will appear as well
If you click on the next button, it will display the next comic page. If you click on the previous button, it'll display the previous page
There will be a button to exit out of the modal

What code is needed:

- This will be a component that is extended
- a state will need to be set for the current page, the previous page, and the next page
- When a page is clicked, it becomes this.state.current. The page before it becomes this.state.previous and the page after it becomes this.state.next
-- I wonder how we can tell the program which is the next page. Would that involve an array of sorts? Hmm...
-- When the previous button is clicked, the previous page becomes the this.state.current, and the current page becomes this.state.next
-- When the page is loaded, should the first page state be loaded in? 

Here's a good example to work off of
https://github.com/frontend-collective/react-image-lightbox