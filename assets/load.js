window.onload = function() {
    var url = window.location.href;
    var anchorIndex = url.indexOf("#");
    var anchor = anchorIndex !== -1 ? url.slice(anchorIndex + 1) : null;

    if (anchor) {
        var targetElement = document.getElementById(anchor);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } else {
            console.warn("未找到具有ID为 " + anchor + " 的元素");
        }
    }
};

function goToTop() {
    window.scrollTo(0, 0);
}

function goToRoot() {
    window.location.href = '/';
}