from pandas import DataFrame, Series
import pandas as pd
import numpy as np


#################
# Syntax Reminder:
#
# The following code would create a two-column pandas DataFrame
# named df with columns labeled 'name' and 'age':
#
# people = ['Sarah', 'Mike', 'Chrisna']
# ages  =  [28, 32, 25]
# df = DataFrame({'name' : Series(people),
#                 'age'  : Series(ages)})

def create_dataframe():
    '''
    Create a pandas dataframe called 'olympic_medal_counts_df' containing
    the data from the table of 2014 Sochi winter olympics medal counts.  

    The columns for this dataframe should be called 
    'country_name', 'gold', 'silver', and 'bronze'.  

    There is no need to  specify row indexes for this dataframe 
    (in this case, the rows will automatically be assigned numbered indexes).
    
    You do not need to call the function in your code when running it in the
    browser - the grader will do that automatically when you submit or test it.
    '''

    countries = ['Russian Fed.', 'Norway', 'Canada', 'United States',
                 'Netherlands', 'Germany', 'Switzerland', 'Belarus',
                 'Austria', 'France', 'Poland', 'China', 'Korea', 
                 'Sweden', 'Czech Republic', 'Slovenia', 'Japan',
                 'Finland', 'Great Britain', 'Ukraine', 'Slovakia',
                 'Italy', 'Latvia', 'Australia', 'Croatia', 'Kazakhstan']

    gold = [13, 11, 10, 9, 8, 8, 6, 5, 4, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    silver = [11, 5, 10, 7, 7, 6, 3, 0, 8, 4, 1, 4, 3, 7, 4, 2, 4, 3, 1, 0, 0, 2, 2, 2, 1, 0]
    bronze = [9, 10, 5, 12, 9, 5, 2, 1, 5, 7, 1, 2, 2, 6, 2, 4, 3, 1, 2, 1, 0, 6, 2, 1, 0, 1]

    array_1 = np.array(gold, int)
    array_2 = np.array(silver, int)
    array_3 = np.array(bronze, int)
    total = array_1 + array_2 + array_3

    # your code here
    data = {'country_name' : Series(countries),
            'gold' : Series(gold),
            'silver': Series(silver),
            'bronze': Series(bronze),
            'total': Series(total)}

    olympic_medal_counts_df = pd.DataFrame(data)
    return olympic_medal_counts_df


# print create_dataframe()

d = {'one': Series([1, 2, 3], index = ['a', 'b', 'c']),
    'two': Series([1, 2, 3, 4], index = ['a', 'b', 'c' , 'd'])}

af = DataFrame(d)
print af

print af.apply(np.mean)
print ""

print af['one'].map(lambda x: x>= 1)