import React from 'react';

const TitleSubCategory = ({ items, loading }) => {
    if(loading) {
        return <>...</>
    }
    const ti = items.map((item, index) => {
        if(index == 0){
            var title = item['category']
            return title
        }
    })

    return ti
}

export default TitleSubCategory;