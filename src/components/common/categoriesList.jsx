import React from "react";

const CategoriesList = ({
    items,
    textProperty,
    valueProperty,
    selectedItem,
    onItemSelect
}) => {

    return (
        <ul className="list-group my-1">
            <li
                onClick={() => onItemSelect(null)}
                key="all"
                className={
                    selectedItem ? "list-group-item" : "list-group-item active"
                }
            >
                All Categories
            </li>
            {items.map(item => (
                <li
                    onClick={() => onItemSelect(item.name)}
                    key={item[valueProperty]}
                    className={
                        item.name === selectedItem ? "list-group-item active" : "list-group-item"
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
