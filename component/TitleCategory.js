import React from 'react';

const TitleCategory = ({ items, loading }) => {
    if(loading) {
        return <>...</>
    }
    const ti = items.map((item, index) => {
        if(index == 0){
            var title = item['category_main']
            return title
        }
    })

    return ti
}

export default TitleCategory;