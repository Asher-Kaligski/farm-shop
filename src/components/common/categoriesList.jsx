import React from "react";

const CategoriesList = ({
    items,
    textProperty,
    valueProperty,
    selectedItem,
    onItemSelect
}) => {
    const classList = "select-category list-group-item";
    return (
        <ul className="list-group my-1">
            <li
                onClick={() => onItemSelect(null)}
                key="all"
                className={
                    selectedItem ? classList : classList + " active"
                }
            >
                All Categories
            </li>
            {items.map(item => (
                <li
                    onClick={() => onItemSelect(item.name)}
                    key={item[valueProperty]}
                    className={
                        item.name === selectedItem ? classList + " active" : classList
                    }
                >
                    {item[textProperty]}
                </li>
            ))}
        </ul>
    );
};

CategoriesList.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};

export default CategoriesList;
