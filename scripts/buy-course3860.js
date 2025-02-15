function storeCourse(selectedCourse, navigateTo) {
    if(localStorage.getItem("selectedCourse")) {
        localStorage.removeItem("selectedCourse");
        localStorage.setItem("selectedCourse", selectedCourse.toLowerCase());
    }
    else {
        localStorage.setItem("selectedCourse", selectedCourse.toLowerCase());
    }
    
    window.location.href = navigateTo;
}