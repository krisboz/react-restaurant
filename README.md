# Restaurant FE App made with React

It's a fully responsive FE React App for an imaginary Pizzeria
It has a fully function shopping cart that I've decided to solve using just plain old
Context API in combination with my own reducers.

A weird problem that I didn't expect was dealing with currencies, I tried implementing my own way but
I've ran into some really weird behaviour, like not rounding up correctly and such, in the end I've just ended up
using val.toFixed(2), however next time when I'm gonna be dealing with money and / or currencies I'm pretty sure
I'm gonna use a package for that.
All in all I'm pretty satisfied with how it turned out.
