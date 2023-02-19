
# delete-twitter-likes ![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white) [![GPLv3 license](https://img.shields.io/badge/License-GPLv3-green.svg?style=for-the-badge)](http://perso.crans.org/besson/LICENSE.html) ![JavaScript](https://img.shields.io/badge/javascript-9558B2.svg?style=for-the-badge&logo=JavaScript&logoColor=%23F7DF1E) ![Github-sponsors](https://img.shields.io/badge/sponsor-pink?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#EA4AAA) 

Bulk delete Tweets you have liked on Twitter! :bird:

## Usage 
![](https://github.com/oliviagallucci/delete-twitter-likes/blob/main/delete-twitter-likes-usage.gif)

### Steps
1. Open a browser of your choice. I used [Brave](https://brave.com/).
2. [Login](https://twitter.com/login?lang=en) to Twitter 
3. Navigate to your likes page: https://twitter.com/your_username/likes
4. Right-click anywhere on the page an hit `Inspect` or `Inspect Element`.
5. Navigate to the console 
6. Paste the [JavaScript](https://github.com/oliviagallucci/delete-twitter-likes#default-script-usage) into the console and hit the `enter` key on your keyboard. 
7. Watch the script unlike posts
8. Refresh your browser when you want to quit the script 

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

### Date 

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

## Warranty  
The author of this tool offers no warranty or guarantee for its performance, reliability, or suitability for any particular purpose.

The tool is provided "as is" without warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.

Use of this tool is entirely at the user's own risk. The author does not accept any liability for any loss, damage or expense incurred by the user or any third party resulting from the use of this tool, whether direct or indirect.

Furthermore, the author expressly disclaims any responsibility or liability for the accuracy, content, or availability of information found through the use of this tool, or for any harm caused by viruses, malware, or other harmful components that may be introduced into your system as a result of using this tool.

By using this tool, the user acknowledges that they have read this warranty statement and agree to assume all risks associated with its use.
