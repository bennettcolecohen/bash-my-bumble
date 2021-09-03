# Dependencies
import numpy as np
import pandas as pd
import random
import re

match_df = pd.read_csv('bcc_bumble.csv')
# Loading in csv files
cat_df = pd.read_csv("/Users/bennettcohen/Desktop/bmb_flask2/data/cat_male.csv")
cat_df = cat_df.applymap(lambda s: s.lower() if type(s) == str else s)
cat_df = cat_df.T
cat_df = cat_df.reset_index().iloc[1:]
cat_df.columns = cat_df.iloc[0]
cat_df = cat_df.iloc[1:]
pattern2 = r'(\w+)\.*'
cat_df['Category'] = cat_df['Category'].str.extract(pattern2)
cat_df = cat_df.applymap(lambda s: s.lower() if type(s) == str else s)


# Get Most Common Value 
most_common = []
column_list = match_df.iloc[:,2:-1].columns
for col in column_list: 
    arr = match_df[col]
    val = arr.value_counts().index[0]
    most_common.append(val)
common_df = pd.DataFrame(data = {'Category': column_list, 
                                'value': most_common})
# Getting the choices 
choices = common_df.merge(cat_df, 
                how = 'inner', 
                left_on = ['Category', 'value'], 
                right_on = ['Category', 'value']).apply(lambda x: np.random.choice(x), axis=1)
choices.replace(np.nan, 'null', inplace = True)
output = '-'.join(choices)
print(cat_df)
