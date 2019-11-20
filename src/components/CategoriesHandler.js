import React from "react";
import CategoryStore from "./store/CategoryStore";
import { NavLink } from "react-router-dom";

//ADD API JSON

function CategoriesHandler() {
  const [categories, setcategories] = useState(CategoryStore.getCourses());

  useEffect(() => {
    CategoryStore.addChangeListener(onChange);
    const slug = props.match.params.slug; // from the path '/courses/:slug'
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      console.log("slug", slug);
      setCourse(courseStore.getCourseBySlug(slug));
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  const activeClassName = "selected";
  return (
    <div className="categories-handler">
      <h4>Elegí tu categoría</h4>
      <NavLink
        className="btn btn-default circle black"
        activeClassName={activeClassName}
        exact
        to="/man"
      >
        Hombre
      </NavLink>
      <NavLink
        className="btn btn-default circle black"
        activeClassName={activeClassName}
        to="/woman"
      >
        Mujer
      </NavLink>
      <NavLink
        className="btn btn-default circle black"
        activeClassName={activeClassName}
        to="/boys"
      >
        Niños
      </NavLink>
    </div>
  );
}

export default CategoriesHandler;
