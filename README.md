# NOVAR Clothing     ![](https://raw.githubusercontent.com/Kvaara/NOVAR_Clothing/main/src/assets/logo_transparent_svg.svg)
This is a pretty big React project that I've been working on. Many of the React libraries and tools have been implemented/used such as [React Hooks](https://reactjs.org/docs/hooks-intro.html), [Redux](https://react-redux.js.org/), [Redux-Saga](https://redux-saga.js.org/), [React Router](https://www.npmjs.com/package/react-router), [React Context API](https://reactjs.org/docs/context.html) and [session storage](https://www.robinwieruch.de/local-storage-react).

In addition, I have used the [Redux-Persist](https://www.npmjs.com/package/redux-persist) library for session persistence. I've also tried to use [Memoization](https://rossbulat.medium.com/how-to-memoize-in-react-3d20cbcd2b6e) in all possible aspects (**tried**) for the sake of performance increases. There's also code-splitting in the application, which is done through React Suspense and lazy.

You can make an account on the website using email and password or you can simply just login through Google! I have used Google Firebase as a backend for the authentication and registeration.

This project itself is a lot like an e-commerce website where you could buy clothing & accessories. The payment would be done through [Stripe](https://stripe.com/en-fi).

> Note: ~~project is still in development! The development is about 75% done.~~ The project is now 100% done! I might do some improvements in the future but for now this has been a fun project.

**However, the application is production ready (to an extent) and can be found on Heroku:**

[![See on Heroku](https://raw.githubusercontent.com/Kvaara/NOVAR_Clothing/main/client/public/heroku-logotype-horizontal-purple.svg)](https://novar-clothing.herokuapp.com/)

## Performance test as of 12.6.2021 using lighthouse performance scoring:
![](https://raw.githubusercontent.com/Kvaara/NOVAR_Clothing/main/Lighthouse%20performance%20scoring%20(12.6.2021).png)
**This report can be found [here](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fnovar-clothing.herokuapp.com%2F)** 

If I were to comment this I'd say that the **report was kind of good**. Performance needs to be improved upon and that's for certain. I knew even before this test that the **website could perform even faster** than it currently does. However, frankly speaking I'm a total newbie in the React realm so improving performance is **one of the hardest things for me**. I will be improving the performance until I'm **100%** done with this project. I'm pretty curious about how much more performant I can make the website. **I'll try to aim for at least a performance score of 80** before I'll put this project into the rest.

> Of course hosting on Heroku could be the bottleneck but even then performance can 100 % be better.
