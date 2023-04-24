## Blog App Using Next.js and Tailwind CSS

This is a Next.js project that uses Tailwind CSS styling. It fetches form and comment data from these APIs (https://jsonplaceholder.typicode.com/posts and https://jsonplaceholder.typicode.com/comments), displays them and allows users to edit and update posts.

This app currently:

✔️ Lists all resources (posts) on the home page

✔️ Displays a specific post in detail 

✔️ Allows users to create a new post using a form (although the API can't actually be updated on the server, if the POST request has be successfully sent a message showing the data sent will be printed in the Developer Tools console)

✔️ Allows users to edit existing posts using a form (although the API can't actually be updated on the server, if the PUT request has be successfully sent a message showing the data sent will be printed in the Developer Tools console)


If you're curious to see the wireframes I used to conceptualise this project, you can view them [here](https://excalidraw.com/#json=qAZcNVxbTr-whRHYWFyDF,c3lm5KJB7Dz0uvOjdGmNVA) on Excalidraw.

## Additional Features and Next Steps

Given more time, I would like to:

💡 Allow users to delete a form

💡 Display a toast upon submission of a new or updated post that notifies users their post has been submitted

💡 Integrate my existing code to create a reusable form component that can be used for both creating new posts and editing existing posts. (I would include reusable JSX where new posts would simply take in empty objects as the defaultValue properties of their input elements, and a parameter that would decide through conditional logic whether to make a POST or PUT request depending on whether the post was new or existing

💡 Add and update my styling to increase accessibility for screen-readers by adding ARIA elements and more explicity naming of tags

💡 Add data validation to only accept post creation and edits with input values of a given length and type

## This App Is Currently Deployed on Vercel! 🌏

You can visit it [here](https://next-js-blog-f866nulkp-michellegreensted.vercel.app/) 👋
