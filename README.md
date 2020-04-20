# render-content
Ways to render HTML content in the browser with javascript / typescript without frameworks

The code in this repository is loosely based on the following blog tutorial which describes the different [ways to render HTML content](https://johnpapa.net/render-html-2/) in the browser using vanilla javascript(typescript in fact) without using front end frameworks or libraries. I follow through and do all the 3 different approaches, although in my opinion the last approach is by far the best one.

## Running the code

Each individual approach is treated as a separate `node` project. To execute the code in the `src` directory do the following:

1. Navigate to the root-level folder of an approach containing a `package.json` file.
2. Run ```npm install``` to install the development dependencies. There are only two: the `typescript` compiler and `lite-server`. Both will be installed locally when you execute this command.
3. From a terminal either run ```npx tsc -w``` or ```node_modules/.bin/tsc -w``` to automatically watch for and compile changes in multiple typescript files in the project.
4. From a separate terminal run ```npx lite-server``` or ```npm run dev``` to launch the development server in your browser.
