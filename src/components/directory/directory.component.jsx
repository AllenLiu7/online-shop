import React from "react";
import { connect } from "react-redux";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { selectSection } from "../../redux/dicrectory/directory.selectors";

function Directory({ section }) {
  return (
    <div>
      <div className="directory-menu">
        {section.map(({ id, ...otherprops }) => (
          <MenuItem key={id} {...otherprops} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  section: selectSection(state),
});

export default connect(mapStateToProps)(Directory);
