#am i suppose to make a column average of the bronze medals that won at least one gold medal?

# https://bitbucket.org/hrojas/learn-pandas


from pandas import DataFrame, Series
import pandas as pd
import numpy as np


def avg_medal_count():
    '''
    Compute the average number of bronze medals earned by countries who 
    earned at least one gold medal.  
    
    Save this to a variable named avg_bronze_at_least_one_gold. You do not
    need to call the function in your code when running it in the browser -
    the grader will do that automatically when you submit or test it.
    
    HINT-1:
    You can retrieve all of the values of a Pandas column from a 
    data frame, "df", as follows:
    df['column_name']
    
    HINT-2:
    The numpy.mean function can accept as an argument a single
    Pandas column. 
    
    For example, numpy.mean(df["col_name"]) would return the 
    mean of the values located in "col_name" of a dataframe df.
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
    olympic_medal_counts = {'country_name' : Series(countries),
            'gold' : Series(gold),
            'silver': Series(silver),
            'bronze': Series(bronze),
            'total': Series(total)}

    df = pd.DataFrame(olympic_medal_counts)

    bronze_with_atleast_one_gold_medal = df['bronze'][df['gold'] > 0]
    average_bronze_atleast_one_gold = np.mean(bronze_with_atleast_one_gold_medal)
    print average_bronze_atleast_one_gold
    return average_bronze_atleast_one_gold


avg_medal_count()

# ------------------------------------------------------------------

# d = {'one': Series([1, 2, 3], index = ['a', 'b', 'c']),
#     'two': Series([1, 2, 3, 4], index = ['a', 'b', 'c' , 'd'])}

# af = DataFrame(d)
# print af

# print ""
# print "average"
# print af.apply(np.mean)
# print ""

# print af['one'].map(lambda x: x>= 1)

# ------------------------------------------------------------------

# data = {'year': [2010, 2011, 2012, 2011, 2012, 2010, 2011, 2012],
#         'team': ['Bears', 'Bears', 'Bears', 'Packers', 'Packers', 'Lions',
#                  'Lions', 'Lions'],
#         'wins': [11, 8, 10, 15, 11, 6, 10, 4],
#         'losses': [5, 8, 6, 1, 5, 10, 6, 12]}
# football = pd.DataFrame(data)
# print football.iloc[[0]]
# print ""
# print football.loc[[0]]
# print ""
# print football[3:5]
# print ""
# print football[football.wins > 10]
# print ""
# print football[(football.wins > 10) & (football.team == "Packers")]
# print ""
# print football['wins'].apply(np.mean)



  # Compute the average number of bronze medals earned by countries who 
  #   earned at least one gold medal.  

