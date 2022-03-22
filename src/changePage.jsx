function changePage(title) {
    const pageTitle = title;

    document.title = pageTitle;

    return () => {
        document.title = pageTitle;
    }
}

export default changePage;