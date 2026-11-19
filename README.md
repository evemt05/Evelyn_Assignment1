# Assignment 1 - Content Subscription Manager

## Setup
Only need node.js installed.

## How to Use
1. Remember to always include contentSubscriptionManager before each function name.
2. addNewUser - Adds new user with the following parameters: name, tier, notificationsPreference, billingDate, playlists. Excluding playlists, the other parameters are String, and playlists is array. So, please use " " for String and [" "] for array.
3. getUserByName - Gets user by name with the following parameter: name. The parameter is a String.
4. deleteUserByName - Deletes user by name with the following parameter: name. The parameter is a String.
5. updateUserAccessTier - Updates user's access tier to either Free or Premium with the following parameters: name, tier. The parameters are String.
6. changeBillingCycle - Updates user's billing cycle to either Monthly or Yearly and calculates the next billing date. The parameters are: name, cycle and are String.
7. addNewPlaylist - Adds new playlist to user's existing playlist with the following parameters: name, playlistName. The parameters are String. 

# References
For user access tiers, playlists and notifications preferences.  
https://www.youtube.com/

For billing cycle.  
https://one.google.com/about/plans?g1_landing_page=60

# AI Declaration
Used Gemini for generating ideas, date conversion example and .splice() example.