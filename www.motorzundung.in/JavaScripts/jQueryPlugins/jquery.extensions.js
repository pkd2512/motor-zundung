jQuery.fn.matchDimensions = function (dimension) {

    var itemsToMatch = jQuery(this),
        maxHeight = 0,
        maxWidth = 0;

    if (dimension !== "undefined") {

        switch (dimension) {

        case "height":

            itemsToMatch.css("height", "auto").each(function () {

                maxHeight = Math.max(maxHeight, jQuery(this).height());

            });

            itemsToMatch.height(maxHeight);

            break;

        case "width":

            itemsToMatch.css("width", "auto").each(function () {

                maxWidth = Math.max(maxWidth, jQuery(this).width());

            });

            itemsToMatch.width(maxWidth);

            break;
        }

    } else {

        itemsToMatch.each(function () {

            var thisItem = jQuery(this);

            maxHeight = Math.max(maxHeight, thisItem.height());
            maxWidth = Math.max(maxWidth, thisItem.width());

        });

        itemsToMatch.css({
            "width": "auto",
            "height": "auto"
        }).height(maxHeight).width(maxWidth);

    }

    return itemsToMatch;
};