export const transformPathnameToTitle = pathname => {
	const lowerCaseTitle = pathname === "/" ? "home" : pathname.replace(/\//g, "");

	return lowerCaseTitle.charAt(0).toUpperCase() + lowerCaseTitle.slice(1);
};