app.directive("testDirective", function() {
    return {
        restrict: "A", //E for Element name, A for Attribute, C for Class, M for Comment
        template: "<h1>Make by a directive!"
    };
})