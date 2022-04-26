# Search
Allows users to filter information from a list of names based on their input into a search field.

## Search Component

The search component displays a list of data (in the example, first and last names) and a SearchBar component, which allows users to search for terms (names) and it filters down/ displays an updated list of data.

If you'd like this to do something different than filter names, change the filter/map functions in the Search searchData Div. 

Future alternate versions may allow users to pick the field they wish to search for.

## Searchbar Component

The SearchBar takes in the user input, saves it to a state var and passes it back via a handler function where the Search component filters the input against the data list and maps the filtered results back to the screen. 