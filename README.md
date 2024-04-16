# Command Line SendKeys

A simple Node.js script to send keystrokes from the command line using the `sendkeys` package.

## Usage

1. Install Node.js if you haven't already: [Node.js](https://nodejs.org/)

2. Install the required package:

    ```bash
    npm install sendkeys
    ```

3. Run the script:

    ```bash
    node sendkeys.js [options] input
    ```

    Replace `[options]` with any of the following:

    - `-s`: Start delay in milliseconds (default: 0)
    - `-r`: Number of times to repeat sending the input (default: 1, use `-1` for infinite repetitions)

    Replace `input` with the string you want to send as keystrokes.

## Example

Send the string "Hello" with a start delay of 2000 milliseconds and repeat 5 times:

```bash
node index.js -s 2000 -r 5 Hello
```


## Dependencies

- [sendkeys](https://www.npmjs.com/package/sendkeys): A Node.js module for sending simulated keyboard events.


## Acknowledgements

This program utilizes the `sendkeys` module developed by [Benjamin G](https://github.com/DayBr3ak).


## License

This project is licensed under the WTFPL - Do What the Fuck You Want to Public License.

You can find a copy of the license in the [LICENSE](LICENSE) file.
