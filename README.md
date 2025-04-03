# News Blog

## Start with Expo

1. Make sure you have installed **Expo Go** app on your phone
2. Set environment variables from `.env.local`
3. Run the following command, then you will see a QR code
   ```bash
   npx expo start --clear
   ```
4. Scan the QR code, which will lead you to Expo Go and visit our app

## Architecture

![Workflow](/assets/images/docs/workflow.png)

- Screen
   - `HomeScreen` shows news list with loading indicator
   - `FavoriteScreen` shows user saved articles
   - `NewDetailScreen` shows the detail content of a new
- Component
  - `LoadingIndicator` displays loading animation
  - `NewsItem` is each post shown on `NewsList`
  - `NewsList` implements pagination with `FlatList` and hook `useNews`
- Hook
  - `useNews` creates a hook to fetch post from given url, and provides retrieval, loading status, and caller func `loadMoreArticles`
- Redux
  - `favoriteSlice` stores saved articles

## Design Thoughts

> In 2025, I complete this by my own research ability from [document](https://docs.expo.dev/), tremendous blogs, and combine with the capability of Grok.

1. At first, I used `npx create-expo-app@latest` to initialize the project and checked its structure (layout, file, components...)
2. Search for best practices in React Native
3. I started to plan app sturcture and its components, refer to my previous working experience
4. Allowed Grok to generate some simple features, then I modified the code to be compatible with the project
5. Final testing after several enhancements


### Tab Navigation

In Expo, the framework brings simplity with `(tabs)` folder and `Tab` component as navigation bar. 

Initially, the news will be opened with `Modal`. However, I don't think this is a good design for user even though the article content is not particularly long.

Therefore, I started investigating further the impact on the layout.

### News Detail Screen

I have come across an issue when trying to pass the selected article to this screen.

I’ve considered several approaches, such as using another hook or storing it in Redux. However, I want to avoid using outdated implementations suggested by AI as much as possible.

So, I searched through StackOverflow and various documents regarding scenarios for passing parameters to a screen.

In the end, I used `useLocalSearchParams<NewsArticle>()` to store the passed data. I also replaced `NewsArticle` from an interface to a type and changed its author attribute from `author: string | null` to `author: string | ''` to resolve the incompatibility issue when defining `NewsArticle` in useLocalSearchParams.