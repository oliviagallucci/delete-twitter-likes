# delete-twitter-likes
Bulk delete Twitter likes

## Usage 

### Steps 
1. Open a browser of your choice 
   * I used Brave 
2. [Login](https://twitter.com/login?lang=en) to Twitter 
3. Navigate to your likes page: https://twitter.com/your_username/likes
4. Right-click anywhere on the page an hit `Inspect Element`
5. Navigate to the console 

## Warranty and license
This project is licensed under the General Public License version 3.0 - see the [LICENSE.md](LICENSE.md) file for details

It's worth noting that automating actions like this on social media platforms can be against their terms of service, and may result in account suspension or other consequences.

Be careful! 

## Default script usage 

```JavaScript
setInterval(() => {
  document.querySelectorAll('div[data-testid="unlike"]')[0].click(); 
  window.scrollTo(0, window.pageYOffset+300);
}, 2000);
```

### Explanation

This code uses JavaScript to automate the process of unliking posts on a web page. It sets up a function that uses the `setInterval()` method to execute code repeatedly every 2000 milliseconds (or two seconds). Someone reported that waiting longer intervals--in this case, two seconds--decreases rate limiting by Twitter's API. 


Within the `setInterval()`, the program selects all the `div` elements with the `data-testid` attribute set to "unlike" using the `document.querySelectorAll()` method. It then clicks on the first element it finds using the `click()` method.

After that, it scrolls the page down by 300 pixels using the `window.scrollTo()` method. This is done to make sure that more posts are loaded and available for unliking.

The code is meant to be executed in the browser console, and it assumes that the page being viewed has a "unlike" button for each post, as well as a scrollbar that can be scrolled down. 

## Modifications 

### Specify year 

Here's an updated version of the JavaScript code that removes only the liked posts that were liked after 2020:

```JavaScript 
setInterval(() => {
  // get all the like buttons in an array
  let likeButtons = Array.from(document.querySelectorAll('div[data-testid="unlike"]'));

  // filter the like buttons that were liked after [year]
  let recentLikeButtons = likeButtons.filter(button => {
    let likeDate = new Date(button.closest('div').querySelector('abbr').getAttribute('title'));   
    //                 
    //                  == removes tweets on [year]
    // MODIFY >=        >= removes tweets before [year]
    //                  <= removes tweets after [year]
    //
    return likeDate.getFullYear() >= 2020; 
  });

  // click on the first recent like button found
  if (recentLikeButtons.length > 0) {
    recentLikeButtons[0].click();
  }

  // scroll down the page to load more posts
  window.scrollTo(0, window.pageYOffset+300);
}, 2000);
```

This code works similarly to the original, but it now includes a filtering step that only keeps the like buttons that were liked after 2020. It does this by first selecting all the like buttons on the page using `querySelectorAll()`, and then using the `filter()` method to keep only the ones whose like date is after 2020.

The date of each like is obtained by finding the `title` attribute of the nearest `abbr` element to the like button, and creating a new `Date` object from it. Then, we compare the year of the date to 2020 and return a boolean value that indicates whether the like is recent or not.

The code then proceeds to click on the first recent like button found, and scrolls down the page to load more posts as before.

## Date 

```JavaScript
setInterval(() => {
  // get all the like buttons in an array
  let likeButtons = Array.from(document.querySelectorAll('div[data-testid="unlike"]'));

  // filter the like buttons that were liked after [date]
  let recentLikeButtons = likeButtons.filter(button => {
    let likeDate = new Date(button.closest('div').querySelector('abbr').getAttribute('title'));
    //
    //                          
    // MODIFY DATE           
    //
    //
    let cutoffDate = new Date('February 2, 2020');
    //                      
    //                  == removes tweets on [date]
    // MODIFY >=        >= removes tweets before [date]
    //                  <= removes tweets after [date]
    //
    return likeDate.getTime() >= cutoffDate.getTime();
  });

  // click on the first recent like button found
  if (recentLikeButtons.length > 0) {
    recentLikeButtons[0].click();
  }

  // scroll down the page to load more posts
  window.scrollTo(0, window.pageYOffset+300);
}, 2000);
```

This code is similar to the previous modification, but it includes a new filtering step that only keeps the like buttons that were liked after `February 2nd, 2020`.

This is done by creating a `Date` object for the cutoff date, which is `February 2nd, 2020`, and then comparing it to the like date for each like button using the `getTime()` method. Only the like buttons whose like date is after the cutoff date will be kept.

The rest of the code is the same as before, where the first recent like button found is clicked, and the page is scrolled down to load more posts.

## Releases 

Beta 1.0

## Authors

* [Olivia Gallucci](https://github.com/oliviagallucci) - code author 
* See also the list of [contributors](https://github.com/oliviagallucci/delete-twitter-likes) who participated in this project.
