/**
 * Contains the miscellaneous route handlers.
 * @author Bismark Amuna <https://github.com/Bismark-A>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
